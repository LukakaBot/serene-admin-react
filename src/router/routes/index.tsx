import type {
  // RouteObject,
  IndexRouteObject,
  NonIndexRouteObject,
} from "react-router";
// import { lazyImportLayout, lazyImportRoute } from '@/utils/router';
// import RouteGuard from '@/components/RouteGuard';

// const LayoutPage = lazyImportLayout('/BaseLayout');
// const LoginPage = lazyImportRoute('/login');
// const HomePage = lazyImportRoute('/dashboard/home');
// const UserPage = lazyImportRoute('/system/user');
// const Exception404Page = lazyImportRoute('/exception/404');

export type BaseRouteObject = Omit<
  IndexRouteObject | NonIndexRouteObject,
  "element" | "children"
> & {
  element?: string;
  type?: "page" | "layout";
  children?: BaseRouteObject[];
};

const staticRoutes: BaseRouteObject[] = [
  {
    path: "login",
    type: "page",
    element: "/login",
  },
  {
    path: "dashboard",
    type: "layout",
    element: "/BaseLayout",
    children: [{ path: "home", type: "page", element: "/dashboard/home" }],
  },
  {
    path: "system",
    type: "layout",
    element: "/BaseLayout",
    children: [{ path: "user", type: "page", element: "/system/user" }],
  },
];

// const staticRoutes: RouteObject[] = [
// 	{
// 		path: 'login',
// 		element: <LoginPage />,
// 	},
// 	{
// 		path: 'dashboard',
// 		element: (
// 			<RouteGuard>
// 				<LayoutPage />
// 			</RouteGuard>
// 		),
// 		children: [
// 			{
// 				path: 'home',
// 				element: (
// 					<RouteGuard>
// 						<HomePage />
// 					</RouteGuard>
// 				),
// 			},
// 		],
// 	},
// 	{
// 		path: 'system',
// 		element: (

// 			<RouteGuard>
// 				<LayoutPage />
// 			</RouteGuard>
// 		),
// 		children: [
// 			{
// 				path: 'user',
// 				element: (
// 					<RouteGuard>
// 						<UserPage />
// 					</RouteGuard>
// 				),
// 			},
// 		],
// 	},
// 	{
// 		path: '*',
// 		element: <Exception404Page />,
// 	},
// ];

export { staticRoutes };
