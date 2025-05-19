async function fade_in(element, duration) {
	// it corrupts the border
	// element.style.willChange = "opacity";

	element.style.display = "initial";

	element.style.animationName = "fade_in";
	element.style.animationDuration = `${duration / 1000}s`;
	element.style.animationTimingFunction = "linear";
	element.style.animationFillMode = "forwards";

	await sleep(duration);

	element.style.opacity = "1";

	element.style.removeProperty("animation");
}

async function fade_out(element, duration) {
	// it corrupts the border
	// element.style.willChange = "opacity";

	element.style.animationName = "fade_out";
	element.style.animationDuration = `${duration / 1000}s`;
	element.style.animationTimingFunction = "linear";
	element.style.animationFillMode = "forwards";

	await sleep(duration);

	element.style.display = "";
	element.style.opacity = "0";

	element.style.removeProperty("animation");
}

// goofy (b)order (s)hadow BS

async function fade_in_bs(element, duration) {
	if (element == null) {
		return;
	}

	element.style.animationName = "fade_in_bs";
	element.style.animationDuration = `${duration / 1000}s`;
	element.style.animationTimingFunction = "linear";
	element.style.animationFillMode = "forwards";

	await sleep(duration);

	element.style.boxShadow = "0px 5px 26px 0px rgba(0, 0, 0, 0.13), 0px -5px 26px 0px rgba(0, 0, 0, 0.13), 5px 0px 26px 0px rgba(0, 0, 0, 0.13), -5px 0px 26px 0px rgba(0, 0, 0, 0.13)";

	element.style.removeProperty("animation");
}

async function fade_out_bs(element, duration) {
	if (element == null) {
		return;
	}

	element.style.animationName = "fade_out_bs";
	element.style.animationDuration = `${duration / 1000}s`;
	element.style.animationTimingFunction = "linear";
	element.style.animationFillMode = "forwards";

	await sleep(duration);

	element.style.boxShadow = "0px 5px 26px 0px rgba(0, 0, 0, 0), 0px -5px 26px 0px rgba(0, 0, 0, 0), 5px 0px 26px 0px rgba(0, 0, 0, 0), -5px 0px 26px 0px rgba(0, 0, 0, 0)";

	element.style.removeProperty("animation");
}

var curtain_size = "max(200vw, 200vh)";

async function close_curtain(curtain, duration) {
	curtain.style.animationName = "close_curtain";
	curtain.style.animationDuration = `${duration / 1000}s`;
	// easeOutCirc
	curtain.style.animationTimingFunction = "cubic-bezier(0, 0.55, 0.45, 1)";
	curtain.style.animationFillMode = "forwards";

	await sleep(duration);

	curtain.style.width = "0rem";
	curtain.style.height = "0rem";

	curtain.style.removeProperty("animation");
}

async function open_curtain(curtain, duration) {
	curtain.style.animationName = "open_curtain";
	curtain.style.animationDuration = `${duration / 1000}s`;
	// easeInCirc
	curtain.style.animationTimingFunction = "cubic-bezier(0.55, 0, 1, 0.45)";
	curtain.style.animationFillMode = "forwards";

	await sleep(duration);

	curtain.style.width = curtain_size;
	curtain.style.height = curtain_size;

	curtain.style.removeProperty("animation");
}
