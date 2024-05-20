import { stickyNotesPos } from "../constants.js";

function initiateDrag(e) {
    e.preventDefault();
    e.stopPropagation();
    const header = e.currentTarget;
    const notes = header.parentNode;
    // get the pos of mouse pointer w.r.t element
    let shiftX = e.clientX - (notes.offsetLeft);
    let shiftY = e.clientY - (notes.offsetTop);
    function drag(e) {
        const notes = e.currentTarget;
        notes.style.left = (e.clientX - shiftX) + 'px';
        notes.style.top = (e.clientY - shiftY) + 'px';
    }
    notes.addEventListener('mousemove', drag);
    notes.addEventListener('mouseup', function (e) {
        notes.removeEventListener('mousemove', drag);
    })
}

function toggleContent(e, content = null) {
    const button = e.currentTarget;
    const icon = button.childNodes[1];
    if (content.classList.contains('hide')) {
        content.classList.remove('hide')
        icon.classList.replace('fa-up-right-and-down-left-from-center', 'fa-down-left-and-up-right-to-center');
    } else {
        content.classList.add('hide')
        icon.classList.replace('fa-down-left-and-up-right-to-center', 'fa-up-right-and-down-left-from-center');
    }
}

export function createStickyNotesPopup(e) {
    const template = document.getElementById('stickyNotesTemplate').firstElementChild;
    let stickyNote = template.cloneNode(true);
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
    closeButton.addEventListener("click", function (e) {
        stickyNote.remove();
    })
    expandButton.addEventListener("click", function (e) {
        toggleContent(e, content);
    });
    document.body.appendChild(stickyNote);
}

export function createStickyNotesImage(e) {
    const file = e.target.files[0];
    const template = document.getElementById('stickyNotesTemplate').firstElementChild;
    let stickyNote = template.cloneNode(true);
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
    while (content.firstChild) {
        content.firstChild.remove();
    }
    const img = document.createElement('img')
    img.src = URL.createObjectURL(file);
    img.onload = function() {
        URL.revokeObjectURL(file);
        e.target.files = []
    }
    content.appendChild(img);
    header.addEventListener("mousedown", initiateDrag);
    const controls = header.childNodes[1];
    const expandButton = controls.childNodes[1];
    const closeButton = controls.childNodes[3];
    closeButton.addEventListener("click", function (e) {
        stickyNote.remove();
    })
    expandButton.addEventListener("click", function (e) {
        toggleContent(e, content);
    });
    document.body.appendChild(stickyNote);
    return false;
}