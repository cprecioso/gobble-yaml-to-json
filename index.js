var yaml = require("js-yaml") 

function yamlToJSON(source, options) {
  options = options || {}
  options.schema = options.schema || yaml.JSON_SCHEMA

  if (typeof options.schema === typeof function(){}) {
    options.schema = options.schema(yaml)
  }

  return JSON.stringify(yaml.safeLoad(source, options))
}

yamlToJSON.defaults = {
  accept: [".yaml", ".yml"],
  ext: ".json"
}

yamlToJSON.yaml = yaml

module.exports = yamlToJSON
