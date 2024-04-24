import { test } from 'node:test';
import * as streamingAvailability from "../src/index";

type TestFunction = (client: streamingAvailability.ShowsApi) => Promise<any>

const testMap = new Map<string, TestFunction>(
	[
		["getShow", testGetShow],
		["searchShows", testSearchShows],
	],
)

const rapidApikey =  process.env.RAPID_API_KEY
if(!rapidApikey) {
	throw new Error("Missing RAPID_API_KEY environment variable")
}

const showsClient = new streamingAvailability.ShowsApi(new streamingAvailability.Configuration({apiKey: rapidApikey}));

testMap.forEach((testFunction, name) => {
	test(name, () => {
		return testFunction(showsClient)
	})
})

function testGetShow(client: streamingAvailability.ShowsApi): Promise<streamingAvailability.Show> {
	return client.getShow({
		id: "tt0068646",
		country: "us",
	})
}

function testSearchShows(client: streamingAvailability.ShowsApi): Promise<streamingAvailability.SearchResult> {
	return client.searchShowsByFilters({
		catalogs: ["netflix"],
		country: "us",
		genres: ["action"],
	})
}
