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
import type { UpcomingChangeSet } from './UpcomingChangeSet';
import {
    UpcomingChangeSetFromJSON,
    UpcomingChangeSetFromJSONTyped,
    UpcomingChangeSetToJSON,
} from './UpcomingChangeSet';

/**
 * 
 * @export
 * @interface UpcomingChangesResponseSchema
 */
export interface UpcomingChangesResponseSchema {
    /**
     * Array of the results matched with the query.
     * @type {Array<UpcomingChangeSet>}
     * @memberof UpcomingChangesResponseSchema
     */
    result: Array<UpcomingChangeSet>;
    /**
     * Whether there are more results to be loaded.
     * @type {boolean}
     * @memberof UpcomingChangesResponseSchema
     */
    hasMore: boolean;
    /**
     * Cursor value to pass to get next set of the results. An empty string if "hasMore" is "false".
     * @type {string}
     * @memberof UpcomingChangesResponseSchema
     */
    nextCursor: string;
}

/**
 * Check if a given object implements the UpcomingChangesResponseSchema interface.
 */
export function instanceOfUpcomingChangesResponseSchema(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "result" in value;
    isInstance = isInstance && "hasMore" in value;
    isInstance = isInstance && "nextCursor" in value;

    return isInstance;
}

export function UpcomingChangesResponseSchemaFromJSON(json: any): UpcomingChangesResponseSchema {
    return UpcomingChangesResponseSchemaFromJSONTyped(json, false);
}

export function UpcomingChangesResponseSchemaFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpcomingChangesResponseSchema {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'result': ((json['result'] as Array<any>).map(UpcomingChangeSetFromJSON)),
        'hasMore': json['hasMore'],
        'nextCursor': json['nextCursor'],
    };
}

export function UpcomingChangesResponseSchemaToJSON(value?: UpcomingChangesResponseSchema | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'result': ((value.result as Array<any>).map(UpcomingChangeSetToJSON)),
        'hasMore': value.hasMore,
        'nextCursor': value.nextCursor,
    };
}

