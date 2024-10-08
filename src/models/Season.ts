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
import type { Episode } from './Episode';
import {
    EpisodeFromJSON,
    EpisodeFromJSONTyped,
    EpisodeToJSON,
} from './Episode';
import type { StreamingOption } from './StreamingOption';
import {
    StreamingOptionFromJSON,
    StreamingOptionFromJSONTyped,
    StreamingOptionToJSON,
} from './StreamingOption';

/**
 * Details of a season.
 * @export
 * @interface Season
 */
export interface Season {
    /**
     * Type of the item. Always season.
     * @type {string}
     * @memberof Season
     */
    itemType: string;
    /**
     * Title of the season.
     * @type {string}
     * @memberof Season
     */
    title: string;
    /**
     * The first year that the season aired.
     * @type {number}
     * @memberof Season
     */
    firstAirYear: number;
    /**
     * The last year that the season aired.
     * @type {number}
     * @memberof Season
     */
    lastAirYear: number;
    /**
     * Map of the streaming options by the country code.
     * @type {{ [key: string]: Array<StreamingOption>; }}
     * @memberof Season
     */
    streamingOptions: { [key: string]: Array<StreamingOption>; };
    /**
     * Array of the episodes belong to the season.
     * @type {Array<Episode>}
     * @memberof Season
     */
    episodes?: Array<Episode>;
}

/**
 * Check if a given object implements the Season interface.
 */
export function instanceOfSeason(value: object): boolean {
    if (!('itemType' in value)) return false;
    if (!('title' in value)) return false;
    if (!('firstAirYear' in value)) return false;
    if (!('lastAirYear' in value)) return false;
    if (!('streamingOptions' in value)) return false;
    return true;
}

export function SeasonFromJSON(json: any): Season {
    return SeasonFromJSONTyped(json, false);
}

export function SeasonFromJSONTyped(json: any, ignoreDiscriminator: boolean): Season {
    if (json == null) {
        return json;
    }
    return {
        
        'itemType': json['itemType'],
        'title': json['title'],
        'firstAirYear': json['firstAirYear'],
        'lastAirYear': json['lastAirYear'],
        'streamingOptions': json['streamingOptions'],
        'episodes': json['episodes'] == null ? undefined : ((json['episodes'] as Array<any>).map(EpisodeFromJSON)),
    };
}

export function SeasonToJSON(value?: Season | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'itemType': value['itemType'],
        'title': value['title'],
        'firstAirYear': value['firstAirYear'],
        'lastAirYear': value['lastAirYear'],
        'streamingOptions': value['streamingOptions'],
        'episodes': value['episodes'] == null ? undefined : ((value['episodes'] as Array<any>).map(EpisodeToJSON)),
    };
}

