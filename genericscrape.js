#!/usr/bin/env node

var _ = require('lodash');
var request = require('request');
var cheerio = require('cheerio');

var uri = process.argv[2] || 'https://en.wikipedia.org/wiki/List_of_fictional_raccoons';

// Get remote page
request.get(uri, function onResponse(error, response, body) {
  if (error) {
    throw error;
  }

  // Parse page body
  var $ = cheerio.load(body);

  // Get all links
  var $links = $('a');

  // Transform links into some JSON data
  var data = $links.map(function eachLink () {
    var $this = $(this);

    var href = $this.attr('href');

    // Remove links that don't point anywhere
    if (!href) return;

    return {
      // Text
      text: $this.html().trim(),

      // Hrefs
      href: $this.attr('href')
        // Replace '//' URIs with proper protocol
        .replace(/^\/\//, response.connection.encrypted
          ? 'https://' : 'http://')
    };
  }).filter(Boolean /* Eliminate undefineds */);

  // Eliminate duplicates
  data = _.uniq(data, function (link) {
    return link.href;
  });

  // Output to stdout
  console.log(data);
});
