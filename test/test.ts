import { test } from 'node:test';
import * as streamingAvailability from "../src/index";

type TestFunction = (client: streamingAvailability.DefaultApi) => Promise<any>

let testMap = new Map<string, TestFunction>(
    [
        ["countries", testCountries],
        ["genres", testGenres],
        ["getById", testGetById],
        ["searchByFilters", testSearchByFilters],
        ["searchByTitle", testSearchByTitle],
        ["changes", testChanges],
        ["leaving", testLeaving],
    ],
)

let rapidApikey =  process.env.RAPID_API_KEY
if(!rapidApikey) {
    throw new Error("Missing RAPID_API_KEY environment variable")
}
const client = new streamingAvailability.DefaultApi(new streamingAvailability.Configuration({apiKey: rapidApikey}));

testMap.forEach((testFunction, name) => {
    test(name, () => {
        return testFunction(client)
    })
})

function testCountries(client: streamingAvailability.DefaultApi): Promise<streamingAvailability.CountriesResponseSchema> {
    return client.countries()
}

function testGenres(client: streamingAvailability.DefaultApi): Promise<streamingAvailability.GenresResponseSchema> {
    return client.genres()
}

function testGetById(client: streamingAvailability.DefaultApi): Promise<streamingAvailability.GetResponseSchema> {
    return client.getById({
        imdbId: "tt0120338"
    })
}

function testSearchByFilters(client: streamingAvailability.DefaultApi): Promise<streamingAvailability.SearchFiltersResponseSchema> {
    return client.searchByFilters({
        country: "us",
        services: "netflix",
    })
}

function testSearchByTitle(client: streamingAvailability.DefaultApi): Promise<streamingAvailability.SearchTitleResponseSchema> {
    return client.searchByTitle({
        country: "us",
        title: "batman",
    })
}

function testChanges(client: streamingAvailability.DefaultApi): Promise<streamingAvailability.ChangesResponseSchema> {
    return client.changes({
        country: "us",
        services: "netflix",
        changeType: streamingAvailability.ChangesChangeTypeEnum.Updated,
        targetType: streamingAvailability.ChangesTargetTypeEnum.Show,
    })
}

function testLeaving(client: streamingAvailability.DefaultApi): Promise<streamingAvailability.UpcomingChangesResponseSchema> {
    return client.leaving({
        country: "us",
        services: "netflix",
        targetType: streamingAvailability.ChangesTargetTypeEnum.Show,
    })
}
