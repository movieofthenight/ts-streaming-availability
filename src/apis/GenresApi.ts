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
  Genre,
  ModelError,
} from '../models/index';
import {
    GenreFromJSON,
    GenreToJSON,
    ModelErrorFromJSON,
    ModelErrorToJSON,
} from '../models/index';

export interface GetGenresRequest {
    outputLanguage?: GetGenresOutputLanguageEnum;
}

/**
 * 
 */
export class GenresApi extends runtime.BaseAPI {

    /**
     * Get the list of supported genres.
     * Get all Genres
     */
    async getGenresRaw(requestParameters: GetGenresRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Genre>>> {
        const queryParameters: any = {};

        if (requestParameters['outputLanguage'] != null) {
            queryParameters['output_language'] = requestParameters['outputLanguage'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-RapidAPI-Key"] = await this.configuration.apiKey("X-RapidAPI-Key"); // X-Rapid-API-Key authentication
        }

        const response = await this.request({
            path: `/genres`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GenreFromJSON));
    }

    /**
     * Get the list of supported genres.
     * Get all Genres
     */
    async getGenres(requestParameters: GetGenresRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Genre>> {
        const response = await this.getGenresRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetGenresOutputLanguageEnum = {
    En: 'en',
    Es: 'es',
    Tr: 'tr',
    Fr: 'fr'
} as const;
export type GetGenresOutputLanguageEnum = typeof GetGenresOutputLanguageEnum[keyof typeof GetGenresOutputLanguageEnum];