/* tslint:disable */
/* eslint-disable */
/**
 * Streaming Availability API
 * Streaming Availability API allows getting streaming availability information of movies and series; and querying the list of available shows on streaming services such as Netflix, Disney+, Apple TV, Max and Hulu across 58 countries!
 *
 * The version of the OpenAPI document: 3.2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ChangesResponseSchema,
  CountriesResponseSchema,
  GenresResponseSchema,
  GetResponseSchema,
  NotFoundResponseSchema,
  SearchFiltersResponseSchema,
  SearchTitleResponseSchema,
  ServicesResponseSchema,
  UpcomingChangesResponseSchema,
} from '../models/index';
import {
    ChangesResponseSchemaFromJSON,
    ChangesResponseSchemaToJSON,
    CountriesResponseSchemaFromJSON,
    CountriesResponseSchemaToJSON,
    GenresResponseSchemaFromJSON,
    GenresResponseSchemaToJSON,
    GetResponseSchemaFromJSON,
    GetResponseSchemaToJSON,
    NotFoundResponseSchemaFromJSON,
    NotFoundResponseSchemaToJSON,
    SearchFiltersResponseSchemaFromJSON,
    SearchFiltersResponseSchemaToJSON,
    SearchTitleResponseSchemaFromJSON,
    SearchTitleResponseSchemaToJSON,
    ServicesResponseSchemaFromJSON,
    ServicesResponseSchemaToJSON,
    UpcomingChangesResponseSchemaFromJSON,
    UpcomingChangesResponseSchemaToJSON,
} from '../models/index';

export interface ChangesRequest {
    country: string;
    services: string;
    changeType: ChangesChangeTypeEnum;
    targetType: ChangesTargetTypeEnum;
    since?: number;
    cursor?: string;
    desc?: boolean;
    outputLanguage?: ChangesOutputLanguageEnum;
}

export interface GetByIdRequest {
    imdbId?: string;
    tmdbId?: string;
    seriesGranularity?: GetByIdSeriesGranularityEnum;
    outputLanguage?: GetByIdOutputLanguageEnum;
}

export interface LeavingRequest {
    country: string;
    services: string;
    targetType: LeavingTargetTypeEnum;
    cursor?: string;
    outputLanguage?: LeavingOutputLanguageEnum;
}

export interface SearchByFiltersRequest {
    country: string;
    services: string;
    outputLanguage?: SearchByFiltersOutputLanguageEnum;
    showType?: SearchByFiltersShowTypeEnum;
    seriesGranularity?: SearchByFiltersSeriesGranularityEnum;
    genres?: string;
    genresRelation?: SearchByFiltersGenresRelationEnum;
    showOriginalLanguage?: string;
    yearMin?: number;
    yearMax?: number;
    keyword?: string;
    orderBy?: SearchByFiltersOrderByEnum;
    desc?: boolean;
    cursor?: string;
}

export interface SearchByTitleRequest {
    title: string;
    country: string;
    showType?: SearchByTitleShowTypeEnum;
    seriesGranularity?: SearchByTitleSeriesGranularityEnum;
    outputLanguage?: SearchByTitleOutputLanguageEnum;
}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     * Query the new, removed or updated movies/series/seasons/episodes in a given list of streaming services. Results are ordered by the date of the changes. Changes listed per page is \"25\" when \"target_type\" is \"show\", \"movie\" or \"series\"; \"50\" when it is \"season\"; and \"100\" when it is \"episode\". Note that changes for the same show are aggregated together into a single \"changes\" array for that show. Which means there might be cases where the count of the items in the result array might be fewer than the maximum changes listed per page. (i.e. When \"target_type\" is \"season\", there might be 10 items in the result array, but the overall total number of changes listed across the \"changes\" arrays will be still 50, given that there are at least 50 changes matches with the given query.) 
     * Changes
     */
    async changesRaw(requestParameters: ChangesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ChangesResponseSchema>> {
        if (requestParameters.country === null || requestParameters.country === undefined) {
            throw new runtime.RequiredError('country','Required parameter requestParameters.country was null or undefined when calling changes.');
        }

        if (requestParameters.services === null || requestParameters.services === undefined) {
            throw new runtime.RequiredError('services','Required parameter requestParameters.services was null or undefined when calling changes.');
        }

        if (requestParameters.changeType === null || requestParameters.changeType === undefined) {
            throw new runtime.RequiredError('changeType','Required parameter requestParameters.changeType was null or undefined when calling changes.');
        }

        if (requestParameters.targetType === null || requestParameters.targetType === undefined) {
            throw new runtime.RequiredError('targetType','Required parameter requestParameters.targetType was null or undefined when calling changes.');
        }

        const queryParameters: any = {};

        if (requestParameters.country !== undefined) {
            queryParameters['country'] = requestParameters.country;
        }

        if (requestParameters.services !== undefined) {
            queryParameters['services'] = requestParameters.services;
        }

        if (requestParameters.changeType !== undefined) {
            queryParameters['change_type'] = requestParameters.changeType;
        }

        if (requestParameters.targetType !== undefined) {
            queryParameters['target_type'] = requestParameters.targetType;
        }

        if (requestParameters.since !== undefined) {
            queryParameters['since'] = requestParameters.since;
        }

        if (requestParameters.cursor !== undefined) {
            queryParameters['cursor'] = requestParameters.cursor;
        }

        if (requestParameters.desc !== undefined) {
            queryParameters['desc'] = requestParameters.desc;
        }

        if (requestParameters.outputLanguage !== undefined) {
            queryParameters['output_language'] = requestParameters.outputLanguage;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-RapidAPI-Key"] = this.configuration.apiKey("X-RapidAPI-Key"); // X-Rapid-API-Key authentication
        }

        const response = await this.request({
            path: `/changes`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ChangesResponseSchemaFromJSON(jsonValue));
    }

    /**
     * Query the new, removed or updated movies/series/seasons/episodes in a given list of streaming services. Results are ordered by the date of the changes. Changes listed per page is \"25\" when \"target_type\" is \"show\", \"movie\" or \"series\"; \"50\" when it is \"season\"; and \"100\" when it is \"episode\". Note that changes for the same show are aggregated together into a single \"changes\" array for that show. Which means there might be cases where the count of the items in the result array might be fewer than the maximum changes listed per page. (i.e. When \"target_type\" is \"season\", there might be 10 items in the result array, but the overall total number of changes listed across the \"changes\" arrays will be still 50, given that there are at least 50 changes matches with the given query.) 
     * Changes
     */
    async changes(requestParameters: ChangesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ChangesResponseSchema> {
        const response = await this.changesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get all the supported countries and the list of the supported services and their details for each country. Details of services include names, logos, supported streaming types (subscription, rent, buy, free etc.) and list of available addons/channels. 
     * Countries
     */
    async countriesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CountriesResponseSchema>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-RapidAPI-Key"] = this.configuration.apiKey("X-RapidAPI-Key"); // X-Rapid-API-Key authentication
        }

        const response = await this.request({
            path: `/countries`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CountriesResponseSchemaFromJSON(jsonValue));
    }

    /**
     * Get all the supported countries and the list of the supported services and their details for each country. Details of services include names, logos, supported streaming types (subscription, rent, buy, free etc.) and list of available addons/channels. 
     * Countries
     */
    async countries(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CountriesResponseSchema> {
        const response = await this.countriesRaw(initOverrides);
        return await response.value();
    }

    /**
     * Get the ids and names of the supported genres.
     * Genres
     */
    async genresRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GenresResponseSchema>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-RapidAPI-Key"] = this.configuration.apiKey("X-RapidAPI-Key"); // X-Rapid-API-Key authentication
        }

        const response = await this.request({
            path: `/genres`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GenresResponseSchemaFromJSON(jsonValue));
    }

    /**
     * Get the ids and names of the supported genres.
     * Genres
     */
    async genres(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GenresResponseSchema> {
        const response = await this.genresRaw(initOverrides);
        return await response.value();
    }

    /**
     * Get the details of a show via IMDb or TMDb id, including the global streaming availability info.
     * Get by Id
     */
    async getByIdRaw(requestParameters: GetByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetResponseSchema>> {
        const queryParameters: any = {};

        if (requestParameters.imdbId !== undefined) {
            queryParameters['imdb_id'] = requestParameters.imdbId;
        }

        if (requestParameters.tmdbId !== undefined) {
            queryParameters['tmdb_id'] = requestParameters.tmdbId;
        }

        if (requestParameters.seriesGranularity !== undefined) {
            queryParameters['series_granularity'] = requestParameters.seriesGranularity;
        }

        if (requestParameters.outputLanguage !== undefined) {
            queryParameters['output_language'] = requestParameters.outputLanguage;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-RapidAPI-Key"] = this.configuration.apiKey("X-RapidAPI-Key"); // X-Rapid-API-Key authentication
        }

        const response = await this.request({
            path: `/get`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetResponseSchemaFromJSON(jsonValue));
    }

    /**
     * Get the details of a show via IMDb or TMDb id, including the global streaming availability info.
     * Get by Id
     */
    async getById(requestParameters: GetByIdRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetResponseSchema> {
        const response = await this.getByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Query for the leaving movies/series/seasons/episodes in a given list of streaming services. Results are ordered by the last day to watch. Changes listed per page is \"25\" when \"target_type\" is \"show\", \"movie\" or \"series\"; \"50\" when it is \"season\"; and \"100\" when it is \"episode\". Note that upcoming changes for the same show are aggregated together into a single \"upcomingChanges\" array for that show. Which means there might be cases where the count of the items in the result array might be fewer than the maximum upcoming changes listed per page. (i.e. When \"target_type\" is \"season\", there might be 10 items in the result array, but the overall total number of upcoming changes listed across the \"upcomingChanges\" arrays will be still 50, given that there are at least 50 upcoming changes matches with the given query.) 
     * Leaving
     */
    async leavingRaw(requestParameters: LeavingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UpcomingChangesResponseSchema>> {
        if (requestParameters.country === null || requestParameters.country === undefined) {
            throw new runtime.RequiredError('country','Required parameter requestParameters.country was null or undefined when calling leaving.');
        }

        if (requestParameters.services === null || requestParameters.services === undefined) {
            throw new runtime.RequiredError('services','Required parameter requestParameters.services was null or undefined when calling leaving.');
        }

        if (requestParameters.targetType === null || requestParameters.targetType === undefined) {
            throw new runtime.RequiredError('targetType','Required parameter requestParameters.targetType was null or undefined when calling leaving.');
        }

        const queryParameters: any = {};

        if (requestParameters.country !== undefined) {
            queryParameters['country'] = requestParameters.country;
        }

        if (requestParameters.services !== undefined) {
            queryParameters['services'] = requestParameters.services;
        }

        if (requestParameters.targetType !== undefined) {
            queryParameters['target_type'] = requestParameters.targetType;
        }

        if (requestParameters.cursor !== undefined) {
            queryParameters['cursor'] = requestParameters.cursor;
        }

        if (requestParameters.outputLanguage !== undefined) {
            queryParameters['output_language'] = requestParameters.outputLanguage;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-RapidAPI-Key"] = this.configuration.apiKey("X-RapidAPI-Key"); // X-Rapid-API-Key authentication
        }

        const response = await this.request({
            path: `/leaving`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UpcomingChangesResponseSchemaFromJSON(jsonValue));
    }

    /**
     * Query for the leaving movies/series/seasons/episodes in a given list of streaming services. Results are ordered by the last day to watch. Changes listed per page is \"25\" when \"target_type\" is \"show\", \"movie\" or \"series\"; \"50\" when it is \"season\"; and \"100\" when it is \"episode\". Note that upcoming changes for the same show are aggregated together into a single \"upcomingChanges\" array for that show. Which means there might be cases where the count of the items in the result array might be fewer than the maximum upcoming changes listed per page. (i.e. When \"target_type\" is \"season\", there might be 10 items in the result array, but the overall total number of upcoming changes listed across the \"upcomingChanges\" arrays will be still 50, given that there are at least 50 upcoming changes matches with the given query.) 
     * Leaving
     */
    async leaving(requestParameters: LeavingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UpcomingChangesResponseSchema> {
        const response = await this.leavingRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search through the catalog of the given streaming services in the given country. Provides filters such as show language, genre, keyword and release year. Items per page is \"25\". Can pass up to \"16\" services in the \"services\" parameter Output includes all the information about the shows, such as title, IMDb ID, TMDb ID, release year, link to shows\' pages in streaming services (including individual season/episode links), available subtitles, audios, available video quality and many more! Apart from the info about the given country-service combinations, output also includes information about streaming availability in the other services for the given country. 
     * Search by Filters
     */
    async searchByFiltersRaw(requestParameters: SearchByFiltersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchFiltersResponseSchema>> {
        if (requestParameters.country === null || requestParameters.country === undefined) {
            throw new runtime.RequiredError('country','Required parameter requestParameters.country was null or undefined when calling searchByFilters.');
        }

        if (requestParameters.services === null || requestParameters.services === undefined) {
            throw new runtime.RequiredError('services','Required parameter requestParameters.services was null or undefined when calling searchByFilters.');
        }

        const queryParameters: any = {};

        if (requestParameters.country !== undefined) {
            queryParameters['country'] = requestParameters.country;
        }

        if (requestParameters.services !== undefined) {
            queryParameters['services'] = requestParameters.services;
        }

        if (requestParameters.outputLanguage !== undefined) {
            queryParameters['output_language'] = requestParameters.outputLanguage;
        }

        if (requestParameters.showType !== undefined) {
            queryParameters['show_type'] = requestParameters.showType;
        }

        if (requestParameters.seriesGranularity !== undefined) {
            queryParameters['series_granularity'] = requestParameters.seriesGranularity;
        }

        if (requestParameters.genres !== undefined) {
            queryParameters['genres'] = requestParameters.genres;
        }

        if (requestParameters.genresRelation !== undefined) {
            queryParameters['genres_relation'] = requestParameters.genresRelation;
        }

        if (requestParameters.showOriginalLanguage !== undefined) {
            queryParameters['show_original_language'] = requestParameters.showOriginalLanguage;
        }

        if (requestParameters.yearMin !== undefined) {
            queryParameters['year_min'] = requestParameters.yearMin;
        }

        if (requestParameters.yearMax !== undefined) {
            queryParameters['year_max'] = requestParameters.yearMax;
        }

        if (requestParameters.keyword !== undefined) {
            queryParameters['keyword'] = requestParameters.keyword;
        }

        if (requestParameters.orderBy !== undefined) {
            queryParameters['order_by'] = requestParameters.orderBy;
        }

        if (requestParameters.desc !== undefined) {
            queryParameters['desc'] = requestParameters.desc;
        }

        if (requestParameters.cursor !== undefined) {
            queryParameters['cursor'] = requestParameters.cursor;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-RapidAPI-Key"] = this.configuration.apiKey("X-RapidAPI-Key"); // X-Rapid-API-Key authentication
        }

        const response = await this.request({
            path: `/search/filters`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SearchFiltersResponseSchemaFromJSON(jsonValue));
    }

    /**
     * Search through the catalog of the given streaming services in the given country. Provides filters such as show language, genre, keyword and release year. Items per page is \"25\". Can pass up to \"16\" services in the \"services\" parameter Output includes all the information about the shows, such as title, IMDb ID, TMDb ID, release year, link to shows\' pages in streaming services (including individual season/episode links), available subtitles, audios, available video quality and many more! Apart from the info about the given country-service combinations, output also includes information about streaming availability in the other services for the given country. 
     * Search by Filters
     */
    async searchByFilters(requestParameters: SearchByFiltersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchFiltersResponseSchema> {
        const response = await this.searchByFiltersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search for movies and series by a title. Maximum amount of items returned are \"25\" unless there are more than 25 shows with the exact given title input. In that case all the items have 100% match with the title will be returned. No pagination is supported. 
     * Search by Title
     */
    async searchByTitleRaw(requestParameters: SearchByTitleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchTitleResponseSchema>> {
        if (requestParameters.title === null || requestParameters.title === undefined) {
            throw new runtime.RequiredError('title','Required parameter requestParameters.title was null or undefined when calling searchByTitle.');
        }

        if (requestParameters.country === null || requestParameters.country === undefined) {
            throw new runtime.RequiredError('country','Required parameter requestParameters.country was null or undefined when calling searchByTitle.');
        }

        const queryParameters: any = {};

        if (requestParameters.title !== undefined) {
            queryParameters['title'] = requestParameters.title;
        }

        if (requestParameters.showType !== undefined) {
            queryParameters['show_type'] = requestParameters.showType;
        }

        if (requestParameters.country !== undefined) {
            queryParameters['country'] = requestParameters.country;
        }

        if (requestParameters.seriesGranularity !== undefined) {
            queryParameters['series_granularity'] = requestParameters.seriesGranularity;
        }

        if (requestParameters.outputLanguage !== undefined) {
            queryParameters['output_language'] = requestParameters.outputLanguage;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-RapidAPI-Key"] = this.configuration.apiKey("X-RapidAPI-Key"); // X-Rapid-API-Key authentication
        }

        const response = await this.request({
            path: `/search/title`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SearchTitleResponseSchemaFromJSON(jsonValue));
    }

    /**
     * Search for movies and series by a title. Maximum amount of items returned are \"25\" unless there are more than 25 shows with the exact given title input. In that case all the items have 100% match with the title will be returned. No pagination is supported. 
     * Search by Title
     */
    async searchByTitle(requestParameters: SearchByTitleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchTitleResponseSchema> {
        const response = await this.searchByTitleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get all the supported streaming services, list of the supported countries for each service and other related details. Note: This endpoint is deprecated. Please use the \"/countries\" endpoint instead. 
     * Services
     */
    async servicesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ServicesResponseSchema>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-RapidAPI-Key"] = this.configuration.apiKey("X-RapidAPI-Key"); // X-Rapid-API-Key authentication
        }

        const response = await this.request({
            path: `/services`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ServicesResponseSchemaFromJSON(jsonValue));
    }

    /**
     * Get all the supported streaming services, list of the supported countries for each service and other related details. Note: This endpoint is deprecated. Please use the \"/countries\" endpoint instead. 
     * Services
     */
    async services(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ServicesResponseSchema> {
        const response = await this.servicesRaw(initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const ChangesChangeTypeEnum = {
    New: 'new',
    Removed: 'removed',
    Updated: 'updated'
} as const;
export type ChangesChangeTypeEnum = typeof ChangesChangeTypeEnum[keyof typeof ChangesChangeTypeEnum];
/**
 * @export
 */
export const ChangesTargetTypeEnum = {
    Show: 'show',
    Movie: 'movie',
    Series: 'series',
    Season: 'season',
    Episode: 'episode'
} as const;
export type ChangesTargetTypeEnum = typeof ChangesTargetTypeEnum[keyof typeof ChangesTargetTypeEnum];
/**
 * @export
 */
export const ChangesOutputLanguageEnum = {
    En: 'en',
    Es: 'es',
    Tr: 'tr',
    Fr: 'fr'
} as const;
export type ChangesOutputLanguageEnum = typeof ChangesOutputLanguageEnum[keyof typeof ChangesOutputLanguageEnum];
/**
 * @export
 */
export const GetByIdSeriesGranularityEnum = {
    Show: 'show',
    Season: 'season',
    Episode: 'episode'
} as const;
export type GetByIdSeriesGranularityEnum = typeof GetByIdSeriesGranularityEnum[keyof typeof GetByIdSeriesGranularityEnum];
/**
 * @export
 */
export const GetByIdOutputLanguageEnum = {
    En: 'en',
    Es: 'es',
    Tr: 'tr',
    Fr: 'fr'
} as const;
export type GetByIdOutputLanguageEnum = typeof GetByIdOutputLanguageEnum[keyof typeof GetByIdOutputLanguageEnum];
/**
 * @export
 */
export const LeavingTargetTypeEnum = {
    Show: 'show',
    Movie: 'movie',
    Series: 'series',
    Season: 'season',
    Episode: 'episode'
} as const;
export type LeavingTargetTypeEnum = typeof LeavingTargetTypeEnum[keyof typeof LeavingTargetTypeEnum];
/**
 * @export
 */
export const LeavingOutputLanguageEnum = {
    En: 'en',
    Es: 'es',
    Tr: 'tr',
    Fr: 'fr'
} as const;
export type LeavingOutputLanguageEnum = typeof LeavingOutputLanguageEnum[keyof typeof LeavingOutputLanguageEnum];
/**
 * @export
 */
export const SearchByFiltersOutputLanguageEnum = {
    En: 'en',
    Es: 'es',
    Tr: 'tr',
    Fr: 'fr'
} as const;
export type SearchByFiltersOutputLanguageEnum = typeof SearchByFiltersOutputLanguageEnum[keyof typeof SearchByFiltersOutputLanguageEnum];
/**
 * @export
 */
export const SearchByFiltersShowTypeEnum = {
    Movie: 'movie',
    Series: 'series',
    All: 'all'
} as const;
export type SearchByFiltersShowTypeEnum = typeof SearchByFiltersShowTypeEnum[keyof typeof SearchByFiltersShowTypeEnum];
/**
 * @export
 */
export const SearchByFiltersSeriesGranularityEnum = {
    Show: 'show',
    Season: 'season',
    Episode: 'episode'
} as const;
export type SearchByFiltersSeriesGranularityEnum = typeof SearchByFiltersSeriesGranularityEnum[keyof typeof SearchByFiltersSeriesGranularityEnum];
/**
 * @export
 */
export const SearchByFiltersGenresRelationEnum = {
    And: 'and',
    Or: 'or'
} as const;
export type SearchByFiltersGenresRelationEnum = typeof SearchByFiltersGenresRelationEnum[keyof typeof SearchByFiltersGenresRelationEnum];
/**
 * @export
 */
export const SearchByFiltersOrderByEnum = {
    OriginalTitle: 'original_title',
    Year: 'year',
    PopularityAlltime: 'popularity_alltime',
    Popularity1year: 'popularity_1year',
    Popularity1month: 'popularity_1month',
    Popularity1week: 'popularity_1week'
} as const;
export type SearchByFiltersOrderByEnum = typeof SearchByFiltersOrderByEnum[keyof typeof SearchByFiltersOrderByEnum];
/**
 * @export
 */
export const SearchByTitleShowTypeEnum = {
    Movie: 'movie',
    Series: 'series',
    All: 'all'
} as const;
export type SearchByTitleShowTypeEnum = typeof SearchByTitleShowTypeEnum[keyof typeof SearchByTitleShowTypeEnum];
/**
 * @export
 */
export const SearchByTitleSeriesGranularityEnum = {
    Show: 'show',
    Season: 'season',
    Episode: 'episode'
} as const;
export type SearchByTitleSeriesGranularityEnum = typeof SearchByTitleSeriesGranularityEnum[keyof typeof SearchByTitleSeriesGranularityEnum];
/**
 * @export
 */
export const SearchByTitleOutputLanguageEnum = {
    En: 'en',
    Es: 'es',
    Tr: 'tr',
    Fr: 'fr'
} as const;
export type SearchByTitleOutputLanguageEnum = typeof SearchByTitleOutputLanguageEnum[keyof typeof SearchByTitleOutputLanguageEnum];
