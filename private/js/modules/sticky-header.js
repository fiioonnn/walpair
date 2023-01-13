(() => {
	const banner = document.querySelector(".banner");
	const header = document.querySelector(".header");

	const observer = new IntersectionObserver(
		(entries) => {
			if (entries[0].intersectionRatio < 0.75) {
				header.classList.add("header--sticky");
			} else {
				header.classList.remove("header--sticky");
			}
		},
		{
			threshold: [0.75],
		}
	);
	observer.observe(banner);
})();
