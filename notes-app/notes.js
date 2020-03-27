const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => (note.title !== title))

    if (notes.length > notesToKeep.length) {
        saveNotes(notesToKeep)
        console.log(chalk.green.inverse('Note removed!'))
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }
}

const listNotes = () => {
    console.log(chalk.yellow.bold.underline("Your notes"))

    const notes = loadNotes()
    if (notes.length > 0) {
        notes.forEach(note => {
            console.log(note.title)
        });
    } else {
        console.log(chalk.red.italic('No notes found!'))
    }
}

const readNote = (title) => {
    const notes = loadNotes()
    const requestedNote = notes.find((note) => note.title === title)

    if (requestedNote) {
        console.log(chalk.yellow.bold(requestedNote.title))
        console.log(requestedNote.body)
    } else {
        console.log(chalk.red('No note found!'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    addNote,
    removeNote,
    listNotes,
    readNote,
}