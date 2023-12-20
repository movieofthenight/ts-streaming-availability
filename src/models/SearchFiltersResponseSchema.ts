/* tslint:disable */
/* eslint-disable */
/**
 * Streaming Availability API
 * Streaming Availability API allows getting streaming availability information of movies and series; and querying the list of available shows on streaming services such as Netflix, Disney+, Apple TV, Max and Hulu across 59 countries!
 *
 * The version of the OpenAPI document: 3.3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Show } from './Show';
import {
    ShowFromJSON,
    ShowFromJSONTyped,
    ShowToJSON,
} from './Show';

/**
 * 
 * @export
 * @interface SearchFiltersResponseSchema
 */
export interface SearchFiltersResponseSchema {
    /**
     * Array of the results matched with the query.
     * @type {Array<Show>}
     * @memberof SearchFiltersResponseSchema
     */
    result: Array<Show>;
    /**
     * Whether there are more results to be loaded.
     * @type {boolean}
     * @memberof SearchFiltersResponseSchema
     */
    hasMore: boolean;
    /**
     * Cursor value to pass to get next set of the results. An empty string if "hasMore" is "false".
     * @type {string}
     * @memberof SearchFiltersResponseSchema
     */
    nextCursor: string;
}

/**
 * Check if a given object implements the SearchFiltersResponseSchema interface.
 */
export function instanceOfSearchFiltersResponseSchema(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "result" in value;
    isInstance = isInstance && "hasMore" in value;
    isInstance = isInstance && "nextCursor" in value;

    return isInstance;
}

export function SearchFiltersResponseSchemaFromJSON(json: any): SearchFiltersResponseSchema {
    return SearchFiltersResponseSchemaFromJSONTyped(json, false);
}

export function SearchFiltersResponseSchemaFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchFiltersResponseSchema {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'result': ((json['result'] as Array<any>).map(ShowFromJSON)),
        'hasMore': json['hasMore'],
        'nextCursor': json['nextCursor'],
    };
}

export function SearchFiltersResponseSchemaToJSON(value?: SearchFiltersResponseSchema | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'result': ((value.result as Array<any>).map(ShowToJSON)),
        'hasMore': value.hasMore,
        'nextCursor': value.nextCursor,
    };
}

