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
import type { Change } from './Change';
import {
    ChangeFromJSON,
    ChangeFromJSONTyped,
    ChangeToJSON,
} from './Change';
import type { Show } from './Show';
import {
    ShowFromJSON,
    ShowFromJSONTyped,
    ShowToJSON,
} from './Show';

/**
 * 
 * @export
 * @interface ChangeSet
 */
export interface ChangeSet {
    /**
     * 
     * @type {Array<Change>}
     * @memberof ChangeSet
     */
    changes: Array<Change>;
    /**
     * 
     * @type {Show}
     * @memberof ChangeSet
     */
    show: Show;
}

/**
 * Check if a given object implements the ChangeSet interface.
 */
export function instanceOfChangeSet(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "changes" in value;
    isInstance = isInstance && "show" in value;

    return isInstance;
}

export function ChangeSetFromJSON(json: any): ChangeSet {
    return ChangeSetFromJSONTyped(json, false);
}

export function ChangeSetFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangeSet {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'changes': ((json['changes'] as Array<any>).map(ChangeFromJSON)),
        'show': ShowFromJSON(json['show']),
    };
}

export function ChangeSetToJSON(value?: ChangeSet | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'changes': ((value.changes as Array<any>).map(ChangeToJSON)),
        'show': ShowToJSON(value.show),
    };
}

