var fs = require('fs')
var path = require('path')

function main(dir) {
    fs.readdirSync(dir).forEach(function(file) {
      if (file.match(/(.json)/) != null && !file.match(/(config)/) ) {
        // is a json file and not config.json?
        module.exports[path.basename(file, '.json')] = require(path.join(dir, file))
      } else if ( !file.match(/\.([a-zA-Z]+)/) ) {
        // does not have a file extension
        main(path.join(dir, file))
      }
  })
}

main(__dirname)
