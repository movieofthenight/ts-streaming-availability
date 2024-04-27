import * as streamingAvailability from "streaming-availability";

const RAPID_API_KEY = "<YOUR_RAPID_API_KEY>";

const client = new streamingAvailability.Client(new streamingAvailability.Configuration({
	apiKey: RAPID_API_KEY
}));

let show = await client.showsApi.getShow(
	{id: "tt0068646", country: "us"}
);

console.log(show.title);
console.log(show.overview);
show.streamingOptions["us"].forEach((streamingOption) => {
	console.log(streamingOption.link);
});
