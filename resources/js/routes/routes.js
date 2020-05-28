import Layout from "@/components/layout/Layout";

const NotFound = _ => import(/* webpackChunkName: "js/split/NotFound", webpackPreload: true */ '@/components/NotFound');
const Home = _ => import(/* webpackChunkName: "js/split/Home", webpackPreload: true */ '@/pages/Home/Home');
const Recent = _ => import(/* webpackChunkName: "js/split/Recent", webpackPreload: true */ '@/pages/Home/Reciente');

export const routes = [

	{
		path: '/',
		component: Layout,
		children: [
			{
				path: '',
				component: Home,
				name: 'Home',

			},
			{
				path: 'recientes',
				component: Recent,
				name: 'Reciente',
			}
		]
	},
	{
		path: '*',
		component: Layout,
		children: [
			{
				path: '',
				component: NotFound,
			},

		]
	}
];
