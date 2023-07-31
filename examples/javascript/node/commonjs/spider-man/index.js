const streamingAvailability = require("streaming-availability");

const RAPID_API_KEY = "PUT_YOUR_RAPIDAPI_KEY_HERE";

const client = new streamingAvailability.DefaultApi(new streamingAvailability.Configuration({apiKey: RAPID_API_KEY}));

const country = "us"; // Update with other country codes as you want
const showType = streamingAvailability.SearchByFiltersShowTypeEnum.Movie;
const title = "Spider-Man";

client.searchByTitle({
	title: title,
	showType: showType,
	country: country,
}).then(response => {
	// Print the streaming links for each movie
	response.result.forEach(show => {
		// If no streaming options are available, then skip
		if(show.streamingInfo[country] == null) {
			return;
		}
		console.log(`---${show.title}---`);

		show.streamingInfo[country].forEach(streamingOption => {
			console.log(`${streamingOption.service}: ${streamingOption.link}`);
		});
	});
});
