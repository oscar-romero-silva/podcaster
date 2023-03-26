import {Route, Routes} from 'react-router-dom';
import {RouterType} from './types';
import routerPagesData from './routerPagesData';

function Router() {
  const pageRoutes = routerPagesData.map(({path, title, element}: RouterType) => {
    return <Route key={title} path={`/${path}`} element={element} />;
  });

  return <Routes>{pageRoutes}</Routes>;
}

export default Router;
