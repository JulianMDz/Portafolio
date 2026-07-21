import { useEffect, useRef, useState } from 'react';
import type { MouseEvent } from 'react';
import { gsap } from '../lib/gsap';
import TiltedCard from './TiltedCard';

interface ProjectGalleryProps {
	name: string;
	images: string[];
}

function clamp(value: number, min: number, max: number) {
	return Math.min(max, Math.max(min, value));
}

// Matches the [slug].astro breakpoint where .project-detail__layout collapses
// to a single column — below it there's no room for TiltedCard's fixed pixel
// dimensions (640x480), which would otherwise overflow the viewport.
const COMPACT_QUERY = '(max-width: 834px)';

export default function ProjectGallery({ name, images }: ProjectGalleryProps) {
	const [active, setActive] = useState(0);
	const [isCompact, setIsCompact] = useState(
		() => typeof window !== 'undefined' && window.matchMedia(COMPACT_QUERY).matches
	);
	const galleryRef = useRef<HTMLDivElement>(null);
	const mainRef = useRef<HTMLDivElement>(null);
	const activeRef = useRef(active);
	const lockedRef = useRef(false);

	activeRef.current = active;

	useEffect(() => {
		const mql = window.matchMedia(COMPACT_QUERY);
		const update = () => setIsCompact(mql.matches);
		update();
		mql.addEventListener('change', update);
		return () => mql.removeEventListener('change', update);
	}, []);

	function changeTo(next: number) {
		next = clamp(next, 0, images.length - 1);
		if (next === activeRef.current || lockedRef.current || !mainRef.current) return;

		// The exit and entrance slide in opposite directions depending on
		// whether we're moving forward or backward through the gallery, so
		// the swap reads as a directional step instead of a flat crossfade.
		const direction = next > activeRef.current ? 1 : -1;

		lockedRef.current = true;
		gsap.to(mainRef.current, {
			opacity: 0,
			y: -direction * 16,
			scale: 0.97,
			duration: 0.25,
			ease: 'power2.in',
			onComplete: () => {
				setActive(next);
				gsap.fromTo(
					mainRef.current,
					{ opacity: 0, y: direction * 16, scale: 0.97 },
					{
						opacity: 1,
						y: 0,
						scale: 1,
						duration: 0.4,
						ease: 'power2.out',
						onComplete: () => {
							lockedRef.current = false;
						}
					}
				);
			}
		});
	}

	function handleThumbClick(e: MouseEvent<HTMLButtonElement>, i: number) {
		gsap.fromTo(e.currentTarget, { scale: 0.85 }, { scale: 1, duration: 0.35, ease: 'back.out(3)' });
		changeTo(i);
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
						onClick={(e) => handleThumbClick(e, i)}
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
					containerHeight={isCompact ? '66vw' : '480px'}
					containerWidth={isCompact ? '88vw' : '640px'}
					imageHeight={isCompact ? '66vw' : '480px'}
					imageWidth={isCompact ? '88vw' : '640px'}
					rotateAmplitude={10}
					scaleOnHover={1.03}
					showMobileWarning={false}
					showTooltip={false}
				/>
			</div>
		</div>
	);
}
