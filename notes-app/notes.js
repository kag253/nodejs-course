const chalk = require('chalk');
const fs = require('fs');

function getNotes() {
    return 'Your notes...';
};

function addNote(title, body) {
    const notes = loadNotes();

    // Checking for duplicate notes
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title;
    });

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added!'));
    } else {
        console.log(chalk.red.inverse('Note title taken!'));
    }
};

function removeNote(title) {
    const notes = loadNotes();

    // Removing the note with the specified title
    const newNotes = notes.filter(function (note) {
        return note.title !== title;
    });

    // We alert if no note was found/removed, otherwise
    // we save the newNotes and alert that the note was removed
    if (notes.length === newNotes.length) {
        console.log(chalk.red.inverse('No note found!'))
    } else {
        saveNotes(newNotes);
        console.log(chalk.green.inverse('Note removed!'));
    }
}

function saveNotes(notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

function loadNotes() {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        return JSON.parse(dataBuffer);
    } catch (e) {
        return [];
    }
};


module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
};