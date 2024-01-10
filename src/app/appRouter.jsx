import { createBrowserRouter } from 'react-router-dom';
import App from './index';
import PostInfo from '../entities/post/ui/PostInfo';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/:id',
    element: <PostInfo />,
  },
]);
