import { lazy } from 'react';
import { LINKS } from "../../constant/linkConstant";

const PagesRoutes = [
  {
    path: LINKS.ERROR_PAGE,
    component: lazy(() => import('../../pages/auth/Error')),
  },

  {
    path: LINKS.AUTH_LOGIN,
    component: lazy(() => import('../../pages/auth/Login')),
  },

  {
    path: LINKS.DASHBOARD,
    component: lazy(() => import('../../pages/module/Dashboard/dashboard')),
  }
]

export default PagesRoutes;