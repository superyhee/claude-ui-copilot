import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { getBrowserCanvasMaxSize } from './getBrowserCanvasMaxSize';
import { PngHelpers } from './png';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function blobToBase64(blob) {
  return new Promise((resolve, _) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
}

/**
 * This is all copied from node_modules/@tldraw/tldraw/src/lib/utils/export.ts
 */
export async function getSvgAsImage(svg, options) {
  const { type, quality, scale } = options;
  const width = +svg.getAttribute('width');
  const height = +svg.getAttribute('height');
  let scaledWidth = width * scale;
  let scaledHeight = height * scale;
  const dataUrl = await getSvgAsDataUrl(svg);
  const canvasSizes = await getBrowserCanvasMaxSize();
  if (width > canvasSizes.maxWidth) {
    scaledWidth = canvasSizes.maxWidth;
    scaledHeight = (scaledWidth / width) * height;
  }
  if (height > canvasSizes.maxHeight) {
    scaledHeight = canvasSizes.maxHeight;
    scaledWidth = (scaledHeight / height) * width;
  }
  if (scaledWidth * scaledHeight > canvasSizes.maxArea) {
    const ratio = Math.sqrt(canvasSizes.maxArea / (scaledWidth * scaledHeight));
    scaledWidth *= ratio;
    scaledHeight *= ratio;
  }
  scaledWidth = Math.floor(scaledWidth);
  scaledHeight = Math.floor(scaledHeight);
  const effectiveScale = scaledWidth / width;
  const canvas = await new Promise((resolve) => {
    const image = new Image();
    image.crossOrigin = 'anonymous';
    image.onload = async () => {
      await new Promise((resolve) => setTimeout(resolve, 250));
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = scaledWidth;
      canvas.height = scaledHeight;
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(image, 0, 0, scaledWidth, scaledHeight);
      URL.revokeObjectURL(dataUrl);
      resolve(canvas);
    };
    image.onerror = () => {
      resolve(null);
    };
    image.src = dataUrl;
  });
  if (!canvas) return null;
  const blob = await new Promise((resolve) =>
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          resolve(null);
        }
        resolve(blob);
      },
      'image/' + type,
      quality
    )
  );
  if (!blob) return null;
  const view = new DataView(await blob.arrayBuffer());
  return PngHelpers.setPhysChunk(view, effectiveScale, {
    type: 'image/' + type
  });
}

export async function getSvgAsDataUrl(svg) {
  const clone = svg.cloneNode(true);
  clone.setAttribute('encoding', 'UTF-8"');
  const fileReader = new FileReader();
  const imgs = Array.from(clone.querySelectorAll('image'));
  for (const img of imgs) {
    const src = img.getAttribute('xlink:href');
    if (src) {
      if (!src.startsWith('data:')) {
        const blob = await (await fetch(src)).blob();
        const base64 = await new Promise((resolve, reject) => {
          fileReader.onload = () => resolve(fileReader.result);
          fileReader.onerror = () => reject(fileReader.error);
          fileReader.readAsDataURL(blob);
        });
        img.setAttribute('xlink:href', base64);
      }
    }
  }
  return getSvgAsDataUrlSync(clone);
}

export function getSvgAsDataUrlSync(node) {
  const svgStr = new XMLSerializer().serializeToString(node);
  const base64SVG = window.btoa(unescape(encodeURIComponent(svgStr)));
  return `data:image/svg+xml;base64,${base64SVG}`;
}
