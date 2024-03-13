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
import type { Genre } from './Genre';
import {
    GenreFromJSON,
    GenreFromJSONTyped,
    GenreToJSON,
} from './Genre';
import type { Season } from './Season';
import {
    SeasonFromJSON,
    SeasonFromJSONTyped,
    SeasonToJSON,
} from './Season';
import type { SeriesStatus } from './SeriesStatus';
import {
    SeriesStatusFromJSON,
    SeriesStatusFromJSONTyped,
    SeriesStatusToJSON,
} from './SeriesStatus';
import type { StreamingOption } from './StreamingOption';
import {
    StreamingOptionFromJSON,
    StreamingOptionFromJSONTyped,
    StreamingOptionToJSON,
} from './StreamingOption';

/**
 * Details of a show.
 * @export
 * @interface Show
 */
export interface Show {
    /**
     * Type of the show.
     * @type {string}
     * @memberof Show
     */
    type: ShowTypeEnum;
    /**
     * Title of the show.
     * @type {string}
     * @memberof Show
     */
    title: string;
    /**
     * A brief overview of the plot.
     * @type {string}
     * @memberof Show
     */
    overview: string;
    /**
     * The year that the movie was released.
     * @type {number}
     * @memberof Show
     */
    year?: number;
    /**
     * The first year that the series aired.
     * @type {number}
     * @memberof Show
     */
    firstAirYear?: number;
    /**
     * The last year that the series aired.
     * @type {number}
     * @memberof Show
     */
    lastAirYear?: number;
    /**
     * [IMDb](https://www.imdb.com/) ID of the show.
     * @type {string}
     * @memberof Show
     */
    imdbId: string;
    /**
     * [TMDb](https://www.themoviedb.org/) ID of the show.
     * @type {number}
     * @memberof Show
     */
    tmdbId: number;
    /**
     * Original title of the show.
     * @type {string}
     * @memberof Show
     */
    originalTitle: string;
    /**
     * Array of the genres associated with the show.
     * @type {Array<Genre>}
     * @memberof Show
     */
    genres: Array<Genre>;
    /**
     * Array of the directors of the movie.
     * @type {Array<string>}
     * @memberof Show
     */
    directors?: Array<string>;
    /**
     * Array of the creators of the series.
     * @type {Array<string>}
     * @memberof Show
     */
    creators?: Array<string>;
    /**
     * Array of the cast of the show.
     * @type {Array<string>}
     * @memberof Show
     */
    cast: Array<string>;
    /**
     * 
     * @type {SeriesStatus}
     * @memberof Show
     */
    status?: SeriesStatus;
    /**
     * Number of seasons that are either available or announced.
     * @type {number}
     * @memberof Show
     */
    seasonCount?: number;
    /**
     * Number of episodes that are either available or announced.
     * @type {number}
     * @memberof Show
     */
    episodeCount?: number;
    /**
     * Country to streaming availability info mapping of a show.
     * @type {{ [key: string]: Array<StreamingOption>; }}
     * @memberof Show
     */
    streamingInfo: { [key: string]: Array<StreamingOption>; };
    /**
     * 
     * @type {Array<Season>}
     * @memberof Show
     */
    seasons?: Array<Season>;
}


/**
 * @export
 */
export const ShowTypeEnum = {
    Movie: 'movie',
    Series: 'series'
} as const;
export type ShowTypeEnum = typeof ShowTypeEnum[keyof typeof ShowTypeEnum];


/**
 * Check if a given object implements the Show interface.
 */
export function instanceOfShow(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "overview" in value;
    isInstance = isInstance && "imdbId" in value;
    isInstance = isInstance && "tmdbId" in value;
    isInstance = isInstance && "originalTitle" in value;
    isInstance = isInstance && "genres" in value;
    isInstance = isInstance && "cast" in value;
    isInstance = isInstance && "streamingInfo" in value;

    return isInstance;
}

export function ShowFromJSON(json: any): Show {
    return ShowFromJSONTyped(json, false);
}

export function ShowFromJSONTyped(json: any, ignoreDiscriminator: boolean): Show {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'title': json['title'],
        'overview': json['overview'],
        'year': !exists(json, 'year') ? undefined : json['year'],
        'firstAirYear': !exists(json, 'firstAirYear') ? undefined : json['firstAirYear'],
        'lastAirYear': !exists(json, 'lastAirYear') ? undefined : json['lastAirYear'],
        'imdbId': json['imdbId'],
        'tmdbId': json['tmdbId'],
        'originalTitle': json['originalTitle'],
        'genres': ((json['genres'] as Array<any>).map(GenreFromJSON)),
        'directors': !exists(json, 'directors') ? undefined : json['directors'],
        'creators': !exists(json, 'creators') ? undefined : json['creators'],
        'cast': json['cast'],
        'status': !exists(json, 'status') ? undefined : SeriesStatusFromJSON(json['status']),
        'seasonCount': !exists(json, 'seasonCount') ? undefined : json['seasonCount'],
        'episodeCount': !exists(json, 'episodeCount') ? undefined : json['episodeCount'],
        'streamingInfo': json['streamingInfo'],
        'seasons': !exists(json, 'seasons') ? undefined : ((json['seasons'] as Array<any>).map(SeasonFromJSON)),
    };
}

export function ShowToJSON(value?: Show | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'title': value.title,
        'overview': value.overview,
        'year': value.year,
        'firstAirYear': value.firstAirYear,
        'lastAirYear': value.lastAirYear,
        'imdbId': value.imdbId,
        'tmdbId': value.tmdbId,
        'originalTitle': value.originalTitle,
        'genres': ((value.genres as Array<any>).map(GenreToJSON)),
        'directors': value.directors,
        'creators': value.creators,
        'cast': value.cast,
        'status': SeriesStatusToJSON(value.status),
        'seasonCount': value.seasonCount,
        'episodeCount': value.episodeCount,
        'streamingInfo': value.streamingInfo,
        'seasons': value.seasons === undefined ? undefined : ((value.seasons as Array<any>).map(SeasonToJSON)),
    };
}

