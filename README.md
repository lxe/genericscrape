# Generic Scraper Example

Scarpe links from an arbitrary webpage

### Further Reading

 - https://github.com/cheeriojs/cheerio
 - https://lodash.com/
 - https://github.com/request/request

### Setup

```
npm install
```

### Usage

```
./genericscrape.js URI
```

Where URI is the full URI of the webpage. By default this scrapes https://en.wikipedia.org/wiki/List_of_fictional_raccoons.

The programs outputs to stdout a JSON array of objects, with the following properties:

 - 'text' - the text of the link
 - 'href' - the href of the link

### License

Public Domain
