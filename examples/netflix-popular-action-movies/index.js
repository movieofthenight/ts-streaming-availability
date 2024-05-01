import * as streamingAvailability from "streaming-availability";

const RAPID_API_KEY = "<YOUR_RAPID_API_KEY>";

const client = new streamingAvailability.Client(new streamingAvailability.Configuration({
    apiKey: RAPID_API_KEY
}));

let searchResult = await client.showsApi.searchShowsByFilters(({
    country: "us",
    catalogs: ["netflix"],
    genres: ["action"],
    showType: streamingAvailability.ShowType.Movie,
    orderBy: "popularity_1year",
}));

searchResult.shows.forEach((show) => {
    console.log(show.title);
    console.log(show.overview);
    show.streamingOptions["us"].forEach((streamingOption) => {
        if(streamingOption.service.id === "netflix") {
            console.log(streamingOption.link);
        }
    });
});
