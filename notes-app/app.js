const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// Goal: Refractor all functions
// 
// 1. If function is a method, use ES6 method definition syntax
// 2. Otherwise, use most concise arrow function possible.
// 3. Test your work!

// Customise yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }, 
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        console.log('Adding a new note!')
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title', 
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        console.log('Removing note titled:', argv.title)
        notes.removeNote(argv.title)
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler() {
        console.log('Reading a note')
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        console.log('Listing out all notes')
    }
})

yargs.parse()