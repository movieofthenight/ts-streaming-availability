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
import type { StreamingType } from './StreamingType';
import {
    StreamingTypeFromJSON,
    StreamingTypeFromJSONTyped,
    StreamingTypeToJSON,
} from './StreamingType';

/**
 * A past or upcoming change in a catalog.
 * @export
 * @interface Change
 */
export interface Change {
    /**
     * Season number. Omitted if "target_type" is not "season"or "episode".
     * @type {number}
     * @memberof Change
     */
    season?: number;
    /**
     * Episode number. Omitted if "target_type" is not "episode".
     * @type {number}
     * @memberof Change
     */
    episode?: number;
    /**
     * Service id of the change.
     * @type {string}
     * @memberof Change
     */
    service: string;
    /**
     * 
     * @type {StreamingType}
     * @memberof Change
     */
    streamingType: StreamingType;
    /**
     * Addon id, if the "streamingType" is "addon". Otherwise omitted.
     * @type {string}
     * @memberof Change
     */
    addon?: string;
    /**
     * [Unix Time Stamp](https://www.unixtimestamp.com/) of the change.
     * @type {number}
     * @memberof Change
     */
    time: number;
}

/**
 * Check if a given object implements the Change interface.
 */
export function instanceOfChange(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "service" in value;
    isInstance = isInstance && "streamingType" in value;
    isInstance = isInstance && "time" in value;

    return isInstance;
}

export function ChangeFromJSON(json: any): Change {
    return ChangeFromJSONTyped(json, false);
}

export function ChangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): Change {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'season': !exists(json, 'season') ? undefined : json['season'],
        'episode': !exists(json, 'episode') ? undefined : json['episode'],
        'service': json['service'],
        'streamingType': StreamingTypeFromJSON(json['streamingType']),
        'addon': !exists(json, 'addon') ? undefined : json['addon'],
        'time': json['time'],
    };
}

export function ChangeToJSON(value?: Change | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'season': value.season,
        'episode': value.episode,
        'service': value.service,
        'streamingType': StreamingTypeToJSON(value.streamingType),
        'addon': value.addon,
        'time': value.time,
    };
}

