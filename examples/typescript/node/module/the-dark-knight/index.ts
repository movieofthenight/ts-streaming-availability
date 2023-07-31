import * as streamingAvailability from "streaming-availability";

const RAPID_API_KEY = "PUT_YOUR_RAPIDAPI_KEY_HERE";

const client = new streamingAvailability.DefaultApi(new streamingAvailability.Configuration({apiKey: RAPID_API_KEY}));

const country = "us"; // Update with other country codes as you want
const imdbId = "tt0468569"; // Imdb id of The Dark Knight

client.getById({
	imdbId: imdbId,
}).then(response => {
	const result = response.result;
	for(let streamingOption of result.streamingInfo[country]) {
		let output = `${result.title} (${result.year}) is available on ${streamingOption.service} via ${streamingOption.streamingType} at link ${streamingOption.link}`;
		if(streamingOption.quality != null) {
			output += ` with ${streamingOption.quality.toUpperCase()} quality`;
		}
		if(streamingOption.price != null) {
			output += ` for ${streamingOption.price.formatted}`;
		}
		console.log(output);
	}
}).catch(error => {
	console.log(error);
});
