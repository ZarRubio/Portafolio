import { index, route } from '@react-router/dev/routes';

export default [
  index('routes/home-es.jsx'),
  route('en', 'routes/home-en.jsx'),
  route('proyectos/:slug', 'routes/project-es.jsx'),
  route('en/projects/:slug', 'routes/project-en.jsx'),
  route('*', 'routes/not-found.jsx'),
];
