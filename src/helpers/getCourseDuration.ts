const formatValueWithZero = (value) => {
	return value < 10 ? `0${value}` : value;
};

export function getCourseDuration(totalMinutes) {
	const hours = formatValueWithZero(Math.floor(totalMinutes / 60));
	const minutes = formatValueWithZero(totalMinutes % 60);

	return `${hours}:${minutes} hours`;
}
