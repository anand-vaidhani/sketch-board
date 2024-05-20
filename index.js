import { createStickyNotesPopup } from "./components/stickyNotes.js";

const pencilButton = document.getElementById('pencil-button');
const eraserButton = document.getElementById('eraser-button');
const imageUploadButton = document.getElementById('image-upload-button');
const notesButton = document.getElementById('notes-button');
const undoButton = document.getElementById('undo-button');
const redoButton = document.getElementById('redo-button');
const downloadButton = document.getElementById('download-button');

let skickyNotes = [];

notesButton.addEventListener('click', createStickyNotesPopup);
