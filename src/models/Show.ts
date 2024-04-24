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
import type { ShowImageSet } from './ShowImageSet';
import {
    ShowImageSetFromJSON,
    ShowImageSetFromJSONTyped,
    ShowImageSetToJSON,
} from './ShowImageSet';
import type { ShowType } from './ShowType';
import {
    ShowTypeFromJSON,
    ShowTypeFromJSONTyped,
    ShowTypeToJSON,
} from './ShowType';
import type { StreamingOption } from './StreamingOption';
import {
    StreamingOptionFromJSON,
    StreamingOptionFromJSONTyped,
    StreamingOptionToJSON,
} from './StreamingOption';

/**
 * A show object represents a movie or a series. Type of the show is determined by the showType property,
 * which is either movie or series. Based on this type, some properties are omitted,
 * for example a movie does not have seasonCount and episodeCount properties.
 * 
 * Show object contains the details such as the title, overview, genres, cast, rating and images.
 * You can find the streaming availability information under streamingOptions property.
 * Each streaming option contains the service info, deep link, video quality, available audios and subtitles
 * and more. It also includes the price if the show is available to buy or rent;
 * and addon info if the show is available via an addon (such as Apple TV Channels, Prime Video Channels etc.).
 * 
 * You can also find the seasons of the series under the seasons property,
 * and the episodes of a season under the episodes property of the season object.
 * Via the streamingOptions property of seasons and episodes,
 * you can get the individual streaming options of them.
 * These streaming options include the same set of properties as the show streaming options,
 * so you can use them to get deep links to episodes and seasons, and to see available audios and subtitles.
 * 
 * Note that seasons and episodes are not included in the search results
 * unless you set the series_granularity parameter to seasons or episodes.
 * For more info, check out the series_granularity parameter of the search endpoints.
 * 
 * There are multiple ways to retrieve shows.
 * You can retrieve a show by its IMDb or TMDB id via [/shows/{id}](#get-a-show) endpoint;
 * you can search shows by their title via [/shows/search/title](#search-shows-by-title) endpoint;
 * and you can search shows by filters such as genres, release year, rating etc.
 * via [/shows/search/filters](#search-shows-by-filters) endpoint. This endpoint also supports pagination
 * and offers advanced ordering options such as ordering by popularity, rating, release year etc.
 * 
 * @export
 * @interface Show
 */
export interface Show {
    /**
     * Type of the item. Always show.
     * @type {string}
     * @memberof Show
     */
    itemType: ShowItemTypeEnum;
    /**
     * Type of the show. Based on the type, some properties might be omitted.
     * @type {ShowType}
     * @memberof Show
     */
    showType: ShowType;
    /**
     * Id of the show.
     * @type {string}
     * @memberof Show
     */
    id: string;
    /**
     * [IMDb](https://www.imdb.com/) id of the show.
     * @type {string}
     * @memberof Show
     */
    imdbId: string;
    /**
     * [TMDD](https://www.themoviedb.org/) id of the show.
     * @type {string}
     * @memberof Show
     */
    tmdbId: string;
    /**
     * Title of the show.
     * @type {string}
     * @memberof Show
     */
    title: string;
    /**
     * A brief overview of the overall plot of the show.
     * @type {string}
     * @memberof Show
     */
    overview: string;
    /**
     * The year that the movie was released.
     * @type {number}
     * @memberof Show
     */
    releaseYear?: number;
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
     * Original title of the show.
     * @type {string}
     * @memberof Show
     */
    originalTitle: string;
    /**
     * Array of the genres of the show.
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
     * Rating of the show. This is calculated by taking the average of ratings found online from multiple sources.
     * @type {number}
     * @memberof Show
     */
    rating: number;
    /**
     * Number of seasons that are either aired or announced for a series.
     * @type {number}
     * @memberof Show
     */
    seasonCount?: number;
    /**
     * Number of episodes that are either aired or announced for a series.
     * @type {number}
     * @memberof Show
     */
    episodeCount?: number;
    /**
     * Image set of the show.
     * @type {ShowImageSet}
     * @memberof Show
     */
    imageSet: ShowImageSet;
    /**
     * Map of the streaming options by the country code.
     * @type {{ [key: string]: Array<StreamingOption>; }}
     * @memberof Show
     */
    streamingOptions: { [key: string]: Array<StreamingOption>; };
    /**
     * Array of the seasons belong to the series.
     * @type {Array<Season>}
     * @memberof Show
     */
    seasons?: Array<Season>;
}


/**
 * @export
 */
export const ShowItemTypeEnum = {
    Show: 'show'
} as const;
export type ShowItemTypeEnum = typeof ShowItemTypeEnum[keyof typeof ShowItemTypeEnum];


/**
 * Check if a given object implements the Show interface.
 */
export function instanceOfShow(value: object): boolean {
    if (!('itemType' in value)) return false;
    if (!('showType' in value)) return false;
    if (!('id' in value)) return false;
    if (!('imdbId' in value)) return false;
    if (!('tmdbId' in value)) return false;
    if (!('title' in value)) return false;
    if (!('overview' in value)) return false;
    if (!('originalTitle' in value)) return false;
    if (!('genres' in value)) return false;
    if (!('cast' in value)) return false;
    if (!('rating' in value)) return false;
    if (!('imageSet' in value)) return false;
    if (!('streamingOptions' in value)) return false;
    return true;
}

export function ShowFromJSON(json: any): Show {
    return ShowFromJSONTyped(json, false);
}

export function ShowFromJSONTyped(json: any, ignoreDiscriminator: boolean): Show {
    if (json == null) {
        return json;
    }
    return {
        
        'itemType': json['itemType'],
        'showType': ShowTypeFromJSON(json['showType']),
        'id': json['id'],
        'imdbId': json['imdbId'],
        'tmdbId': json['tmdbId'],
        'title': json['title'],
        'overview': json['overview'],
        'releaseYear': json['releaseYear'] == null ? undefined : json['releaseYear'],
        'firstAirYear': json['firstAirYear'] == null ? undefined : json['firstAirYear'],
        'lastAirYear': json['lastAirYear'] == null ? undefined : json['lastAirYear'],
        'originalTitle': json['originalTitle'],
        'genres': ((json['genres'] as Array<any>).map(GenreFromJSON)),
        'directors': json['directors'] == null ? undefined : json['directors'],
        'creators': json['creators'] == null ? undefined : json['creators'],
        'cast': json['cast'],
        'rating': json['rating'],
        'seasonCount': json['seasonCount'] == null ? undefined : json['seasonCount'],
        'episodeCount': json['episodeCount'] == null ? undefined : json['episodeCount'],
        'imageSet': ShowImageSetFromJSON(json['imageSet']),
        'streamingOptions': json['streamingOptions'],
        'seasons': json['seasons'] == null ? undefined : ((json['seasons'] as Array<any>).map(SeasonFromJSON)),
    };
}

export function ShowToJSON(value?: Show | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'itemType': value['itemType'],
        'showType': ShowTypeToJSON(value['showType']),
        'id': value['id'],
        'imdbId': value['imdbId'],
        'tmdbId': value['tmdbId'],
        'title': value['title'],
        'overview': value['overview'],
        'releaseYear': value['releaseYear'],
        'firstAirYear': value['firstAirYear'],
        'lastAirYear': value['lastAirYear'],
        'originalTitle': value['originalTitle'],
        'genres': ((value['genres'] as Array<any>).map(GenreToJSON)),
        'directors': value['directors'],
        'creators': value['creators'],
        'cast': value['cast'],
        'rating': value['rating'],
        'seasonCount': value['seasonCount'],
        'episodeCount': value['episodeCount'],
        'imageSet': ShowImageSetToJSON(value['imageSet']),
        'streamingOptions': value['streamingOptions'],
        'seasons': value['seasons'] == null ? undefined : ((value['seasons'] as Array<any>).map(SeasonToJSON)),
    };
}

