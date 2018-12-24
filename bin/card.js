#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our colors from kleur.
const { white, cyan, bold } = require('kleur')

// Actual strings we're going to output
const heading = white().bold('Paul Schaefer') + ' ' + cyan('pschfr') + '\n\n'
const working = white().bold('Work:') + '    ' + white('Front and Back-end Developer') + '\n'
const twitter = white().bold('Twitter:') + ' ' + cyan('https://twitter.com/pschfr') + '\n'
const github  = white().bold('GitHub:') + '  ' + cyan('https://github.com/pschfr') + '\n'
const website = white().bold('Web:') + '     ' + cyan('https://paulmakesthe.net/') + '\n\n'
const card    = white().bold('Card:') + '    ' + white('npx pschfr')

// Output it all!
console.log('\n' + heading + working + twitter + github + website + card + '\n')
