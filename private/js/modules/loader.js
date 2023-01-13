(() => {
	const loader = document.querySelector(".loader");
	document.addEventListener("DOMContentLoaded", () => {
		setTimeout(() => {
			loader.classList.add("loader--hidden");
			setTimeout(() => {
				loader.style.display = "none";
			}, 300);
		}, 2000);
	});
})();
