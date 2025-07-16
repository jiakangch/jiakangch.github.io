function format_window() {
	document.getElementById("window").style.display = "initial";

	let panels = document.getElementById("panels");

	if (panels == null) {
		return;
	}

	let display = document.getElementById("display");

	if ((window.innerWidth > window.innerHeight) && (panels.getAttribute("data-layout") == "vertical")) {
		panels.setAttribute("data-layout", "horizontal");

		if (display != null) {
			panels.rows[0].cells[0].setAttribute("colspan", "2");

			panels.rows[1].insertCell().innerHTML = display.outerHTML;

			panels.rows[2].outerHTML = "";
		}
	} else if ((window.innerWidth < window.innerHeight) && (panels.getAttribute("data-layout") == "horizontal")) {
		panels.setAttribute("data-layout", "vertical");

		if (display != null) {
			panels.rows[0].cells[0].removeAttribute("colspan");

			panels.insertRow().insertCell().innerHTML = display.outerHTML;

			panels.rows[1].cells[1].outerHTML = "";
		}
	}

	let size = Math.sqrt(screen.width * screen.height);

	let main = document.getElementById("main");

	if (main != null) {
		main.style.fontSize = `${0.018 * size}px`;
		main.style.lineHeight = `${0.026 * size}px`;
		main.style.padding = main.style.fontSize;

		if ((new_entry == "connect") || ((new_entry == "") && (current_entry == "connect"))) {
			main.style.fontSize = `${0.018 * size * 2}px`;
			main.style.lineHeight = `${0.026 * size * 2}px`;
		}
	}

	display = document.getElementById("display");

	if (display != null) {
		display.style.fontSize = `${0.018 * size}px`;
		display.style.lineHeight = `${0.026 * size}px`;
		display.style.padding = display.style.fontSize;
	}
}

const canvas = document.getElementById("myGrid");

canvas.width = document.getElementById("wallpaper").offsetWidth;
canvas.height = document.getElementById("wallpaper").offsetHeight;

const context = canvas.getContext("2d");

context.imageSmoothingEnabled = false;

context.clearRect(0, 0, canvas.width, canvas.height);

context.strokeStyle = "rgba(0, 0, 0, 0.65)";

for (let x = 0; x <= canvas.width; x = x + 13) {
	context.lineWidth = (x % (13 * 5) == 0) ? 0.39 : 0.13;

	context.beginPath();
	context.moveTo(x + (context.lineWidth / 2), 0 + (context.lineWidth / 2));
	context.lineTo(x + (context.lineWidth / 2), canvas.height + (context.lineWidth / 2));
	context.stroke();
	context.closePath();
}

for (let y = 0; y <= canvas.height; y = y + 13) {
	context.lineWidth = (y % (13 * 5) == 0) ? 0.39 : 0.13;

	context.beginPath();
	context.moveTo(0 + (context.lineWidth / 2), y + (context.lineWidth / 2));
	context.lineTo(canvas.width + (context.lineWidth / 2), y + (context.lineWidth / 2));
	context.stroke();
	context.closePath();
}

const wallpaper = document.getElementById("wallpaper");

document.addEventListener("mousemove", (e) => {
	const mouseX = e.clientX / window.innerWidth - 0.5;
	const mouseY = e.clientY / window.innerHeight - 0.5;

	wallpaper.style.transform = `rotateX(${-mouseY * 15}deg) rotateY(${mouseX * 15}deg)`;
});

window.addEventListener("resize", format_window);

document.getElementById("play").style.willChange = "opacity";

async function run() {
	await sleep(1000);

	fade_in(document.getElementById("jiakangchen"), 1000);

	// document.getElementById("<3").play();

	await sleep(1000);

	document.getElementById("play").remove();

	await sleep(2000);

	fade_out(document.getElementById("jiakangchen"), 1000);

	await sleep(1000);

	document.getElementById("jiakangchen").remove();

	new_entry = "home";

	document.getElementById("window").outerHTML = await get_file(`/entries/${new_entry}.html`);

	document.getElementById("background").classList.add("load");

	await sleep(1000 / 2);
	format_window();
	await sleep(1000 / 2);

	fade_in(document.getElementById("window"), 1000);

	fade_in(document.getElementById("menu_icon"), 1000);

	await sleep(1000);

	fade_in_bs(document.getElementById("tab"), 500 / 2);
	fade_in_bs(document.getElementById("main"), 500 / 2);
	fade_in_bs(document.getElementById("display"), 500 / 2);

	await sleep(500 / 2);

	typewriter();
}
