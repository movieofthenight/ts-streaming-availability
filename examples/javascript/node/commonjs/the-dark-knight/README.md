# The Dark Knight

This example shows how to get the streaming availability data of
[The Dark Knight](https://www.imdb.com/title/tt0468569/) via its IMDb id,
using Node with [CommonJS](https://nodejs.org/api/modules.html).

## How to Run

Update `RAPID_API_KEY` constant with your own API key. Then:

```shell
 npm install
 npm start 
```

## Sample Output

As of July 31, 2023:

```
The Dark Knight is available on hbo via subscription at link https://play.max.com/movie/52217243-a137-45d6-9c6a-0dfab4633034 with UHD quality
The Dark Knight is available on prime via rent at link https://www.amazon.com/gp/video/detail/B001I189MQ/ref=atv_dp?language=en with HD quality for 3.79 USD
The Dark Knight is available on prime via rent at link https://www.amazon.com/gp/video/detail/B001I189MQ/ref=atv_dp?language=en with SD quality for 3.79 USD
The Dark Knight is available on prime via buy at link https://www.amazon.com/gp/video/detail/B001I189MQ/ref=atv_dp?language=en with SD quality for 7.99 USD
The Dark Knight is available on prime via buy at link https://www.amazon.com/gp/video/detail/B001I189MQ/ref=atv_dp?language=en with HD quality for 7.99 USD
```