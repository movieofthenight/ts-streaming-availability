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
 * Type of the change.
 * @export
 */
export const ChangeType = {
    New: 'new',
    Removed: 'removed',
    Updated: 'updated',
    Expiring: 'expiring',
    Upcoming: 'upcoming'
} as const;
export type ChangeType = typeof ChangeType[keyof typeof ChangeType];


export function instanceOfChangeType(value: any): boolean {
    return Object.values(ChangeType).includes(value);
}

export function ChangeTypeFromJSON(json: any): ChangeType {
    return ChangeTypeFromJSONTyped(json, false);
}

export function ChangeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangeType {
    return json as ChangeType;
}

export function ChangeTypeToJSON(value?: ChangeType | null): any {
    return value as any;
}

