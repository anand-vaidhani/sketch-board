import { stickyNotesPos } from "../constants.js";

function initiateDrag(e) {
    const header = e.currentTarget;
    const notes = header.parentNode;
    // get the pos of mouse pointer w.r.t element
    let shiftX = e.clientX - (notes.offsetLeft);
    let shiftY = e.clientY- (notes.offsetTop);
    e.preventDefault();
    function drag(e) {
        const notes = e.currentTarget;
        notes.style.left = (e.clientX - shiftX ) + 'px';
        notes.style.top = (e.clientY - shiftY) + 'px';
    }
    notes.addEventListener('mousemove', drag);
    notes.addEventListener('mouseup', function(e) {
        console.log("removing ")
        notes.removeEventListener('mousemove', drag);
    })
}

export function createStickyNotesPopup(e) {
    const template = document.getElementById('stickyNotesTemplate').firstElementChild;
    let stickyNote = template.cloneNode(true);
    // remove any extra text nodes
    for (let index = 0; index < stickyNote.childNodes.length; index++) {
        if (stickyNote.childNodes[index].nodeType === Node.TEXT_NODE) {
            stickyNote.childNodes[index].remove();
        }
    }
    const { x, y } = stickyNotesPos;
    stickyNote.style.left = (x + 10) + 'px';
    stickyNote.style.top = (y + 10) + 'px';
    const header = stickyNote.childNodes[0];
    header.addEventListener("mousedown", initiateDrag);

    const controls = header.childNodes[1];
    const closeButton = controls.childNodes[3];
    closeButton.addEventListener("click", function(e) {
        stickyNote.remove();
    })
    


    document.body.appendChild(stickyNote);
}

