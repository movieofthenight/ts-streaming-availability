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
 * Image set of a service or an addon.
 * @export
 * @interface ImageSet
 */
export interface ImageSet {
    /**
     * Link to the logo suitable for light themed background.
     * @type {string}
     * @memberof ImageSet
     */
    lightThemeImage: string;
    /**
     * Link to the logo suitable for dark themed background.
     * @type {string}
     * @memberof ImageSet
     */
    darkThemeImage: string;
    /**
     * Link to the logo that is all white.
     * @type {string}
     * @memberof ImageSet
     */
    whiteImage: string;
}

/**
 * Check if a given object implements the ImageSet interface.
 */
export function instanceOfImageSet(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "lightThemeImage" in value;
    isInstance = isInstance && "darkThemeImage" in value;
    isInstance = isInstance && "whiteImage" in value;

    return isInstance;
}

export function ImageSetFromJSON(json: any): ImageSet {
    return ImageSetFromJSONTyped(json, false);
}

export function ImageSetFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImageSet {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lightThemeImage': json['lightThemeImage'],
        'darkThemeImage': json['darkThemeImage'],
        'whiteImage': json['whiteImage'],
    };
}

export function ImageSetToJSON(value?: ImageSet | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'lightThemeImage': value.lightThemeImage,
        'darkThemeImage': value.darkThemeImage,
        'whiteImage': value.whiteImage,
    };
}

