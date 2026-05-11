import { createNote, createNoteHandler } from "./js/templates/createNote.js";
import { getLocalStorageData } from "./js/utils/localStorage.js";


const addNoteButton = document.querySelector(".add-note");

//----------> fetch all the notes that exist in the local storage
export let {notes}=getLocalStorageData()

export const setNotes=(updatedNote)=>{
    notes=updatedNote;
    return notes;
}

//-----------> when browser is refreshed, create notes 
createNote(notes,{howToAddChild:"append"})

addNoteButton.addEventListener("click", createNoteHandler);