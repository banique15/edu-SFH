export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20')
];

export const server_loads = [];

export const dictionary = {
		"/(app)": [~4,[2]],
		"/(app)/about": [5,[2]],
		"/(app)/account": [6,[2]],
		"/(app)/account/edit": [7,[2]],
		"/admin": [15,[3]],
		"/admin/goals": [16,[3]],
		"/admin/lessons": [17,[3]],
		"/admin/users": [18,[3]],
		"/(app)/curriculum": [8,[2]],
		"/dev": [19],
		"/(app)/goals": [~9,[2]],
		"/(app)/goals/[slug]": [~10,[2]],
		"/(app)/lessons": [11,[2]],
		"/(app)/lessons/[slug]": [~12,[2]],
		"/login": [20],
		"/(app)/signup": [13,[2]],
		"/(app)/subjects/[slug]": [14,[2]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
	
	reroute: (() => {}),
	transport: {}
};

export const decoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.decode]));
export const encoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.encode]));

export const hash = false;

export const decode = (type, value) => decoders[type](value);

export { default as root } from '../root.js';