# LT Showcase

## Summary

- We show 3 random photos if no search term is provided
- The filtered list of photos is shown when the query matches against photo titles.
- If we encounter an error calling the api, we show an error toast.
- If no photos match the search criteria, we show 'No results found'
- I committed .env files on purpose for each of use for the showcase. Normally they would not be committed.

## Tech stack

- Front end - React typescript app created with create-react-app for speed.
- Back end - Node express app that acts only as a proxy server to get around the CORS issue with the enpodint provided.
- e2e tests: Playwright

# Installation

Depenedencies:

- node 20.18.1
- yarn 1.22.22

In both directories run `yarn install`

- app
- server

## How to run the app

1. Start the proxy server

```
cd ./server
yarn start
```

1. Start the app

```
cd ./app
yarn start
```

## Running tests

I used playwright e2e tests for this showcase.

### How to run tests

You will need three seperate shells to run the tests.

- Start the server

```
cd ./server
yarn start
```

- Start the app

```
cd ./app
yarn start
```

- Run the tests (no ui)

```
cd ./app
yarn test
```

- Run the tests (with ui)

```
cd ./app
yarn test:ui
```
