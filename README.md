# [Vue.js](http://vuejs.org/) + [URI.js](http://medialize.github.io/URI.js/uri-template.html)

Eventually a general purpose Vue.js component for creating and managing URI's
with or without URI Templates.

Right now, it's mostly a URI Templates
[RFC 6570](http://tools.ietf.org/html/rfc6570) playground.

## Development w/Browserify

This repo inlines the CSS and HTML template of each component using the `partialify` transform, and inserts the CSS with the `insert-css` module.

To start watch and auto rebuild with `watchify`, just run `npm run dev`.

## Testing

`npm run test` will use [mocha](http://visionmedia.github.io/mocha/) to run
the tests.
