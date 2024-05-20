import { createStickyNotesPopup, createStickyNotesImage } from "./components/stickyNotes.js";
import { exportCanvas, initiateColors, initiateDraw, initiateErase, initiateEraserControl } from "./components/drawing.js"

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
initiateEraserControl();
pencilButton.addEventListener('click', initiateDraw);
eraserButton.addEventListener('click', initiateErase);



notesButton.addEventListener('click', createStickyNotesPopup);
imageUploadButton.addEventListener('click', function(e) {
    imageUploadInput.click();
})
imageUploadInput.addEventListener('change', createStickyNotesImage);

downloadButton.addEventListener('click', exportCanvas)