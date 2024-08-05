import { Box, Typography, Stack, Chip } from '@mui/material';
import { useState, useEffect } from 'react';

const mermaidTags = [
  {
    id: 1,
    text: 'FlowChart',
    desc: `Create a flow chart software engineering.`
  },
  {
    id: 2,
    text: 'Sequence diagram',
    desc: 'Generate a sequence diagram describing the principle of PKI encryption.'
  },
  {
    id: 3,
    text: 'Class diagram',
    desc: 'Generate a classDiagram for an e-commerce website.'
  },
  {
    id: 4,
    text: 'ER diagram',
    desc: 'Generate erDiagram for an Order System.'
  },

  {
    id: 5,
    text: 'Mindmap',
    desc: 'create a mindmap of AI.'
  }
];

const plotlyTags = [
  {
    id: 1,
    text: 'Heatmaps',
    desc: `Create a heatmaps.`
  },
  {
    id: 2,
    text: 'Box Plots',
    desc: 'create a box plots.'
  },
  {
    id: 3,
    text: '3D Surface Plots',
    desc: 'Generate a 3D Surface Plots.'
  },
  {
    id: 4,
    text: '3D Scatter Plot',
    desc: 'Create a 3D Scatter Plot.'
  },

  {
    id: 5,
    text: 'Mindmap',
    desc: 'create a mindmap of LLM.'
  }
];

const pageTags = [
  {
    id: 1,
    text: 'Landing page',
    desc: `Create an attractive landing page for a startup,the page's styles and appearance are well-coordinated. the page include:
1.Header: Beautiful logo and navigation.
2.Hero: Compelling headline and service description of startup,the background has a gradient color effect.
3.Features: Key benefits, with icons/images.
4.Social Proof: Testimonials, awards, recognition.
5.FAQ: Address common customer questions.
6.Banner: Beautiful Highlight offers, promotions, value proposition.
7.Footer: Contact info,policies.`
  },
  {
    id: 2,
    text: 'Data grid',
    desc: 'Create a beautiful data grid page. The page should have the ability to add new record and delete,edit table record, as well as support advanced features such as pagination, sorting, and searching.'
  },
  {
    id: 3,
    text: 'Todo list',
    desc: `Create a beautiful todo list app with the following features:
1.Allow users to add, delete, and edit tasks.
2.Implement a filter to show all, completed, or active tasks. 
`
  },
  {
    id: 4,
    text: 'Coffee shop',
    desc: `Create a beautiful page for the coffee shop with warm color tones including:
1.Shopping cart: add products into shopping cart,remove and view products in shopping cart by dialog.
2.Header: navigation with link.
3.Hero: coffee shop's philosophy, culture with image and descriptions.
4.Products: 3 products with image and descriptions.
5.Banner: highlight offers, value proposition.
6.Footer: contact info,policies.
`
  },
  {
    id: 5,
    text: 'Blog',
    desc: `Create a beautiful personal blog page with the following features:header,hero,personal introduction,blogs,footer.`
  },
  {
    id: 6,
    text: 'Chart',
    desc: `Generate a line charts showing how the company's total yearly budget has changed over the last 5 years with following data:
[
    { year: 2018, budget: 300000 },
    { year: 2019, budget: 100000 },
    { year: 2020, budget: 350000 },
    { year: 2021, budget: 380000 },
    { year: 2022, budget: 400000 },
  ]
`
  },

  {
    id: 7,
    text: 'Calculator',
    desc: 'Develop a web-based mini application that functions as a calculator. The user interface should be intuitive and user-friendly,'
  }
];

const PromptTemplates = ({ setPrompt, template }) => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    console.log(template);
    if (template === 'React/Mui' || template === 'React/Tailwind')
      setTags(pageTags);
    if (template === 'React/Mermaid') setTags(mermaidTags);
    if (template === 'React/Plotly') setTags(plotlyTags);
  }, [template]);

  const handleTagClick = (tag) => {
    setPrompt(tag.desc);
  };

  return (
    <Box
      sx={{
        p: 4,
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Stack alignItems="center" spacing={2}>
        <Typography variant="subtitle1" gutterBottom color="text.secondary">
          Prompt Templates
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 2
          }}
        >
          {tags.map((tag) => (
            <Chip
              key={tag.id}
              label={tag.text}
              //   color="primary"
              onClick={() => handleTagClick(tag)}
            />
          ))}
        </Box>
      </Stack>
    </Box>
  );
};

export default PromptTemplates;
