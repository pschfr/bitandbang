#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our colors from kleur.
const { white, cyan, bold } = require('kleur')

// Text + color definitions
const data = {
  name: white().bold('Paul Schaefer'),
  handle: cyan('pschfr'),
  work: white('Front and Back-end Developer'),
  twitter: cyan('https://twitter.com/pschfr'),
  github: cyan('https://github.com/pschfr'),
  web: cyan('https://paulmakesthe.net/'),
  npx: white('npx pschfr'),
  labelWork: white().bold('Work:'),
  labelTwitter: white().bold('Twitter:'),
  labelGitHub: white().bold('GitHub:'),
  labelWeb: white().bold('Web:'),
  labelCard: white().bold('Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} ${data.handle}`
const working = `${data.labelWork}    ${data.work}`
const twittering = `${data.labelTwitter} ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const webing = `${data.labelWeb}     ${data.web}`
const carding = `${data.labelCard}    ${data.npx}`

// Output it all!
console.log(newline + heading + newline + newline + working + newline + twittering + newline + githubing + newline + webing + newline + newline + carding + newline)
