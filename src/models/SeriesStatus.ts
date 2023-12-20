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
/**
 * The current status of a series.
 * @export
 * @interface SeriesStatus
 */
export interface SeriesStatus {
    /**
     * Integer code of the status. 1: "Returning Series", 2: "Planned", 3: "In Production", 4: "Ended", 5: "Cancelled", 6: "Pilot",
     * @type {number}
     * @memberof SeriesStatus
     */
    statusCode: number;
    /**
     * Textual representation of the status.
     * @type {string}
     * @memberof SeriesStatus
     */
    statusText: SeriesStatusStatusTextEnum;
}


/**
 * @export
 */
export const SeriesStatusStatusTextEnum = {
    ReturningSeries: 'Returning Series',
    Planned: 'Planned',
    InProduction: 'In Production',
    Ended: 'Ended',
    Cancelled: 'Cancelled',
    Pilot: 'Pilot'
} as const;
export type SeriesStatusStatusTextEnum = typeof SeriesStatusStatusTextEnum[keyof typeof SeriesStatusStatusTextEnum];


/**
 * Check if a given object implements the SeriesStatus interface.
 */
export function instanceOfSeriesStatus(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "statusCode" in value;
    isInstance = isInstance && "statusText" in value;

    return isInstance;
}

export function SeriesStatusFromJSON(json: any): SeriesStatus {
    return SeriesStatusFromJSONTyped(json, false);
}

export function SeriesStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeriesStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'statusCode': json['statusCode'],
        'statusText': json['statusText'],
    };
}

export function SeriesStatusToJSON(value?: SeriesStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'statusCode': value.statusCode,
        'statusText': value.statusText,
    };
}

