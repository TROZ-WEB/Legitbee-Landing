import { useEffect, useCallback, useState } from 'react';
import useEvent from '../functions/useEvent';

export default function useRect(ref) {
	const [rect, setRect] = useState(getRect(ref ? ref.current : null));

	const handleResize = useCallback(() => {
		if (!ref.current) {
			return;
		}
		setRect(getRect(ref.current));
	}, [ref]);

	useEffect(() => {
		const element = ref.current;
		if (!element) {
			return;
		}

		handleResize();
	}, [ref, handleResize]);

	useEvent('resize', handleResize);

	return rect;
}

function getRect(element) {
	if (!element) {
		return {
			bottom: 0,
			height: 0,
			left: 0,
			right: 0,
			top: 0,
			width: 0,
		};
	}

	var rect = element.getBoundingClientRect();
	var scrollLeft = window.scrollX;
	var scrollTop = window.scrollY;

	var top = rect.top + scrollTop;
	var bottom = rect.bottom + scrollTop;
	var left = rect.left + scrollLeft;
	var right = rect.right + scrollLeft;
	var width = rect.width;
	var height = rect.height;

	return { top, bottom, left, right, width, height };
}
