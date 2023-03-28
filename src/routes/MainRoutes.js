import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/DocList')));
const Project = Loadable(lazy(() => import('views/utilities/Project')));
const DocChange = Loadable(lazy(() => import('views/utilities/DocChange')));
const DocSearch = Loadable(lazy(() => import('views/utilities/DocSearch')));
const DocPush = Loadable(lazy(() => import('views/utilities/DocPush')));
const Picture = Loadable(lazy(() => import('views/utilities/Picture')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-doc',
                    element: <UtilsTypography />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-project',
                    element: <Project />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-docpush',
                    element: <DocPush />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-docchange/:aid',
                    element: <DocChange />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-docsearch/:searchfn/:searchtext',
                    element: <DocSearch />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-message',
                    element: <UtilsShadow />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-picture',
                    element: <Picture />
                }
            ]
        },
        {
            path: 'sample-page',
            element: <SamplePage />
        }
    ]
};

export default MainRoutes;
