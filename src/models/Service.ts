/* tslint:disable */
/* eslint-disable */
/**
 * Streaming Availability API
 * Streaming Availability API allows getting streaming availability information of movies and series; and querying the list of available shows on streaming services such as Netflix, Disney+, Apple TV, Max and Hulu across 59 countries!
 *
 * The version of the OpenAPI document: 3.4.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Addon } from './Addon';
import {
    AddonFromJSON,
    AddonFromJSONTyped,
    AddonToJSON,
} from './Addon';
import type { ImageSet } from './ImageSet';
import {
    ImageSetFromJSON,
    ImageSetFromJSONTyped,
    ImageSetToJSON,
} from './ImageSet';
import type { SupportedStreamingTypes } from './SupportedStreamingTypes';
import {
    SupportedStreamingTypesFromJSON,
    SupportedStreamingTypesFromJSONTyped,
    SupportedStreamingTypesToJSON,
} from './SupportedStreamingTypes';

/**
 * Details of a service.
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
     * 
     * @type {ImageSet}
     * @memberof Service
     */
    images: ImageSet;
    /**
     * 
     * @type {SupportedStreamingTypes}
     * @memberof Service
     */
    supportedStreamingTypes: SupportedStreamingTypes;
    /**
     * Map of id to details of the addons supported by the service in this country.
     * @type {{ [key: string]: Addon; }}
     * @memberof Service
     */
    addons: { [key: string]: Addon; };
}

/**
 * Check if a given object implements the Service interface.
 */
export function instanceOfService(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "homePage" in value;
    isInstance = isInstance && "themeColorCode" in value;
    isInstance = isInstance && "images" in value;
    isInstance = isInstance && "supportedStreamingTypes" in value;
    isInstance = isInstance && "addons" in value;

    return isInstance;
}

export function ServiceFromJSON(json: any): Service {
    return ServiceFromJSONTyped(json, false);
}

export function ServiceFromJSONTyped(json: any, ignoreDiscriminator: boolean): Service {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'homePage': json['homePage'],
        'themeColorCode': json['themeColorCode'],
        'images': ImageSetFromJSON(json['images']),
        'supportedStreamingTypes': SupportedStreamingTypesFromJSON(json['supportedStreamingTypes']),
        'addons': (mapValues(json['addons'], AddonFromJSON)),
    };
}

export function ServiceToJSON(value?: Service | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'homePage': value.homePage,
        'themeColorCode': value.themeColorCode,
        'images': ImageSetToJSON(value.images),
        'supportedStreamingTypes': SupportedStreamingTypesToJSON(value.supportedStreamingTypes),
        'addons': (mapValues(value.addons, AddonToJSON)),
    };
}

