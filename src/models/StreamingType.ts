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


/**
 * Type of the streaming option.
 * @export
 */
export const StreamingType = {
    Free: 'free',
    Subscription: 'subscription',
    Buy: 'buy',
    Rent: 'rent',
    Addon: 'addon'
} as const;
export type StreamingType = typeof StreamingType[keyof typeof StreamingType];


export function StreamingTypeFromJSON(json: any): StreamingType {
    return StreamingTypeFromJSONTyped(json, false);
}

export function StreamingTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): StreamingType {
    return json as StreamingType;
}

export function StreamingTypeToJSON(value?: StreamingType | null): any {
    return value as any;
}

