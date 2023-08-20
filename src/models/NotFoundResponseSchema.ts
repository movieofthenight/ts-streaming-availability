/* tslint:disable */
/* eslint-disable */
/**
 * Streaming Availability API
 * Streaming Availability API allows getting streaming availability information of movies and series; and querying the list of available shows on streaming services such as Netflix, Disney+, Apple TV, Max and Hulu across 58 countries!
 *
 * The version of the OpenAPI document: 3.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface NotFoundResponseSchema
 */
export interface NotFoundResponseSchema {
    /**
     * 
     * @type {string}
     * @memberof NotFoundResponseSchema
     */
    message: string;
}

/**
 * Check if a given object implements the NotFoundResponseSchema interface.
 */
export function instanceOfNotFoundResponseSchema(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "message" in value;

    return isInstance;
}

export function NotFoundResponseSchemaFromJSON(json: any): NotFoundResponseSchema {
    return NotFoundResponseSchemaFromJSONTyped(json, false);
}

export function NotFoundResponseSchemaFromJSONTyped(json: any, ignoreDiscriminator: boolean): NotFoundResponseSchema {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': json['message'],
    };
}

export function NotFoundResponseSchemaToJSON(value?: NotFoundResponseSchema | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'message': value.message,
    };
}

