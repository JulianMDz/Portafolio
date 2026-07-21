export interface Project {
	slug: string;
	name: string;
	year: number;
	category: 'DEV' | '3D';
	description: string;
	techs: string[];
	images: string[];
}

// TODO: reemplazar por tus proyectos reales (nombre, descripción, techs, imágenes).
export const projects: Project[] = [
	{
		slug: 'portfolio-website',
		name: 'Portfolio Website',
		year: 2025,
		category: 'DEV',
		description: 'Personal portfolio built with Astro, React islands and GSAP-driven scroll animations.',
		techs: ['Astro', 'TypeScript', 'GSAP', 'React'],
		images: [
			'https://picsum.photos/seed/dev1a/1200/800',
			'https://picsum.photos/seed/dev1b/1200/800',
			'https://picsum.photos/seed/dev1c/1200/800'
		]
	},
	{
		slug: 'task-manager-app',
		name: 'Task Manager App',
		year: 2024,
		category: 'DEV',
		description: 'Web app for organizing tasks and tracking progress across projects.',
		techs: ['React', 'Node.js', 'PostgreSQL'],
		images: ['https://picsum.photos/seed/dev2a/1200/800', 'https://picsum.photos/seed/dev2b/1200/800']
	},
	{
		slug: 'character-model',
		name: 'Character Model',
		year: 2024,
		category: '3D',
		description: 'Stylized character model, sculpted, retopologized and textured for real-time rendering.',
		techs: ['Blender', 'Substance Painter', 'ZBrush'],
		images: ['https://picsum.photos/seed/3d1a/1200/800', 'https://picsum.photos/seed/3d1b/1200/800']
	},
	{
		slug: 'api-dashboard',
		name: 'API Dashboard',
		year: 2023,
		category: 'DEV',
		description: 'Internal dashboard for monitoring API usage, latency and error rates.',
		techs: ['Next.js', 'Chart.js', 'Express'],
		images: ['https://picsum.photos/seed/dev3a/1200/800', 'https://picsum.photos/seed/dev3b/1200/800']
	},
	{
		slug: 'devil-sword',
		name: 'Devil Sword',
		year: 2023,
		category: '3D',
		description: 'Hard-surface weapon prop, hand-painted textures with a stylized fantasy look.',
		techs: ['Blender', 'Substance Painter'],
		images: [
			'https://res.cloudinary.com/iopo4z4k/image/upload/f_auto,q_auto/Sword_morn7g',
			'https://picsum.photos/seed/3d2b/1200/800'
		]
	}
];
