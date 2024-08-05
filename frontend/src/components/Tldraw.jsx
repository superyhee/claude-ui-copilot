import { CircularProgress } from '@mui/material';
import 'tldraw/tldraw.css';
import React, { lazy, Suspense, useEffect } from 'react';
import ExportButton from './ExportButton';
import { Tldraw, useEditor } from 'tldraw';

export function Draw({ setFiles }) {
  //   useEffect(() => {
  //     const listener = (e) => {
  //       if (e.key === 'Escape') {
  //         setHtml(null);
  //       }
  //     };
  //     window.addEventListener('keydown', listener);
  //     return () => {
  //       window.removeEventListener('keydown', listener);
  //     };
  //   }, []);

  return (
    <>
      <Suspense fallback={<CircularProgress />}>
        <Tldraw persistenceKey="tldraw">
          <ExportButton useEditor={useEditor} setFiles={setFiles} />
        </Tldraw>
      </Suspense>
    </>
  );
}

export default Draw;
