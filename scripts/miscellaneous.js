function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

function rng(minimum, maximum) {
	// (minimum, maximum)

	return minimum + (Math.random() * (maximum - minimum));
}

async function get_file(query) {
	try {
		let response = await fetch(query);

		return response.text();
	} catch (error) {
		// console.error("that's crazy.", error);

		return undefined;
	}
}
