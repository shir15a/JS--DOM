const clock=document.querySelector('.clock')
// Inject the time in the UI
const renderTime = () => {
  console.log('render');
	const time = new Date();
	clock.textContent = time.toLocaleString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
		second: "numeric",
		hour12: true,
	});
};
renderTime();
setInterval(renderTime, 1000);