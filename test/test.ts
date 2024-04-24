import { test } from 'node:test';
import * as streamingAvailability from "../src/index";

type TestFunction = (client: streamingAvailability.Client) => Promise<any>

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

const client = new streamingAvailability.Client(new streamingAvailability.Configuration({apiKey: rapidApikey}));

testMap.forEach((testFunction, name) => {
	test(name, () => {
		return testFunction(client)
	})
})

function testGetShow(client: streamingAvailability.Client): Promise<streamingAvailability.Show> {
	return client.showsApi.getShow({
		id: "tt0068646",
		country: "us",
	})
}

function testSearchShows(client: streamingAvailability.Client): Promise<streamingAvailability.SearchResult> {
	return client.showsApi.searchShowsByFilters({
		catalogs: ["netflix"],
		country: "us",
		genres: ["action"],
	})
}
