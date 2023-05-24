// New Note fields
const noteTitle = document.getElementById('noteTitle');
const noteBody = document.getElementById('noteBody');
const newNoteBtn = document.getElementById('newNoteBtn');
const noteList = document.querySelector('.noteContainer');

// Add functionality to new note btn
newNoteBtn.addEventListener('click', (event) => {
  // Prevents refresh of page when btn is clicked
  event.preventDefault();

  // Grab new note field vals
  const title = noteTitle.value;
  const body = noteBody.value;

  // Use an object to hold your new note
  const note = {
    title: title,
    body: body
  };

  // Add note to the DOM
  addNote(note);

  // Reset input field vals
  noteTitle.value = '';
  noteBody.value = '';
});

// Define fxn for adding note to DOM
function addNote(note) {
  // Don't add new note if body is empty
  if (note.body === "") {
    alert("Please enter your note");
    return;
  };
  // Create new element that will hold note
  const singleNote = document.createElement('div')
  singleNote.classList.add('singleNote');
  const singleNoteTitle = document.createElement('h2');
  const singleNoteBody = document.createElement('p');
  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = "Delete Note";
  deleteBtn.classList.add('deleteNote');

  singleNoteTitle.innerText = note.title;
  singleNoteBody.innerText = note.body;

  // Append new element to note list div
  singleNote.append(singleNoteTitle, singleNoteBody, deleteBtn);
  noteList.append(singleNote);
};

// Add fxnality to delete note btn
