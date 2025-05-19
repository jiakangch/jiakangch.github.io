var new_entry = "";
var current_entry = "";

async function typewriter() {
	current_entry = new_entry;

	while (true) {
		if (new_entry != "") {
			current_entry = new_entry;

			new_entry = "";
		}

		let entry_text = document.getElementById("tab").innerHTML;

		// type word
		for (let i = 0; i < current_entry.length; i = i + 1) { 
			entry_text = entry_text.substring(0, entry_text.length - 1) + current_entry[i] + "|";

			document.getElementById("tab").innerHTML = entry_text;

			await sleep(64);
		}

		// flashing cursor effect
		for (let i = 0; i < 3; i = i + 1) {
			entry_text = entry_text.substring(0, entry_text.length - 1) + " ";

			document.getElementById("tab").innerHTML = entry_text;

			await sleep(500);

			entry_text = entry_text.substring(0, entry_text.length - 1) + "|";

			document.getElementById("tab").innerHTML = entry_text;

			await sleep(500);
		}

		// remove word (backspace)
		for (let i = 0; i < current_entry.length; i = i + 1) {
			entry_text = entry_text.substring(0, entry_text.length - 2) + "|";

			document.getElementById("tab").innerHTML = entry_text;

			await sleep(32);
		}
	}
}
