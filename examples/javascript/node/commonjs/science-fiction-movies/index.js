const streamingAvailability = require("streaming-availability");

const RAPID_API_KEY = "PUT_YOUR_RAPIDAPI_KEY_HERE";

const client = new streamingAvailability.DefaultApi(new streamingAvailability.Configuration({apiKey: RAPID_API_KEY}));

const country = "us"; // Update with other country codes as you want
const services = ["netflix", "disney"];
const showType = streamingAvailability.SearchByFiltersShowTypeEnum.Movie;
// 878 is Science-Fiction
// Use Genres endpoint to get the genre ids
const genre = "878";
const maxPages = 2;

run();

async function run() {
	let cursor = "";
	for(let i= 0; i < maxPages; i++){
		console.log("Page:", i);
		const response = await client.searchByFilters({
			country: country,
			services: services.join(","),
			showType: showType,
			genres: genre,
			cursor: cursor,
		});

		response.result.forEach(show => {
			show.streamingInfo[country].forEach(streamingOption => {
				if(services.includes(streamingOption.service)) {
					console.log(`${show.title} is available on ${streamingOption.service}: ${streamingOption.link}`);
				}
			});
		});

		// Break out of the loop if there are no more results to load
		if(!response.hasMore) {
			break;
		}

		// Update the cursor for the next request
		cursor = response.nextCursor;
	}
}