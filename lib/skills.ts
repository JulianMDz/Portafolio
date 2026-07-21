export interface SkillCategory {
	name: string;
	items: string[];
}

export const skills: SkillCategory[] = [
	{ name: 'Frontend', items: ['React', 'Vite', 'Astro', 'Tailwind', 'CSS', 'HTML', 'JavaScript', 'Dart'] },
	{ name: 'Backend', items: ['FastAPI', 'Python', 'C#', 'ASP.NET'] },
	{ name: 'Tools', items: ['Figma', 'Git', 'GitHub', 'Illustrator', 'After Effects', 'Unity'] },
	{ name: '3D', items: ['Blender', 'Maya', 'Substance Painter', 'Spline', 'Three.js'] },
	{ name: 'Languages', items: ['Spanish (native)', 'English (C1)'] },
	{ name: 'Soft Skills', items: ['Teamwork', 'Leading teams', 'Problem solving'] }
];
