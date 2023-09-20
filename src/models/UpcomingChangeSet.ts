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
 * @interface UpcomingChangeSet
 */
export interface UpcomingChangeSet {
    /**
     * 
     * @type {Array<Change>}
     * @memberof UpcomingChangeSet
     */
    upcomingChanges: Array<Change>;
    /**
     * 
     * @type {Show}
     * @memberof UpcomingChangeSet
     */
    show: Show;
}

/**
 * Check if a given object implements the UpcomingChangeSet interface.
 */
export function instanceOfUpcomingChangeSet(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "upcomingChanges" in value;
    isInstance = isInstance && "show" in value;

    return isInstance;
}

export function UpcomingChangeSetFromJSON(json: any): UpcomingChangeSet {
    return UpcomingChangeSetFromJSONTyped(json, false);
}

export function UpcomingChangeSetFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpcomingChangeSet {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'upcomingChanges': ((json['upcomingChanges'] as Array<any>).map(ChangeFromJSON)),
        'show': ShowFromJSON(json['show']),
    };
}

export function UpcomingChangeSetToJSON(value?: UpcomingChangeSet | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'upcomingChanges': ((value.upcomingChanges as Array<any>).map(ChangeToJSON)),
        'show': ShowToJSON(value.show),
    };
}

