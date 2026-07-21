export interface Project {
	slug: string;
	name: string;
	year: number;
	category: 'DEV' | '3D';
	description: string;
	techs: string[];
	images: string[];
	/** Live site / repo / Sketchfab model, etc. — when set, the gallery's main image links out to it. */
	url?: string;
}

// TODO: reemplazar por tus proyectos reales (nombre, descripción, techs, imágenes, url).
export const projects: Project[] = [
	{
		slug: 'Minotaur D&D',
		name: 'Minotaur D&D',
		year: 2025,
		category: '3D',
		description: 'This model is inspired by the Dungeons & Dragons universe and was created as part of the Imaginatio XVII project. It was modeled in Maya, rigged; animated in mixamo, sculpted in Blender, and textured and baked using Substance Painter.',
		techs: ['Blender', 'Substance Painter', 'Maya', 'Mixamo'],
		images: [
			'https://res.cloudinary.com/iopo4z4k/image/upload/v1784600554/minotaur_gden01.png',
			'https://res.cloudinary.com/iopo4z4k/image/upload/v1784600843/Screenshot_2026-07-20_212413_fsuq1m.png',


			
		],
		url: 'https://sketchfab.com/3d-models/minotaur-dungeons-and-dragons-eef4b2ec5ca94581aca2428d183c67ec'
	},
	{
		slug: 'Guardian D&D',
		name: 'Guardian D&D',
		year: 2025,
		category: '3D',
		description: 'This model is inspired by the Dungeons & Dragons universe Creation Pipeline Base Modeling: Autodesk Maya Sculpting: Blender Texturing: Adobe Substance I focused on giving him a style that represents the battles he has been through.',
		techs: ['Maya', 'Blender', 'Substance Painter'],
		images: ['https://res.cloudinary.com/iopo4z4k/image/upload/v1784601129/Screenshot_2026-07-20_213104_s0cru5.png', 'https://res.cloudinary.com/iopo4z4k/image/upload/v1784601129/Screenshot_2026-07-20_213130_y4ziiy.png'],
		url: 'https://sketchfab.com/3d-models/guardian-dungeons-dragons-3518ba484ff24fd3896e6c5831ccd1c0'
	},
	{
		slug: 'Travesia Colombia',
		name: 'Travesia Colombia',
		year: 2026,
		category: 'DEV',
		description: '2.5D cultural platformer exploring Colombian themes.  my responsibility was to create the architecture of the game and codification of the main logic where it was Implemented an Event Bus/Observer architecture using Scriptable Objects to decouple game systems — keeping gameplay, UI and audio independently testable and extensible. ',
		techs: ['Unity', 'C#', 'Game Development'],
		images: 
		[
			'https://res.cloudinary.com/iopo4z4k/image/upload/v1784602952/Screenshot_2026-07-20_220114_zjflq2.png', 
			'https://res.cloudinary.com/iopo4z4k/image/upload/v1784602952/Screenshot_2026-07-20_220122_x5wwzv.png'
		],
		url: 'https://github.com/JulianMDz/TravesiaColombia'
	},
	{
		slug: 'RetroMecha',
		name: 'RetroMecha',
		year: 2026,
		category: 'DEV',
		description: 'Procedural modular robot character generator driven by a formal L-System grammar. Designed the parametric generation logic and built a custom UI panel in Maya that lets advanced users and inexperienced users control character variation without touching code.',
		techs: ['python', 'Maya', 'Arnold', 'Generative Art'],
		images: ['https://res.cloudinary.com/iopo4z4k/image/upload/v1784610685/Render_qgavij.jpg', 
			'https://res.cloudinary.com/iopo4z4k/image/upload/v1784610676/Mecha_03_sm1o7r.jpg',
			'https://res.cloudinary.com/iopo4z4k/image/upload/v1784610621/Screenshot_2026-07-20_235204_ejjacu.png'

		],
		url: 'https://github.com/JulianMDz/RetroMecha'
	},
	{
		slug: 'devil-sword',
		name: 'Devil Sword',
		year: 2025,
		category: '3D',
		description: 'Hard-surface weapon prop, hand-painted textures with a stylized fantasy look.',
		techs: ['Maya', 'Blender', 'Substance Painter'],
		images: [
			'https://res.cloudinary.com/iopo4z4k/image/upload/f_auto,q_auto/Sword_morn7g',
			'https://res.cloudinary.com/iopo4z4k/image/upload/v1784602016/Screenshot_2026-07-20_214541_cxmps4.png',
			'https://res.cloudinary.com/iopo4z4k/image/upload/v1784602016/Screenshot_2026-07-20_214604_xzmgol.png'

		],
		url: 'https://sketchfab.com/3d-models/devil-sword-dm5-dante-d7c7c08047df430086c5c4612935414c'
	}
];
