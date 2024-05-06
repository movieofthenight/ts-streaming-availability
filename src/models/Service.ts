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
import type { Addon } from './Addon';
import {
    AddonFromJSON,
    AddonFromJSONTyped,
    AddonToJSON,
} from './Addon';
import type { ServiceImageSet } from './ServiceImageSet';
import {
    ServiceImageSetFromJSON,
    ServiceImageSetFromJSONTyped,
    ServiceImageSetToJSON,
} from './ServiceImageSet';
import type { StreamingOptionTypes } from './StreamingOptionTypes';
import {
    StreamingOptionTypesFromJSON,
    StreamingOptionTypesFromJSONTyped,
    StreamingOptionTypesToJSON,
} from './StreamingOptionTypes';

/**
 * Details of a streaming service localized according to the parent country.
 * @export
 * @interface Service
 */
export interface Service {
    /**
     * Id of the service.
     * @type {string}
     * @memberof Service
     */
    id: string;
    /**
     * Name of the service.
     * @type {string}
     * @memberof Service
     */
    name: string;
    /**
     * Link to the homepage of the service.
     * @type {string}
     * @memberof Service
     */
    homePage: string;
    /**
     * Associated theme color hex code of the service.
     * @type {string}
     * @memberof Service
     */
    themeColorCode: string;
    /**
     * Image set of the service.
     * @type {ServiceImageSet}
     * @memberof Service
     */
    imageSet: ServiceImageSet;
    /**
     * 
     * @type {StreamingOptionTypes}
     * @memberof Service
     */
    streamingOptionTypes: StreamingOptionTypes;
    /**
     * Array of the supported addons in the service.
     * @type {Array<Addon>}
     * @memberof Service
     */
    addons: Array<Addon>;
}

/**
 * Check if a given object implements the Service interface.
 */
export function instanceOfService(value: object): boolean {
    if (!('id' in value)) return false;
    if (!('name' in value)) return false;
    if (!('homePage' in value)) return false;
    if (!('themeColorCode' in value)) return false;
    if (!('imageSet' in value)) return false;
    if (!('streamingOptionTypes' in value)) return false;
    if (!('addons' in value)) return false;
    return true;
}

export function ServiceFromJSON(json: any): Service {
    return ServiceFromJSONTyped(json, false);
}

export function ServiceFromJSONTyped(json: any, ignoreDiscriminator: boolean): Service {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'homePage': json['homePage'],
        'themeColorCode': json['themeColorCode'],
        'imageSet': ServiceImageSetFromJSON(json['imageSet']),
        'streamingOptionTypes': StreamingOptionTypesFromJSON(json['streamingOptionTypes']),
        'addons': ((json['addons'] as Array<any>).map(AddonFromJSON)),
    };
}

export function ServiceToJSON(value?: Service | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'name': value['name'],
        'homePage': value['homePage'],
        'themeColorCode': value['themeColorCode'],
        'imageSet': ServiceImageSetToJSON(value['imageSet']),
        'streamingOptionTypes': StreamingOptionTypesToJSON(value['streamingOptionTypes']),
        'addons': ((value['addons'] as Array<any>).map(AddonToJSON)),
    };
}

