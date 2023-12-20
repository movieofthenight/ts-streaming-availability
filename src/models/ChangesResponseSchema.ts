/* tslint:disable */
/* eslint-disable */
/**
 * Streaming Availability API
 * Streaming Availability API allows getting streaming availability information of movies and series; and querying the list of available shows on streaming services such as Netflix, Disney+, Apple TV, Max and Hulu across 59 countries!
 *
 * The version of the OpenAPI document: 3.3.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ChangeSet } from './ChangeSet';
import {
    ChangeSetFromJSON,
    ChangeSetFromJSONTyped,
    ChangeSetToJSON,
} from './ChangeSet';

/**
 * 
 * @export
 * @interface ChangesResponseSchema
 */
export interface ChangesResponseSchema {
    /**
     * Array of the results matched with the query.
     * @type {Array<ChangeSet>}
     * @memberof ChangesResponseSchema
     */
    result: Array<ChangeSet>;
    /**
     * Whether there are more results to be loaded.
     * @type {boolean}
     * @memberof ChangesResponseSchema
     */
    hasMore: boolean;
    /**
     * Cursor value to pass to get next set of the results. An empty string if "hasMore" is "false".
     * @type {string}
     * @memberof ChangesResponseSchema
     */
    nextCursor: string;
}

/**
 * Check if a given object implements the ChangesResponseSchema interface.
 */
export function instanceOfChangesResponseSchema(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "result" in value;
    isInstance = isInstance && "hasMore" in value;
    isInstance = isInstance && "nextCursor" in value;

    return isInstance;
}

export function ChangesResponseSchemaFromJSON(json: any): ChangesResponseSchema {
    return ChangesResponseSchemaFromJSONTyped(json, false);
}

export function ChangesResponseSchemaFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangesResponseSchema {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'result': ((json['result'] as Array<any>).map(ChangeSetFromJSON)),
        'hasMore': json['hasMore'],
        'nextCursor': json['nextCursor'],
    };
}

export function ChangesResponseSchemaToJSON(value?: ChangesResponseSchema | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'result': ((value.result as Array<any>).map(ChangeSetToJSON)),
        'hasMore': value.hasMore,
        'nextCursor': value.nextCursor,
    };
}

