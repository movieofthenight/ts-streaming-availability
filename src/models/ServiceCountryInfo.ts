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
import type { Addon } from './Addon';
import {
    AddonFromJSON,
    AddonFromJSONTyped,
    AddonToJSON,
} from './Addon';
import type { SupportedStreamingTypes } from './SupportedStreamingTypes';
import {
    SupportedStreamingTypesFromJSON,
    SupportedStreamingTypesFromJSONTyped,
    SupportedStreamingTypesToJSON,
} from './SupportedStreamingTypes';

/**
 * Details of a service in a country.
 * @export
 * @interface ServiceCountryInfo
 */
export interface ServiceCountryInfo {
    /**
     * 
     * @type {SupportedStreamingTypes}
     * @memberof ServiceCountryInfo
     */
    supportedStreamingTypes: SupportedStreamingTypes;
    /**
     * Map of id to details of the addons supported by the service in this country.
     * @type {{ [key: string]: Addon; }}
     * @memberof ServiceCountryInfo
     */
    addons: { [key: string]: Addon; };
}

/**
 * Check if a given object implements the ServiceCountryInfo interface.
 */
export function instanceOfServiceCountryInfo(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "supportedStreamingTypes" in value;
    isInstance = isInstance && "addons" in value;

    return isInstance;
}

export function ServiceCountryInfoFromJSON(json: any): ServiceCountryInfo {
    return ServiceCountryInfoFromJSONTyped(json, false);
}

export function ServiceCountryInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServiceCountryInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'supportedStreamingTypes': SupportedStreamingTypesFromJSON(json['supportedStreamingTypes']),
        'addons': (mapValues(json['addons'], AddonFromJSON)),
    };
}

export function ServiceCountryInfoToJSON(value?: ServiceCountryInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'supportedStreamingTypes': SupportedStreamingTypesToJSON(value.supportedStreamingTypes),
        'addons': (mapValues(value.addons, AddonToJSON)),
    };
}

