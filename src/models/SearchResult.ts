/* tslint:disable */
/* eslint-disable */
/**
 * Streaming Availability API
 * Streaming Availability API allows getting streaming availability information of movies and series; and querying the list of available shows on streaming services such as Netflix, Disney+, Apple TV, Max and Hulu across 60 countries!
 *
 * The version of the OpenAPI document: 4.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Show } from './Show';
import {
    ShowFromJSON,
    ShowFromJSONTyped,
    ShowToJSON,
} from './Show';

/**
 * 
 * @export
 * @interface SearchResult
 */
export interface SearchResult {
    /**
     * Array of shows.
     * @type {Array<Show>}
     * @memberof SearchResult
     */
    shows: Array<Show>;
    /**
     * Whether there are more shows available.
     * @type {boolean}
     * @memberof SearchResult
     */
    hasMore: boolean;
    /**
     * Cursor value to pass to get the next set of shows.
     * @type {string}
     * @memberof SearchResult
     */
    nextCursor?: string;
}

/**
 * Check if a given object implements the SearchResult interface.
 */
export function instanceOfSearchResult(value: object): boolean {
    if (!('shows' in value)) return false;
    if (!('hasMore' in value)) return false;
    return true;
}

export function SearchResultFromJSON(json: any): SearchResult {
    return SearchResultFromJSONTyped(json, false);
}

export function SearchResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchResult {
    if (json == null) {
        return json;
    }
    return {
        
        'shows': ((json['shows'] as Array<any>).map(ShowFromJSON)),
        'hasMore': json['hasMore'],
        'nextCursor': json['nextCursor'] == null ? undefined : json['nextCursor'],
    };
}

export function SearchResultToJSON(value?: SearchResult | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'shows': ((value['shows'] as Array<any>).map(ShowToJSON)),
        'hasMore': value['hasMore'],
        'nextCursor': value['nextCursor'],
    };
}

