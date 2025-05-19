function activate(element, begin, end) {
	if (!element.classList.contains("active")) {
		hover_menu(element, false);

		element.classList.add("active");

		element.innerHTML = begin;
	} else {
		element.classList.remove("active");

		element.innerHTML = end;
	}
}

// hover_menu is needed for activate
function hover_menu(element, yes) {
	if (yes) {
		if (!element.classList.contains("active")) {
			element.classList.add("hover_menu");
		}
	} else {
		element.classList.remove("hover_menu");
	}
}

async function menu(element, duration) {
	activate(element, "&#xec10;", "&#xf51b;");

	let menu = document.getElementById("menu");

	if (menu.style.display == "") {
		fade_out_bs(document.getElementById("tab"), duration / 2);
		fade_out_bs(document.getElementById("main"), duration / 2);
		fade_out_bs(document.getElementById("display"), duration / 2);

		await sleep(duration / 2);

		fade_out(document.getElementById("window"), duration);

		await sleep(duration);

		fade_in(menu, duration);
	} else if (menu.style.display == "initial") {
		fade_out(menu, duration);

		await sleep(duration);

		fade_in(document.getElementById("window"), duration);

		await sleep(duration);

		fade_in_bs(document.getElementById("tab"), duration / 2);
		fade_in_bs(document.getElementById("main"), duration / 2);
		fade_in_bs(document.getElementById("display"), duration / 2);
	}
}

async function entry(element, event) {
	let curtain = document.getElementById("curtain");

	curtain.style.display = "initial";
	curtain.style.width = curtain_size;
	curtain.style.height = curtain_size;

	curtain.style.top = `${event.clientY}px`;
	curtain.style.left = `${event.clientX}px`;

	element.style.backgroundColor = "rgba(220, 5, 44, 1)";
	element.style.color = "rgba(255, 255, 255, 1.0)";

	close_curtain(curtain, 2000);

	new_entry = element.querySelector(".subtitle").innerHTML;

	document.getElementById("window").outerHTML = await get_file(`/entries/${new_entry}.html`);

	await sleep(2000);

	element.style.removeProperty("background-color");
	element.style.removeProperty("color");

	menu(document.getElementById("menu_icon"), 0);

	format_window();

	open_curtain(curtain, 2000);

	await sleep(2000);

	curtain.style.display = "";
}

var current_subentry = null;

async function subentry(element) {
	if ((current_subentry != null) && (current_subentry.innerHTML != element.innerHTML)) {
		current_subentry.removeAttribute("style");
	}

	current_subentry = element;

	current_subentry.style.textDecoration = "underline";
	current_subentry.style.textDecorationStyle = "wavy";
	current_subentry.style.textDecorationColor = "rgba(220, 5, 44, 1)";
	current_subentry.style.textDecorationThickness = "0.2vmin";
	current_subentry.style.textUnderlineOffset = "0.52vmin";

	document.getElementById("display").innerHTML = await get_file(`/entries/${current_entry}/${current_subentry.innerHTML}.html`);
}
