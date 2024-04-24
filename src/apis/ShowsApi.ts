/* tslint:disable */
/* eslint-disable */
/**
 * Streaming Availability API
 * Streaming Availability API allows getting streaming availability information of movies and series; and querying the list of available shows on streaming services such as Netflix, Disney+, Apple TV, Max and Hulu across 59 countries!
 *
 * The version of the OpenAPI document: 4.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ModelError,
  SearchResult,
  Show,
  ShowType,
} from '../models/index';
import {
    ModelErrorFromJSON,
    ModelErrorToJSON,
    SearchResultFromJSON,
    SearchResultToJSON,
    ShowFromJSON,
    ShowToJSON,
    ShowTypeFromJSON,
    ShowTypeToJSON,
} from '../models/index';

export interface GetShowRequest {
    id: string;
    country?: string;
    seriesGranularity?: GetShowSeriesGranularityEnum;
    outputLanguage?: GetShowOutputLanguageEnum;
}

export interface SearchShowsByFiltersRequest {
    country: string;
    catalogs?: Array<string>;
    outputLanguage?: SearchShowsByFiltersOutputLanguageEnum;
    showType?: ShowType;
    genres?: Array<string>;
    genresRelation?: SearchShowsByFiltersGenresRelationEnum;
    showOriginalLanguage?: string;
    yearMin?: number;
    yearMax?: number;
    ratingMin?: number;
    ratingMax?: number;
    keyword?: string;
    seriesGranularity?: SearchShowsByFiltersSeriesGranularityEnum;
    orderBy?: SearchShowsByFiltersOrderByEnum;
    descendingOrder?: boolean;
    cursor?: string;
}

export interface SearchShowsByTitleRequest {
    title: string;
    country: string;
    showType?: ShowType;
    seriesGranularity?: SearchShowsByTitleSeriesGranularityEnum;
    outputLanguage?: SearchShowsByTitleOutputLanguageEnum;
}

/**
 * 
 */
export class ShowsApi extends runtime.BaseAPI {

    /**
     * Get the details of a show via id, imdbId or tmdbId, including the global streaming availability info.
     * Get a Show
     */
    async getShowRaw(requestParameters: GetShowRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Show>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getShow().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['country'] != null) {
            queryParameters['country'] = requestParameters['country'];
        }

        if (requestParameters['seriesGranularity'] != null) {
            queryParameters['series_granularity'] = requestParameters['seriesGranularity'];
        }

        if (requestParameters['outputLanguage'] != null) {
            queryParameters['output_language'] = requestParameters['outputLanguage'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-RapidAPI-Key"] = await this.configuration.apiKey("X-RapidAPI-Key"); // X-Rapid-API-Key authentication
        }

        const response = await this.request({
            path: `/shows/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ShowFromJSON(jsonValue));
    }

    /**
     * Get the details of a show via id, imdbId or tmdbId, including the global streaming availability info.
     * Get a Show
     */
    async getShow(requestParameters: GetShowRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Show> {
        const response = await this.getShowRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search through the catalog of the given streaming services in the given country. Provides filters such as show language, genres, keyword and release year. Output includes all the information about the shows, such as title, IMDb ID, TMDb ID, release year, deep links to streaming services, available subtitles, audios, available video quality and many more! Apart from the info about the given country-service combinations, output also includes information about streaming availability in the other services for the given country.  When show_type is movie or series_granularity is show, items per page is 20. When show_type is series and series_granularity is episode items per page is 10. Otherwise items per page is 15. 
     * Search Shows by filters
     */
    async searchShowsByFiltersRaw(requestParameters: SearchShowsByFiltersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchResult>> {
        if (requestParameters['country'] == null) {
            throw new runtime.RequiredError(
                'country',
                'Required parameter "country" was null or undefined when calling searchShowsByFilters().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['country'] != null) {
            queryParameters['country'] = requestParameters['country'];
        }

        if (requestParameters['catalogs'] != null) {
            queryParameters['catalogs'] = requestParameters['catalogs']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['outputLanguage'] != null) {
            queryParameters['output_language'] = requestParameters['outputLanguage'];
        }

        if (requestParameters['showType'] != null) {
            queryParameters['show_type'] = requestParameters['showType'];
        }

        if (requestParameters['genres'] != null) {
            queryParameters['genres'] = requestParameters['genres']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['genresRelation'] != null) {
            queryParameters['genres_relation'] = requestParameters['genresRelation'];
        }

        if (requestParameters['showOriginalLanguage'] != null) {
            queryParameters['show_original_language'] = requestParameters['showOriginalLanguage'];
        }

        if (requestParameters['yearMin'] != null) {
            queryParameters['year_min'] = requestParameters['yearMin'];
        }

        if (requestParameters['yearMax'] != null) {
            queryParameters['year_max'] = requestParameters['yearMax'];
        }

        if (requestParameters['ratingMin'] != null) {
            queryParameters['rating_min'] = requestParameters['ratingMin'];
        }

        if (requestParameters['ratingMax'] != null) {
            queryParameters['rating_max'] = requestParameters['ratingMax'];
        }

        if (requestParameters['keyword'] != null) {
            queryParameters['keyword'] = requestParameters['keyword'];
        }

        if (requestParameters['seriesGranularity'] != null) {
            queryParameters['series_granularity'] = requestParameters['seriesGranularity'];
        }

        if (requestParameters['orderBy'] != null) {
            queryParameters['order_by'] = requestParameters['orderBy'];
        }

        if (requestParameters['descendingOrder'] != null) {
            queryParameters['descending_order'] = requestParameters['descendingOrder'];
        }

        if (requestParameters['cursor'] != null) {
            queryParameters['cursor'] = requestParameters['cursor'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-RapidAPI-Key"] = await this.configuration.apiKey("X-RapidAPI-Key"); // X-Rapid-API-Key authentication
        }

        const response = await this.request({
            path: `/shows/search/filters`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SearchResultFromJSON(jsonValue));
    }

    /**
     * Search through the catalog of the given streaming services in the given country. Provides filters such as show language, genres, keyword and release year. Output includes all the information about the shows, such as title, IMDb ID, TMDb ID, release year, deep links to streaming services, available subtitles, audios, available video quality and many more! Apart from the info about the given country-service combinations, output also includes information about streaming availability in the other services for the given country.  When show_type is movie or series_granularity is show, items per page is 20. When show_type is series and series_granularity is episode items per page is 10. Otherwise items per page is 15. 
     * Search Shows by filters
     */
    async searchShowsByFilters(requestParameters: SearchShowsByFiltersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchResult> {
        const response = await this.searchShowsByFiltersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search for movies and series by a title. Maximum amount of items returned are 20 unless there are more than 20 shows with the exact given title input. In that case all the items have 100% match with the title will be returned.  No pagination is supported. 
     * Search Shows by title
     */
    async searchShowsByTitleRaw(requestParameters: SearchShowsByTitleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Show>>> {
        if (requestParameters['title'] == null) {
            throw new runtime.RequiredError(
                'title',
                'Required parameter "title" was null or undefined when calling searchShowsByTitle().'
            );
        }

        if (requestParameters['country'] == null) {
            throw new runtime.RequiredError(
                'country',
                'Required parameter "country" was null or undefined when calling searchShowsByTitle().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['title'] != null) {
            queryParameters['title'] = requestParameters['title'];
        }

        if (requestParameters['showType'] != null) {
            queryParameters['show_type'] = requestParameters['showType'];
        }

        if (requestParameters['country'] != null) {
            queryParameters['country'] = requestParameters['country'];
        }

        if (requestParameters['seriesGranularity'] != null) {
            queryParameters['series_granularity'] = requestParameters['seriesGranularity'];
        }

        if (requestParameters['outputLanguage'] != null) {
            queryParameters['output_language'] = requestParameters['outputLanguage'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-RapidAPI-Key"] = await this.configuration.apiKey("X-RapidAPI-Key"); // X-Rapid-API-Key authentication
        }

        const response = await this.request({
            path: `/shows/search/title`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ShowFromJSON));
    }

    /**
     * Search for movies and series by a title. Maximum amount of items returned are 20 unless there are more than 20 shows with the exact given title input. In that case all the items have 100% match with the title will be returned.  No pagination is supported. 
     * Search Shows by title
     */
    async searchShowsByTitle(requestParameters: SearchShowsByTitleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Show>> {
        const response = await this.searchShowsByTitleRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetShowSeriesGranularityEnum = {
    Show: 'show',
    Season: 'season',
    Episode: 'episode'
} as const;
export type GetShowSeriesGranularityEnum = typeof GetShowSeriesGranularityEnum[keyof typeof GetShowSeriesGranularityEnum];
/**
 * @export
 */
export const GetShowOutputLanguageEnum = {
    En: 'en',
    Es: 'es',
    Tr: 'tr',
    Fr: 'fr'
} as const;
export type GetShowOutputLanguageEnum = typeof GetShowOutputLanguageEnum[keyof typeof GetShowOutputLanguageEnum];
/**
 * @export
 */
export const SearchShowsByFiltersOutputLanguageEnum = {
    En: 'en',
    Es: 'es',
    Tr: 'tr',
    Fr: 'fr'
} as const;
export type SearchShowsByFiltersOutputLanguageEnum = typeof SearchShowsByFiltersOutputLanguageEnum[keyof typeof SearchShowsByFiltersOutputLanguageEnum];
/**
 * @export
 */
export const SearchShowsByFiltersGenresRelationEnum = {
    And: 'and',
    Or: 'or'
} as const;
export type SearchShowsByFiltersGenresRelationEnum = typeof SearchShowsByFiltersGenresRelationEnum[keyof typeof SearchShowsByFiltersGenresRelationEnum];
/**
 * @export
 */
export const SearchShowsByFiltersSeriesGranularityEnum = {
    Show: 'show',
    Season: 'season',
    Episode: 'episode'
} as const;
export type SearchShowsByFiltersSeriesGranularityEnum = typeof SearchShowsByFiltersSeriesGranularityEnum[keyof typeof SearchShowsByFiltersSeriesGranularityEnum];
/**
 * @export
 */
export const SearchShowsByFiltersOrderByEnum = {
    OriginalTitle: 'original_title',
    ReleaseDate: 'release_date',
    Rating: 'rating',
    PopularityAlltime: 'popularity_alltime',
    Popularity1year: 'popularity_1year',
    Popularity1month: 'popularity_1month',
    Popularity1week: 'popularity_1week'
} as const;
export type SearchShowsByFiltersOrderByEnum = typeof SearchShowsByFiltersOrderByEnum[keyof typeof SearchShowsByFiltersOrderByEnum];
/**
 * @export
 */
export const SearchShowsByTitleSeriesGranularityEnum = {
    Show: 'show',
    Season: 'season',
    Episode: 'episode'
} as const;
export type SearchShowsByTitleSeriesGranularityEnum = typeof SearchShowsByTitleSeriesGranularityEnum[keyof typeof SearchShowsByTitleSeriesGranularityEnum];
/**
 * @export
 */
export const SearchShowsByTitleOutputLanguageEnum = {
    En: 'en',
    Es: 'es',
    Tr: 'tr',
    Fr: 'fr'
} as const;
export type SearchShowsByTitleOutputLanguageEnum = typeof SearchShowsByTitleOutputLanguageEnum[keyof typeof SearchShowsByTitleOutputLanguageEnum];
