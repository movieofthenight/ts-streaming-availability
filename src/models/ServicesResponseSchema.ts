/* tslint:disable */
/* eslint-disable */
/**
 * Streaming Availability API
 * Streaming Availability API allows getting streaming availability information of movies and series; and querying the list of available shows on streaming services such as Netflix, Disney+, Apple TV, Max and Hulu across 59 countries!
 *
 * The version of the OpenAPI document: 3.3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { DeprecatedServiceInfo } from './DeprecatedServiceInfo';
import {
    DeprecatedServiceInfoFromJSON,
    DeprecatedServiceInfoFromJSONTyped,
    DeprecatedServiceInfoToJSON,
} from './DeprecatedServiceInfo';

/**
 * 
 * @export
 * @interface ServicesResponseSchema
 */
export interface ServicesResponseSchema {
    /**
     * Map of service id to service details.
     * @type {{ [key: string]: DeprecatedServiceInfo; }}
     * @memberof ServicesResponseSchema
     */
    result: { [key: string]: DeprecatedServiceInfo; };
}

/**
 * Check if a given object implements the ServicesResponseSchema interface.
 */
export function instanceOfServicesResponseSchema(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "result" in value;

    return isInstance;
}

export function ServicesResponseSchemaFromJSON(json: any): ServicesResponseSchema {
    return ServicesResponseSchemaFromJSONTyped(json, false);
}

export function ServicesResponseSchemaFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServicesResponseSchema {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'result': (mapValues(json['result'], DeprecatedServiceInfoFromJSON)),
    };
}

export function ServicesResponseSchemaToJSON(value?: ServicesResponseSchema | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'result': (mapValues(value.result, DeprecatedServiceInfoToJSON)),
    };
}

