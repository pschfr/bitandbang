#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk')

// Text + chalk definitions
const data = {
  name: chalk.white.bold('Paul Schaefer'),
  handle: chalk.cyan('pschfr'),
  work: chalk.white('Front and Back-end Developer'),
  twitter: chalk.cyan('https://twitter.com/pschfr'),
  github: chalk.cyan('https://github.com/pschfr'),
  web: chalk.cyan('https://paulmakesthe.net/'),
  npx: chalk.white('npx pschfr'),
  labelWork: chalk.white.bold('Work:'),
  labelTwitter: chalk.white.bold('Twitter:'),
  labelGitHub: chalk.white.bold('GitHub:'),
  labelWeb: chalk.white.bold('Web:'),
  labelCard: chalk.white.bold('Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} ${data.handle}`
const working = `${data.labelWork}    ${data.work}`
const twittering = `${data.labelTwitter} ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const webing = `${data.labelWeb}     ${data.web}`
const carding = `${data.labelCard}    ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + newline + newline + working + newline + twittering + newline + githubing + newline + webing + newline + newline + carding + newline

console.log(output)
