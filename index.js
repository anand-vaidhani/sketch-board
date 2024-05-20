import { createStickyNotesPopup, createStickyNotesImage } from "./components/stickyNotes.js";
import { initiateColors, initiateDraw } from "./components/drawing.js"

const pencilButton = document.getElementById('pencil-button');
const eraserButton = document.getElementById('eraser-button');

const imageUploadButton = document.getElementById('image-upload-button');
const imageUploadInput = document.getElementById('image-upload-input');

const notesButton = document.getElementById('notes-button');
const undoButton = document.getElementById('undo-button');
const redoButton = document.getElementById('redo-button');
const downloadButton = document.getElementById('download-button');

let skickyNotes = [];

initiateColors();
pencilButton.addEventListener('click', initiateDraw);


notesButton.addEventListener('click', createStickyNotesPopup);
imageUploadButton.addEventListener('click', function(e) {
    imageUploadInput.click();
})
imageUploadInput.addEventListener('change', createStickyNotesImage);