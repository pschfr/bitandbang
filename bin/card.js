#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pulls in our colors from kleur, and our boxes from boxen
const { blue, bold } = require('kleur')
const boxen = require('boxen')

// Builds the actual strings we're going to output
const heading = bold('Paul Schaefer') + ' ' + blue('pschfr') + '\n\n'
const working = bold('Work:') + '    ' + 'Freelance Web Developer\n'
const twitter = bold('Twitter:') + ' ' + blue('https://twitter.com/pschfr') + '\n'
const github  = bold('GitHub:') + '  ' + blue('https://github.com/pschfr') + '\n'
const website = bold('Website:') + ' ' + blue('https://paulmakesthe.net') + '\n'
const email   = bold('Email:') + '   ' + blue('hello@paulmakesthe.net') + '\n\n'
const card    = bold('Card:') + '    ' + 'npx pschfr'
const output  = heading + working + twitter + github + website + email + card

// Options for boxen
const box_opts = {
	padding: 1,
	margin: 1,
	borderStyle: 'round',
	borderColor: 'gray'
}

// Output it all, now in a box!
console.log(boxen(output, box_opts))
