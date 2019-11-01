const chalk = require('chalk');
const fs = require('fs');

function readNote(title) {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);
    if (note) {
        console.log(chalk.blue.inverse(note.title));
        console.log(note.body);
    } else {
        console.log(chalk.red.inverse('That note does not exist!'));
    }
};

function addNote(title, body) {
    const notes = loadNotes();

    // Checking for duplicate notes
    const duplicateNote = notes.find((note) => note.title === title);

    if (!duplicateNote) {
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

function listNotes() {
    console.log(chalk.inverse('Your notes: '));
    const notes = loadNotes();
    notes.forEach((note) => {
        console.log(note.title);    
    });
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
    readNote: readNote,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
};