import streamingAvailability from "streaming-availability";

const RAPID_API_KEY = "PUT_YOUR_RAPIDAPI_KEY_HERE";

const client = new streamingAvailability.DefaultApi(new streamingAvailability.Configuration({apiKey: RAPID_API_KEY}));

const country = "us"; // Update with other country codes as you want
const services = ["netflix", "disney", "hbo", "paramount", "starz", "showtime", "britbox"];
const showType = streamingAvailability.SearchByFiltersShowTypeEnum.Movie;
// 28 is Action
// Use Genres endpoint to get the genre ids
const genre = "28";
const keyword = "zombie"
const maxPages = 2;

let cursor = "";
for(let i= 0; i < maxPages; i++){
	console.log("Page:", i);
	const response = await client.searchByFilters({
		country: country,
		services: services.join(","),
		showType: showType,
		genres: genre,
		cursor: cursor,
		keyword: keyword,
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
