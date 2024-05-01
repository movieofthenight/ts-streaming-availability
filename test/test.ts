import { test } from 'node:test';
import * as streamingAvailability from "../src/index";

type TestFunction = (client: streamingAvailability.Client) => Promise<any>

const testMap = new Map<string, TestFunction>(
	[
		["getShow", testGetShow],
		["searchShows", testSearchShows],
	],
)

const rapidApikey =  process.env.RAPID_API_KEY;
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

test("searchShowsByFiltersWithAutoPaginationWith2Pages", async () => {
	const shows = client.showsApi.searchShowsByFiltersWithAutoPagination({
		catalogs: ["netflix"],
		country: "us",
		genres: ["action"],
		orderBy: "popularity_1year",
	}, 2)
	for await (const show of shows) {
		console.log(show.title);
	}
});

test("searchShowsByFiltersWithAutoPaginationWithEndlessPages", async () => {
	const shows = client.showsApi.searchShowsByFiltersWithAutoPagination({
		catalogs: ["netflix"],
		country: "us",
		genres: ["action"],
		orderBy: "popularity_alltime",
		showType: "movie",
		yearMax: 2021,
		yearMin: 2020

	}, 0)
	for await (const show of shows) {
		console.log(show.title);
	}
});

test("getChangesWithAutoPagination", async () => {
	const changes = client.changesApi.getChangesWithAutoPagination({
		country: "us",
		catalogs: ["netflix"],
		itemType: "show",
		changeType: "new",
	}, 2);
	for await (const change of changes) {
		console.log(change.show.title);
	}
});

