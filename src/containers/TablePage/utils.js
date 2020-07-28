export function pagination(c, m) {
	var current = c,
		last = m,
		delta = 2,
		left = current - delta,
		right = current + delta + 1,
		range = [],
		rangeWithDots = [],
		l;

	for (let i = 1; i <= last; i++) {
		// eslint-disable-next-line
		if (i === 1 || i === last || i >= left && i < right) {
			range.push(i);
		}
	}

	for (let i of range) {
		if (l) {
			if (i - l === 2) {
				rangeWithDots.push(l + 1);
			} else if (i - l !== 1) {
				rangeWithDots.push('...');
			}
		}
		rangeWithDots.push(i);
		l = i;
	}

	return rangeWithDots;
}

export const recordsPerPage = 50;

export const calculateLastPageIndex = (length) => {
	if (length % recordsPerPage === 0) {
		return length / recordsPerPage - 1;
	}
	return Math.floor(length / recordsPerPage);
};
