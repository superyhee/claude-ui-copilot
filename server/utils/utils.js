const {
  previewPageContent,
  previewPageContentMUI,
  previewPageContentMermaid,
  previewPageContentPlotly,
  previewPageContentTailwind
} = require('./templates');

const getDefaultUIContent = (ui) => {
  console.log(ui);
  switch (ui) {
    // case 'React/Chakra UI':
    //   return previewPageContent;
    case 'React/Mermaid':
      return previewPageContentMermaid;
    case 'React/Plotly':
      return previewPageContentPlotly;
    case 'React/Tailwind':
      return previewPageContentTailwind;
    default:
      return previewPageContentMUI;
  }
};

module.exports = {
  getDefaultUIContent
};
