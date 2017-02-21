const express = require('express');
const request = require('request-promise');
const cheerio = require('cheerio');
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  console.log(req.query)
  options = {
    uri: `https://github.com/users/${req.query.name}/contributions`,
    qs: {
      to: req.query.to,
      full_graph: 1
    }
  }
  console.log(options.uri)
  request(options)
    .then((htmlString) => {
      $ = cheerio.load(htmlString);
      result = []
      $('rect').each(function (i) {
        elem = $(this)
        result.push({
          date: elem.attr('data-date'),
          count: elem.attr('data-count'),
          fill: elem.attr('fill')
        })
      })
      res.send(result)
    })
    .catch(err => {
      console.log(err)
      res.send('an error has occured')
    })
})

app.listen(3001, () => {
  console.log('listening on 3001')
})
