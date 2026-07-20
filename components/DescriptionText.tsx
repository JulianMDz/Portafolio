import { useRef } from 'react';
import type { MutableRefObject } from 'react';
import VariableProximity from './VariableProximity';

interface DescriptionTextProps {
	text: string;
}

export default function DescriptionText({ text }: DescriptionTextProps) {
	const containerRef = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLElement | null>;

	return (
		<div ref={containerRef as MutableRefObject<HTMLDivElement | null>} className="description__text-proximity">
			<VariableProximity
				label={text}
				fromFontVariationSettings="'wght' 380"
				toFontVariationSettings="'wght' 750"
				containerRef={containerRef}
				radius={120}
				falloff="gaussian"
				style={{ fontFamily: '"Hanken Grotesk Variable", "Hanken Grotesk", sans-serif' }}
			/>
		</div>
	);
}
