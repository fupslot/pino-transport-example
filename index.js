const split = require('split2')
const pump = require('pump')
const through = require('through2')

const myTransport = through.obj(function (chunk, enc, cb) {
  // do the necessary
  // const match = /^([\d]+)\|.+(\{.+\})$/.exec(chunk);
  // if (match) console.log(match && match[1]);

  console.log(chunk);

  cb()
})

pump(process.stdin, split((chunk) => chunk), myTransport)