import { useEffect, useRef, useState } from 'react';
import { gsap } from '../lib/gsap';
import TiltedCard from './TiltedCard';

interface ProjectGalleryProps {
	name: string;
	images: string[];
}

function clamp(value: number, min: number, max: number) {
	return Math.min(max, Math.max(min, value));
}

export default function ProjectGallery({ name, images }: ProjectGalleryProps) {
	const [active, setActive] = useState(0);
	const galleryRef = useRef<HTMLDivElement>(null);
	const mainRef = useRef<HTMLDivElement>(null);
	const activeRef = useRef(active);
	const lockedRef = useRef(false);

	activeRef.current = active;

	function changeTo(next: number) {
		next = clamp(next, 0, images.length - 1);
		if (next === activeRef.current || lockedRef.current || !mainRef.current) return;

		lockedRef.current = true;
		gsap.to(mainRef.current, {
			opacity: 0,
			duration: 0.25,
			ease: 'power2.in',
			onComplete: () => {
				setActive(next);
				gsap.fromTo(
					mainRef.current,
					{ opacity: 0 },
					{
						opacity: 1,
						duration: 0.35,
						ease: 'power2.out',
						onComplete: () => {
							lockedRef.current = false;
						}
					}
				);
			}
		});
	}

	useEffect(() => {
		// Listen on the whole detail section, not just the gallery, so
		// scrolling anywhere over the project page (title, description,
		// techs) changes the image too — scoping it to just the thumbnails/
		// image wasn't discoverable.
		const el = galleryRef.current?.closest<HTMLElement>('.project-detail') ?? galleryRef.current;
		if (!el || images.length < 2) return;

		// GSAP only animates the image itself: wheel picks next/prev, GSAP
		// crossfades the swap, and a lock keeps one wheel tick from
		// overlapping the next transition.
		function onWheel(e: WheelEvent) {
			if (lockedRef.current) return;
			const next = clamp(activeRef.current + (e.deltaY > 0 ? 1 : -1), 0, images.length - 1);
			if (next === activeRef.current) return; // at the first/last image: let the page scroll normally
			e.preventDefault();
			changeTo(next);
		}

		el.addEventListener('wheel', onWheel, { passive: false });
		return () => el.removeEventListener('wheel', onWheel);
	}, [images.length]);

	return (
		<div className="project-detail__gallery" ref={galleryRef}>
			<div className="project-detail__thumbs">
				{images.map((img, i) => (
					<button
						key={img}
						type="button"
						className={`project-detail__thumb${i === active ? ' is-active' : ''}`}
						onClick={() => changeTo(i)}
					>
						<img src={img} alt={`${name} preview ${i + 1}`} loading="lazy" />
					</button>
				))}
			</div>

			<div className="project-detail__main" ref={mainRef}>
				<TiltedCard
					imageSrc={images[active]}
					altText={name}
					captionText={name}
					containerHeight="480px"
					containerWidth="640px"
					imageHeight="480px"
					imageWidth="640px"
					rotateAmplitude={10}
					scaleOnHover={1.03}
					showMobileWarning={false}
					showTooltip={false}
				/>
			</div>
		</div>
	);
}
