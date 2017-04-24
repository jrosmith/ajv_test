var Ajv = require('ajv');
var ajv = new Ajv();
require('ajv-keywords')(ajv, ['if'])

var index = require('./schemas/index.js');

// Recursively add all schemas in directory but ignore config.json files
for (var key in index) {
  if (index.hasOwnProperty(key)) {
    ajv.addSchema(index[key], index[key].title)
  }
}

var objToValidate = {
  cmd: "registerAdmin",
  details: {
    // "username":"AdminUserName",
    "secret":"AdminSecret",
    "enrollId":"AdminEnrollID",
    "enrollSecret":"AdminEnrollSecret",
    "registrar": {
      "roles":["role1","role2"]
    }
  }
}

// Replace with adminCommand2 and note that the validation successfully fails
console.log(
  "Object is valid:",
  ajv.validate('adminCommand2', objToValidate)
)
