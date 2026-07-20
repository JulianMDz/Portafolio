import { useEffect, useState } from 'react';
import TextType from './TextType';

interface HeroSubtitleProps {
	text: string | string[];
}

export default function HeroSubtitle({ text }: HeroSubtitleProps) {
	const [started, setStarted] = useState(false);

	useEffect(() => {
		if ((window as any).__heroTitleComplete) {
			setStarted(true);
			return;
		}

		const handleHeroTitleComplete = () => setStarted(true);
		window.addEventListener('hero:titleComplete', handleHeroTitleComplete, { once: true });
		return () => window.removeEventListener('hero:titleComplete', handleHeroTitleComplete);
	}, []);

	if (!started) return null;

	return (
		<TextType
			text={text}
			typingSpeed={45}
			pauseDuration={999999}
			loop={false}
			showCursor
			cursorCharacter="_"
		/>
	);
}
