var boops = document.querySelectorAll(".boop");

function charge(i) {
	boops[i].style.animation = "none";

	void boops[i].offsetWidth;

	const duration = rng(5, 13);

	const start = rng(-10, 110);

	const size = rng(0.2, 0.8);

	// boops[i].style.background = `rgba(255, 255, 255, ${rng(0.1, 0.4)})`

	boops[i].style.width = `${size}vmin`;
	boops[i].style.height = `${size}vmin`;

	// animationName = "sway, flicker";
	// animationDuration = `${duration}s, 0.2s`;
	// animationTimingFunction = "linear, linear";
	// animationIterationCount = "1, infinite";
	// animationFillMode = "forwards, none";

	boops[i].style.animation = `${duration}s linear forwards sway, 0.2s linear infinite flicker`;

	if (Math.random() < 0.5) {
		boops[i].style.setProperty("--start_x", `${start}vw`);
		boops[i].style.setProperty("--start_y", "110vh");
	} else {
		boops[i].style.setProperty("--start_x", "-10vw");
		boops[i].style.setProperty("--start_y", `${start}vh`);
	}

	if (Math.random() < 0.5) {
		boops[i].style.setProperty("--end_x", `${rng(start, 110)}vw`);
		boops[i].style.setProperty("--end_y", "-10vh");
	} else {
		boops[i].style.setProperty("--end_x", "110vw");
		boops[i].style.setProperty("--end_y", `${rng(-10, start)}vh`);
	}
}

for (let i = 0; i < boops.length; i = i + 1) {
	charge(i);

	boops[i].addEventListener("animationend", function() {
		charge(i);
	});
}
