#!/usr/bin/env coffee

fs = require("fs")
iniparser = require("iniparser")
prompt = require("prompt")
prompt.message = ""
prompt.delimiter = ""
prompt.start()

# Infer from a package.json
try
  npm = require('./package.json')
catch
  npm = {}

# Infer from .git/config
try
  git = iniparser.parseString(fs.readFileSync('./.git/config').toString())
  git.url = git['remote "origin"'].url if git['remote "origin"']
catch
  git = {}

schema = properties:
  name:
    description: "Give your thing a name."
    default: process.cwd().split("/").pop() # directory name
    required: true
  tagline:
    description: "What is it?"
    default: npm.description
  url:
    description: "Where is it?"
    default: npm.homepage or git.url
  logo:
    description: "Where's the logo?"
  color:
    description: "What color is it?"

prompt.get schema, (err, thing) ->
  thing = JSON.stringify(thing, undefined, 2)
  fs.writeFileSync('./thing.json', thing)
  console.log ""
  console.log thing
  console.log ""
  console.log "Created thing.json"
