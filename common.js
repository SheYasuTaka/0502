
const gId = document.getElementById.bind(document);


const pad = (n) => ((n.length < 2) ? '0' + n : n);

const setTimer = () => {
	const timer = gId("main-timer");

	let startDateTime = new Date();

	if (startDateTime.getMonth() === 4 && (startDateTime.getDate() >> 1) === 1) {
		timer.innerText = "TIME'S UP";
		return;
	}

	let yearCode = startDateTime.getFullYear();

	let endDateTime = new Date(yearCode, 4, 2);
	if (endDateTime < startDateTime) endDateTime.setFullYear(yearCode + 1);

	let left = ((endDateTime - startDateTime) / 1000) << 0;

	let leftSecond = left % 60;
	left /= 60, left = left << 0;
	let leftMinute = left % 60;
	left /= 60, left = left << 0;
	let leftHour = left % 24;
	left /= 24, left = left << 0;
	let leftDay = left;

	timer.innerText = `${leftDay} ${pad(leftHour.toString(10))}:${pad(leftMinute.toString(10))}:${pad(leftSecond.toString(10))}`;
	setTimeout(setTimer, 1000);
};
