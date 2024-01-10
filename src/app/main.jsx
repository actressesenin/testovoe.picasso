import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { appStore } from './appStore';
import { RouterProvider } from 'react-router-dom';
import { router } from './appRouter';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ReduxProvider store={appStore}>
    <RouterProvider router={router} />
  </ReduxProvider>,
);
