import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/aula-docusauros/blog',
    component: ComponentCreator('/aula-docusauros/blog', 'e0d'),
    exact: true
  },
  {
    path: '/aula-docusauros/blog/archive',
    component: ComponentCreator('/aula-docusauros/blog/archive', '578'),
    exact: true
  },
  {
    path: '/aula-docusauros/blog/first-blog-post',
    component: ComponentCreator('/aula-docusauros/blog/first-blog-post', '84f'),
    exact: true
  },
  {
    path: '/aula-docusauros/blog/long-blog-post',
    component: ComponentCreator('/aula-docusauros/blog/long-blog-post', '6c1'),
    exact: true
  },
  {
    path: '/aula-docusauros/blog/mdx-blog-post',
    component: ComponentCreator('/aula-docusauros/blog/mdx-blog-post', '5eb'),
    exact: true
  },
  {
    path: '/aula-docusauros/blog/tags',
    component: ComponentCreator('/aula-docusauros/blog/tags', 'b37'),
    exact: true
  },
  {
    path: '/aula-docusauros/blog/tags/docusaurus',
    component: ComponentCreator('/aula-docusauros/blog/tags/docusaurus', '722'),
    exact: true
  },
  {
    path: '/aula-docusauros/blog/tags/facebook',
    component: ComponentCreator('/aula-docusauros/blog/tags/facebook', '570'),
    exact: true
  },
  {
    path: '/aula-docusauros/blog/tags/hello',
    component: ComponentCreator('/aula-docusauros/blog/tags/hello', 'f30'),
    exact: true
  },
  {
    path: '/aula-docusauros/blog/tags/hola',
    component: ComponentCreator('/aula-docusauros/blog/tags/hola', '1a0'),
    exact: true
  },
  {
    path: '/aula-docusauros/blog/welcome',
    component: ComponentCreator('/aula-docusauros/blog/welcome', 'b6e'),
    exact: true
  },
  {
    path: '/aula-docusauros/markdown-page',
    component: ComponentCreator('/aula-docusauros/markdown-page', 'a23'),
    exact: true
  },
  {
    path: '/aula-docusauros/docs',
    component: ComponentCreator('/aula-docusauros/docs', '3ed'),
    routes: [
      {
        path: '/aula-docusauros/docs/category/tutorial---basics',
        component: ComponentCreator('/aula-docusauros/docs/category/tutorial---basics', '8c9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/aula-docusauros/docs/category/tutorial---extras',
        component: ComponentCreator('/aula-docusauros/docs/category/tutorial---extras', 'd69'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/aula-docusauros/docs/intro',
        component: ComponentCreator('/aula-docusauros/docs/intro', '0ae'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/aula-docusauros/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/aula-docusauros/docs/tutorial-basics/congratulations', '79e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/aula-docusauros/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/aula-docusauros/docs/tutorial-basics/create-a-blog-post', 'dad'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/aula-docusauros/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/aula-docusauros/docs/tutorial-basics/create-a-document', 'ab2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/aula-docusauros/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/aula-docusauros/docs/tutorial-basics/create-a-page', 'bde'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/aula-docusauros/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/aula-docusauros/docs/tutorial-basics/deploy-your-site', 'a0f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/aula-docusauros/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/aula-docusauros/docs/tutorial-basics/markdown-features', 'e37'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/aula-docusauros/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/aula-docusauros/docs/tutorial-extras/manage-docs-versions', 'e90'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/aula-docusauros/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/aula-docusauros/docs/tutorial-extras/translate-your-site', '1d0'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/aula-docusauros/',
    component: ComponentCreator('/aula-docusauros/', '8e7'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
