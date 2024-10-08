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


/**
 * Type of the streaming option.
 * @export
 */
export const StreamingOptionType = {
    Free: 'free',
    Subscription: 'subscription',
    Buy: 'buy',
    Rent: 'rent',
    Addon: 'addon'
} as const;
export type StreamingOptionType = typeof StreamingOptionType[keyof typeof StreamingOptionType];


export function instanceOfStreamingOptionType(value: any): boolean {
    return Object.values(StreamingOptionType).includes(value);
}

export function StreamingOptionTypeFromJSON(json: any): StreamingOptionType {
    return StreamingOptionTypeFromJSONTyped(json, false);
}

export function StreamingOptionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): StreamingOptionType {
    return json as StreamingOptionType;
}

export function StreamingOptionTypeToJSON(value?: StreamingOptionType | null): any {
    return value as any;
}

