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
 * Genres are used to categorize shows.
 * Each genre object contains the id and name of the genre.
 * When fetching genres via [/genres](#get-all-genres) endpoint, you can pass the "output_language" parameter
 * to get the genre names in one of the supported languages.
 * 
 * You can use genre ids to filter shows in the search endpoints.
 * 
 * @export
 * @interface Genre
 */
export interface Genre {
    /**
     * Id of a genre.
     * @type {string}
     * @memberof Genre
     */
    id: string;
    /**
     * Name of the genre
     * @type {string}
     * @memberof Genre
     */
    name: string;
}

/**
 * Check if a given object implements the Genre interface.
 */
export function instanceOfGenre(value: object): boolean {
    if (!('id' in value)) return false;
    if (!('name' in value)) return false;
    return true;
}

export function GenreFromJSON(json: any): Genre {
    return GenreFromJSONTyped(json, false);
}

export function GenreFromJSONTyped(json: any, ignoreDiscriminator: boolean): Genre {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
    };
}

export function GenreToJSON(value?: Genre | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'name': value['name'],
    };
}

