var Metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var layouts = require('metalsmith-layouts');
var permalinks = require('metalsmith-permalinks');
var inPlace = require('metalsmith-in-place');

Metalsmith(__dirname)
    .metadata({
        site: {
            title: "BlyncSync Technology",
            description: "It's about saying »Hello« to the World.",
            url: "http://patrickr.xyz/bst-metalsmith-demo"
        }
    })
    .source('./src')
    .destination('./build')
    .clean(false)
    .use(markdown())
    .use(permalinks())
    .use(layouts({
        engine: 'handlebars'
    }))
    .use(inPlace({
        engine: 'handlebars',
    }))
    .build(function(err, files) {
        if (err) {
            throw err;
        }
    });
