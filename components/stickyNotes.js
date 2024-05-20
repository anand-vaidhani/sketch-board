import { stickyNotesPos } from "../constants.js";

function initiateDrag(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log('triggered in drag');
    const header = e.currentTarget;
    const notes = header.parentNode;
    // get the pos of mouse pointer w.r.t element
    let shiftX = e.clientX - (notes.offsetLeft);
    let shiftY = e.clientY- (notes.offsetTop);
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

function toggleContent(e) {
    const button = e.currentTarget;
    const notesContent = button.parentNode;
    const header = notesContent.parentNode;
    const notes = notes
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
    const content = stickyNote.childNodes[1];
    header.addEventListener("mousedown", initiateDrag);

    const controls = header.childNodes[1];
    const expandButton = controls.childNodes[1];
    const closeButton = controls.childNodes[3];
    closeButton.addEventListener("click", function(e) {
        stickyNote.remove();
    })


    expandButton.addEventListener("click", function(e) {
        console.log('triggered in expandButton');
        const button = e.currentTarget;
        const icon = button.childNodes[1];
        if (content.classList.contains('hide')) {
            content.classList.remove('hide')
            icon.classList.replace('fa-up-right-and-down-left-from-center', 'fa-down-left-and-up-right-to-center');
        } else {
            content.classList.add('hide')
            icon.classList.replace('fa-down-left-and-up-right-to-center', 'fa-up-right-and-down-left-from-center');
        }
        
    });


    document.body.appendChild(stickyNote);
}

