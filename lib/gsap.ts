import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(CustomEase, SplitText, ScrollTrigger);

let registered = false;

/** Idempotent: safe to call from every component that needs the shared eases. */
export function registerEases() {
	if (registered) return;
	CustomEase.create('hop', '0.8, 0, 0.2, 1.2');
	CustomEase.create('hop2', '0.9, 0, 0.1, 1');
	registered = true;
}

export function prefersReducedMotion() {
	return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/** Splits a heading into per-char masked spans, ready for the shared nickname reveal. */
export function splitChars(el: Element) {
	return SplitText.create(el, { type: 'chars', mask: 'chars' });
}

/**
 * Scroll-linked exit: chars rise and vanish upward as `trigger` scrolls past
 * the top of the viewport. Use for a title whose entrance is handled elsewhere
 * (e.g. event-driven, like the Hero) so only the exit needs to react to scroll.
 */
export function scrollCharsExit(chars: Element[], trigger: Element | string) {
	gsap.to(chars, {
		yPercent: -120,
		ease: 'none',
		stagger: 0.03,
		scrollTrigger: {
			trigger,
			start: 'top top',
			end: 'bottom top',
			scrub: 0.6
		}
	});
}

/**
 * Scroll-linked enter + exit, scrubbed against `trigger`'s position in the
 * viewport: chars rise into place, hold, then rise further out — the same
 * "hop" visual language used by the Preloader/Hero nickname, kept consistent
 * for every later appearance of the title as the user scrolls the page.
 */
export function scrollCharsInOut(chars: Element[], trigger: Element | string) {
	gsap.set(chars, { yPercent: 120 });
	gsap.timeline({
		defaults: { ease: 'none' },
		scrollTrigger: {
			trigger,
			start: 'top 85%',
			end: 'bottom top',
			scrub: 0.6
		}
	})
		.to(chars, { yPercent: 0, stagger: 0.03 })
		.to(chars, { yPercent: -120, stagger: 0.03 }, '+=0.5');
}

export { gsap, SplitText, ScrollTrigger };
