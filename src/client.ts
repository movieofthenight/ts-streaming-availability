import {GenresApi, ShowsApi, CountriesApi, ChangesApi, SearchShowsByFiltersRequest, GetChangesRequest} from "./apis";
import {Configuration} from "./runtime";
import * as runtime from "./runtime";
import type {Show, Change} from "./models";

export class Client {
	public showsApi: ShowsApiExtended;
	public genresApi: GenresApi;
	public countriesApi: CountriesApi;
	public changesApi: ChangesApiExtended;

	constructor(configuration: Configuration) {
		const apiKey = configuration.apiKey("X-API-Key") as string;
		let basePath: string;
		let apiKeyHeaderName: string;
		if (apiKey.startsWith("motn-key-")) {
			basePath = "https://api.movieofthenight.com/v4";
			apiKeyHeaderName = "X-API-Key";
		} else {
			basePath = "https://streaming-availability.p.rapidapi.com"
			apiKeyHeaderName = "X-RapidAPI-Key";
		}

		const actualConfiguration = new Configuration({
			apiKey: (name: string) => {
				if (apiKeyHeaderName === name) {
					return configuration.apiKey(name);
				} else {
					return undefined;
				}
			},
			basePath: basePath,
			fetchApi: configuration.fetchApi,
			queryParamsStringify: configuration.queryParamsStringify,
			headers: configuration.headers,
		});

		this.showsApi = new ShowsApiExtended(actualConfiguration);
		this.genresApi = new GenresApi(actualConfiguration);
		this.countriesApi = new CountriesApi(actualConfiguration);
		this.changesApi = new ChangesApiExtended(actualConfiguration);
	}
}

class Page<Type> {
	items: Type[];
	hasMorePages: boolean;
	nextPageCursor: string;
}

async function* iterator<Type>(maxPages: number, fetcher: (cursor?: string) => Promise<Page<Type>>): AsyncGenerator<Type,void,void> {
	let currentPage = await fetcher();
	for(let pageCount = 1; true; pageCount++) {
		for(const item of currentPage.items) {
			yield item;
		}
		if(!currentPage.hasMorePages) {
			break;
		}
		if(maxPages > 0 && pageCount <= maxPages) {
			break;
		}
		currentPage = await fetcher(currentPage.nextPageCursor);
	}
}

/**
 * ShowsApi with auto-pagination support
 */
export class ShowsApiExtended extends ShowsApi {
	/**
	 * Performs SearchShowsByFiltersRequest with auto-pagination.
	 *
	 * @param requestParameters Request parameters
	 * @param maxPages Maximum number of pages to fetch. If 0 or less, fetches all pages.
	 * @param initOverrides Optional overrides for the fetch init parameters
	 *
	 * @returns AsyncGenerator of Show
	 */
	searchShowsByFiltersWithAutoPagination(requestParameters: SearchShowsByFiltersRequest, maxPages: number, initOverrides?: RequestInit | runtime.InitOverrideFunction): AsyncGenerator<Show,void,void> {
		return iterator(maxPages, async (cursor?: string): Promise<Page<Show>> => {
			const pageRequestParameters = {...requestParameters};
			if (cursor) {
				pageRequestParameters.cursor = cursor;
			}
			const searchResult = await this.searchShowsByFilters(pageRequestParameters, initOverrides);
			return {
				items: searchResult.shows,
				hasMorePages: searchResult.hasMore,
				nextPageCursor: searchResult.nextCursor,
			}
		});
	}
}

export interface ChangeWithShow extends Change {
	show: Show;
}

/**
 * ChangesApi with auto-pagination support
 */
export class ChangesApiExtended extends ChangesApi {
	/**
	 * Performs getChanges with auto-pagination.
	 * Unlike the original getChanges, this method returns ChangeWithShow objects, which include the Show object
	 * that corresponds to the showId field of the Change object.
	 *
	 * @param requestParameters Request parameters
	 * @param maxPages Maximum number of pages to fetch. If 0 or less, fetches all pages.
	 * @param initOverrides Optional overrides for the fetch init parameters
	 *
	 * @returns AsyncGenerator of ChangeWithShow
	 */
	getChangesWithAutoPagination(requestParameters: GetChangesRequest, maxPages: number, initOverrides?: RequestInit | runtime.InitOverrideFunction): AsyncGenerator<ChangeWithShow,void,void> {
		return iterator(maxPages, async (cursor?: string): Promise<Page<ChangeWithShow>> => {
			const pageRequestParameters = {...requestParameters};
			if (cursor) {
				pageRequestParameters.cursor = cursor;
			}
			const result = await this.getChanges(pageRequestParameters, initOverrides);
			return {
				items: result.changes.map((change) => ({...change, show: result.shows[change.showId]})),
				hasMorePages: result.hasMore,
				nextPageCursor: result.nextCursor,
			}
		});
	}
}
