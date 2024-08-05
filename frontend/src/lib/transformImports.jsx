export default (code) => {
  const importReactRegex =
    /import\s+(?:(\w+)\s*,?\s*)?(?:{([^}]+)})?\s+from\s+['"]react['"];?/g;
  const importCssRegex = /import\s+['"]([^'"]+\.css)['"];?/g;
  const importReactDOMRegex = /import\s+\w+\s+from\s+['"]react-dom['"];?/g;
  const reactDomRenderRegex = /ReactDOM\.render\([^)]*\);?/g;
  const importMaterialUIRegex =
    /import\s*{\s*([^}]+?)\s*}\s*from\s*['"]@mui\/material['"];?/g;
  const importRechartsRegex =
    /import\s*{\s*([^}]+?)\s*}\s*from\s*['"]recharts['"];?/g;

  let transformedCode = code;
  let match;
  let defaultImport = '';
  const namedImports = new Set();
  const materialUIImports = [];
  const rechartsImports = [];

  // Remove and process React imports
  while ((match = importReactRegex.exec(code)) !== null) {
    if (match[1]) {
      defaultImport = match[1].trim();
    }
    if (match[2]) {
      match[2].split(',').forEach((imp) => namedImports.add(imp.trim()));
    }
  }

  transformedCode = transformedCode.replace(importReactRegex, '');

  // Remove CSS imports
  transformedCode = transformedCode.replace(importCssRegex, '');

  // Remove ReactDOM imports
  transformedCode = transformedCode.replace(importReactDOMRegex, '');

  // Remove ReactDOM.render statements
  transformedCode = transformedCode.replace(reactDomRenderRegex, '');

  // Remove and process Material-UI imports
  while ((match = importMaterialUIRegex.exec(transformedCode)) !== null) {
    materialUIImports.push(`const { ${match[1]} } = MaterialUI;`);
  }

  transformedCode = transformedCode.replace(importMaterialUIRegex, '');

  // Remove and process Recharts imports
  while ((match = importRechartsRegex.exec(transformedCode)) !== null) {
    rechartsImports.push(`const { ${match[1]} } = Recharts;`);
  }

  transformedCode = transformedCode.replace(importRechartsRegex, '');

  let newImports = '';
  if (defaultImport) {
    newImports += `const ${defaultImport} = window.React;\n`;
  } else {
    newImports += 'const React = window.React;\n';
  }
  newImports += materialUIImports.join('\n') + '\n';
  newImports += rechartsImports.join('\n') + '\n';
  if (namedImports.size > 0) {
    newImports += `const { ${Array.from(namedImports).join(', ')} } = React;\n`;
  }

  const result = newImports + transformedCode;

  // Remove export component
  const removeExportPart = result.replace(/export default \w+;\s*$/, '');

  return removeExportPart;
};
