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

import { mapValues } from '../runtime';
/**
 * Availability of the streaming option types in the service.
 * @export
 * @interface StreamingOptionTypes
 */
export interface StreamingOptionTypes {
    /**
     * Whether there are shows available via an addon/channel subscription.
     * @type {boolean}
     * @memberof StreamingOptionTypes
     */
    addon: boolean;
    /**
     * Whether there are shows available to buy.
     * @type {boolean}
     * @memberof StreamingOptionTypes
     */
    buy: boolean;
    /**
     * Whether there are shows available for rental.
     * @type {boolean}
     * @memberof StreamingOptionTypes
     */
    rent: boolean;
    /**
     * Whether there are free shows to watch.
     * @type {boolean}
     * @memberof StreamingOptionTypes
     */
    free: boolean;
    /**
     * Whether there are shows available via a paid subscription plan.
     * @type {boolean}
     * @memberof StreamingOptionTypes
     */
    subscription: boolean;
}

/**
 * Check if a given object implements the StreamingOptionTypes interface.
 */
export function instanceOfStreamingOptionTypes(value: object): boolean {
    if (!('addon' in value)) return false;
    if (!('buy' in value)) return false;
    if (!('rent' in value)) return false;
    if (!('free' in value)) return false;
    if (!('subscription' in value)) return false;
    return true;
}

export function StreamingOptionTypesFromJSON(json: any): StreamingOptionTypes {
    return StreamingOptionTypesFromJSONTyped(json, false);
}

export function StreamingOptionTypesFromJSONTyped(json: any, ignoreDiscriminator: boolean): StreamingOptionTypes {
    if (json == null) {
        return json;
    }
    return {
        
        'addon': json['addon'],
        'buy': json['buy'],
        'rent': json['rent'],
        'free': json['free'],
        'subscription': json['subscription'],
    };
}

export function StreamingOptionTypesToJSON(value?: StreamingOptionTypes | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'addon': value['addon'],
        'buy': value['buy'],
        'rent': value['rent'],
        'free': value['free'],
        'subscription': value['subscription'],
    };
}

