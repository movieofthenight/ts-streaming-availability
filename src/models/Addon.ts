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
import type { ServiceImageSet } from './ServiceImageSet';
import {
    ServiceImageSetFromJSON,
    ServiceImageSetFromJSONTyped,
    ServiceImageSetToJSON,
} from './ServiceImageSet';

/**
 * Details of an addon.
 * @export
 * @interface Addon
 */
export interface Addon {
    /**
     * Id of the addon.
     * @type {string}
     * @memberof Addon
     */
    id: string;
    /**
     * Name of the addon.
     * @type {string}
     * @memberof Addon
     */
    name: string;
    /**
     * Link to the homepage of the addon.
     * @type {string}
     * @memberof Addon
     */
    homePage: string;
    /**
     * Associated theme color hex code of the addon.
     * @type {string}
     * @memberof Addon
     */
    themeColorCode: string;
    /**
     * Image set of the addon.
     * @type {ServiceImageSet}
     * @memberof Addon
     */
    imageSet: ServiceImageSet;
}

/**
 * Check if a given object implements the Addon interface.
 */
export function instanceOfAddon(value: object): boolean {
    if (!('id' in value)) return false;
    if (!('name' in value)) return false;
    if (!('homePage' in value)) return false;
    if (!('themeColorCode' in value)) return false;
    if (!('imageSet' in value)) return false;
    return true;
}

export function AddonFromJSON(json: any): Addon {
    return AddonFromJSONTyped(json, false);
}

export function AddonFromJSONTyped(json: any, ignoreDiscriminator: boolean): Addon {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'homePage': json['homePage'],
        'themeColorCode': json['themeColorCode'],
        'imageSet': ServiceImageSetFromJSON(json['imageSet']),
    };
}

export function AddonToJSON(value?: Addon | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'name': value['name'],
        'homePage': value['homePage'],
        'themeColorCode': value['themeColorCode'],
        'imageSet': ServiceImageSetToJSON(value['imageSet']),
    };
}

