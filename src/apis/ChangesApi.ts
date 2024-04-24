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
  ChangeType,
  ChangesResult,
  ItemType,
  ModelError,
  ShowType,
} from '../models/index';
import {
    ChangeTypeFromJSON,
    ChangeTypeToJSON,
    ChangesResultFromJSON,
    ChangesResultToJSON,
    ItemTypeFromJSON,
    ItemTypeToJSON,
    ModelErrorFromJSON,
    ModelErrorToJSON,
    ShowTypeFromJSON,
    ShowTypeToJSON,
} from '../models/index';

export interface GetChangesRequest {
    country: string;
    changeType: ChangeType;
    itemType: ItemType;
    catalogs?: Array<string>;
    showType?: ShowType;
    from?: number;
    to?: number;
    includeUnknownDates?: boolean;
    cursor?: string;
    descendingOrder?: boolean;
    outputLanguage?: GetChangesOutputLanguageEnum;
}

/**
 * 
 */
export class ChangesApi extends runtime.BaseAPI {

    /**
     * Query the new, removed, updated, expiring or upcoming movies/series/seasons/episodes in a given list of streaming services. Results are ordered by the date of the changes. Changes listed per page is \"25\".  Changes are listed under \"changes\" field, and shows affected by these changes are listed under \"shows\" field. 
     * Get Changes
     */
    async getChangesRaw(requestParameters: GetChangesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ChangesResult>> {
        if (requestParameters['country'] == null) {
            throw new runtime.RequiredError(
                'country',
                'Required parameter "country" was null or undefined when calling getChanges().'
            );
        }

        if (requestParameters['changeType'] == null) {
            throw new runtime.RequiredError(
                'changeType',
                'Required parameter "changeType" was null or undefined when calling getChanges().'
            );
        }

        if (requestParameters['itemType'] == null) {
            throw new runtime.RequiredError(
                'itemType',
                'Required parameter "itemType" was null or undefined when calling getChanges().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['country'] != null) {
            queryParameters['country'] = requestParameters['country'];
        }

        if (requestParameters['catalogs'] != null) {
            queryParameters['catalogs'] = requestParameters['catalogs']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['changeType'] != null) {
            queryParameters['change_type'] = requestParameters['changeType'];
        }

        if (requestParameters['itemType'] != null) {
            queryParameters['item_type'] = requestParameters['itemType'];
        }

        if (requestParameters['showType'] != null) {
            queryParameters['show_type'] = requestParameters['showType'];
        }

        if (requestParameters['from'] != null) {
            queryParameters['from'] = requestParameters['from'];
        }

        if (requestParameters['to'] != null) {
            queryParameters['to'] = requestParameters['to'];
        }

        if (requestParameters['includeUnknownDates'] != null) {
            queryParameters['include_unknown_dates'] = requestParameters['includeUnknownDates'];
        }

        if (requestParameters['cursor'] != null) {
            queryParameters['cursor'] = requestParameters['cursor'];
        }

        if (requestParameters['descendingOrder'] != null) {
            queryParameters['descending_order'] = requestParameters['descendingOrder'];
        }

        if (requestParameters['outputLanguage'] != null) {
            queryParameters['output_language'] = requestParameters['outputLanguage'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-RapidAPI-Key"] = await this.configuration.apiKey("X-RapidAPI-Key"); // X-Rapid-API-Key authentication
        }

        const response = await this.request({
            path: `/changes`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ChangesResultFromJSON(jsonValue));
    }

    /**
     * Query the new, removed, updated, expiring or upcoming movies/series/seasons/episodes in a given list of streaming services. Results are ordered by the date of the changes. Changes listed per page is \"25\".  Changes are listed under \"changes\" field, and shows affected by these changes are listed under \"shows\" field. 
     * Get Changes
     */
    async getChanges(requestParameters: GetChangesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ChangesResult> {
        const response = await this.getChangesRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetChangesOutputLanguageEnum = {
    En: 'en',
    Es: 'es',
    Tr: 'tr',
    Fr: 'fr'
} as const;
export type GetChangesOutputLanguageEnum = typeof GetChangesOutputLanguageEnum[keyof typeof GetChangesOutputLanguageEnum];
