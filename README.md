# Streaming Availability API TypeScript Client

[![npm](https://img.shields.io/npm/v/streaming-availability?style=flat-square&logo=npm&color=blue)](https://www.npmjs.com/package/streaming-availability)
[![tsdoc](https://img.shields.io/badge/tsdoc-reference-blue?style=flat-square)](https://movieofthenight.github.io/ts-streaming-availability/)

This client can be used in both JavaScript and TypeScript projects;
and both in browser and Node environment.

Since using this client in browser would expose your API key to the public,
it is more secure to use it in server-side applications.
Using it in browser is only recommended for personal projects and
development purposes.

## Streaming Availability API

Streaming Availability API allows getting streaming availability information of movies and series; and querying the list of available shows on streaming services such as Netflix, Disney+, Apple TV, Max and Hulu across 66 countries!

### API Key

To get an instant free subscription to start using the API, you can visit
[our Authentication guide](https://docs.movieofthenight.com/guide/authentication).

You can get started with a free plan without giving any payment information,
and upgrade to paid plans whenever you like.

### Useful Links

- [Official Webpage of the API](https://www.movieofthenight.com/about/api)

- [API Documentation](https://docs.movieofthenight.com/)

- [Contact Form](https://www.movieofthenight.com/contact)

- [Main GitHub Repository of the API](https://github.com/movieofthenight/streaming-availability-api)

### Features

- Query streaming availability info of the movies and series via their TMDb or IMDd ids.
- Search for movies and series via their titles, genres, keywords, release years on
specific streaming services (e.g.: Get all the zombie action movies available
on Netflix and Disney+)
- Order the search results by titles, release year
or popularity over different time periods
(e.g.: get the all-time most popular movies on Netflix US,
get the most popular series in the last 7 days
on Amazon Prime and Disney+ in the United Kingdom)
- Get the list of upcoming & expiring titles
- Get the daily Top 10 lists
- Returned streaming availability info includes:
  - Deep links into the streaming services for
movies, series, seasons and episodes,
  - Available video qualities (eg. SD, HD, UHD),
  - Available subtitles and audios,
  - First detection time of the shows on the streaming services,
  - Expiry date of the shows/seasons/episodes on the streaming services,
  - All the available options to stream a show
(e.g. via subscription, to buy/rent, for free, available via an addons),
  - Price and currency information for buyable/rentable shows
- Channel and addon support (e.g. Apple TV Channels, Hulu Addons, Prime Video Channels)
- Posters, backdrops, cast & director information, genres, rating and many other details of the shows
- Output also includes TMDB and IMDb ids for every show


## Install

### Via NPM

```
npm i streaming-availability
```

> Requires Node version `18.0.0` or higher.

### Via Script Tag from CDN

```html
<script src="https://cdn.jsdelivr.net/gh/movieofthenight/ts-streaming-availability@v4.5.0/bundle.min.js"></script>
```

This script creates a global variable at `window.streamingAvailability`
where you can access to the module.

## Usage

### Node

```ts
import * as streamingAvailability from "streaming-availability";

const API_KEY = "<YOUR_API_KEY>";

const client = new streamingAvailability.Client(new streamingAvailability.Configuration({
	apiKey: API_KEY
}));

// Start using the client
```

### Script Tag

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Example</title>
</head>
<body style="white-space: pre-line">
	<script src="https://cdn.jsdelivr.net/gh/movieofthenight/ts-streaming-availability@v4.5.0/bundle.min.js"></script>
	<script type="module">
		const API_KEY = "<YOUR_API_KEY>";

		const client = new streamingAvailability.Client(new streamingAvailability.Configuration({
			apiKey: API_KEY
		}));

		// Start using the client
	</script>
</body>
</html>
```

## Examples

These examples assume that you are running inside
a module, since it uses
[top level await](https://github.com/tc39/proposal-top-level-await).

In
[examples](https://github.com/movieofthenight/ts-streaming-availability/blob/main/examples)
folder, you can find sample package setups that
you can take as a reference.

### Get The Godfather's Streaming Availability Info

```ts
import * as streamingAvailability from "streaming-availability";

const API_KEY = "<YOUR_API_KEY>";

const client = new streamingAvailability.Client(new streamingAvailability.Configuration({
	apiKey: API_KEY
}));

let show = await client.showsApi.getShow(
	{id: "tt0068646", country: "us"}
);

console.log(show.title);
console.log(show.overview);
show.streamingOptions["us"].forEach((streamingOption) => {
	console.log(streamingOption.link);
});
```

#### Via Script Tag

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>The Godfather</title>
</head>
<body style="white-space: pre-line">
	<script src="https://cdn.jsdelivr.net/gh/movieofthenight/ts-streaming-availability@v4.5.0/bundle.min.js"></script>
	<script type="module">
		const API_KEY = "<YOUR_API_KEY>";

		const client = new streamingAvailability.Client(new streamingAvailability.Configuration({
			apiKey: API_KEY
		}));

		let show = await client.showsApi.getShow(
			{id: "tt0068646", country: "us"}
		);
		document.body.textContent = show.title + "\r\n";
		document.body.textContent += show.overview + "\r\n";
		show.streamingOptions["us"].forEach((streamingOption) => {
			document.body.textContent +=  streamingOption.link + "\r\n";
		});
	</script>
</body>
</html>
```

> Checkout
> [examples](https://github.com/movieofthenight/ts-streaming-availability/blob/main/examples)
> folder for the rest of the examples.

## Auto Pagination

This client supports auto-pagination for the paginated endpoints.

If you'd like to use auto-pagination,
you can call the corresponding auto pagination
versions of the functions.

An example call without auto pagination:

```ts
const searchResult = await client.showsApi.searchShowsByFilters(({
	country: "us",
	catalogs: ["netflix"],
	genres: ["action"],
	showType: streamingAvailability.ShowType.Movie,
	orderBy: "popularity_1year",
}));
```

An example call with auto pagination
that fetches at most 3 pages:

```ts
const shows = client.showsApi.searchShowsByFiltersWithAutoPagination({
	country: "us",
	catalogs: ["netflix"],
	genres: ["action"],
	showType: streamingAvailability.ShowType.Movie,
	orderBy: "popularity_1year",
}, 3)
```

Then you can iterate over the results in the following way:

```ts
for await (const show of shows) {
	// Do something with the show
}
```

## Terms & Conditions and Attribution

While the client libraries have MIT licenses,
the Streaming Availability API itself has further
[Terms & Conditions](https://developers.movieofthenight.com/terms-and-conditions).
Make sure to read it before using the API.

Notably, the API requires an attribution to itself, if the data acquired through
is made public. You can read further about the attribution requirement on the
[Terms & Conditions](https://developers.movieofthenight.com/terms-and-conditions)
page.

## Contact Us

If you have any questions or need further assistance, please don't hesitate to reach us via
[our contact form](https://www.movieofthenight.com/contact).

## FAQ

- **How often the data is updated?**
  - The data is updated daily.

- **I run into an issue. How can I get help?**
  - Send us a message via [our contact form](https://www.movieofthenight.com/contact),
and we will get back to you as soon as possible.

- **API returned me some wrong data. What can I do?**
  - Send us a message with details of your findings.
You can reach ous via [our contact form](https://www.movieofthenight.com/contact).
Once we receive the message we will take a look into the problems and fix the data.

- **I have a request to get a new streaming service supported by the API.**
  - Send us a message via [our contact form](https://www.movieofthenight.com/contact),
  and we will get back to you.

- **I need a client library in another language.**
  - Send us a message via [our contact form](https://www.movieofthenight.com/contact),
  and we will get back to you.

## Client Libraries

[Click here to see the full list of official client libraries](https://docs.movieofthenight.com/guide/client-libraries)

## Services & Countries Supported

We support all the major streaming services across the globe, [click here to see the full list!](https://docs.movieofthenight.com/guide/countries-and-services)

