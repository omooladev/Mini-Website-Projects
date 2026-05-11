import { notes, setNotes } from "../../index.js";
import { saveToLocalStorage } from "./localStorage.js";

export const DeleteNote = async(event, noteId) => {
  let Notes = document.querySelector(".notes");
  let noteChildren = Notes.children;
  for (let index = 0; index < noteChildren.length; index++) {
    const child = noteChildren[index];
    const childId = child.dataset.noteId;
    if (noteId === childId) {
      Notes.removeChild(child);
       const noteIndex = notes.findIndex((note) => note._id === noteId);
       if (noteIndex === -1) {
         return;
       }
       let updatedNotes=notes.filter(note=>note._id!==noteId)
       await setNotes(updatedNotes);
       let update = { notes};
       saveToLocalStorage(update);
    }
  }
};

export const EditNote = (event, noteId) => {
  let Notes = document.querySelector(".notes");
  let noteChildren = Notes.children;
  for (let index = 0; index < noteChildren.length; index++) {
    const child = noteChildren[index];
    const childId = child.dataset.noteId;
    if (noteId === childId) {
      const editButton = child.children[0].children[0].children[0];
      const textarea = child.children[1].children[0];
      let isDisabled;
      if (editButton.className.includes("no-edit")) {
        editButton.classList.remove("no-edit");

        textarea.disabled = false;
        isDisabled = false;
      } else {
        editButton.classList.add("no-edit");

        textarea.disabled = true;
        isDisabled = true;
      }
      const noteIndex = notes.findIndex((note) => note._id === noteId);
      if(noteIndex===-1){
        return
      }
      let note = notes[noteIndex];
      note = { ...note, disabled:isDisabled };
      notes[noteIndex] = note;
      const update = { notes };
      saveToLocalStorage(update);
    }
  }
};

export const SaveNote = async(event, noteId) => {
  const element = event.target;
  const value = element.value;//----------> value of the text area element
  const lengthOfValue=value.trim().length
  //-----------> do nothing if the length of value is nil
  if(lengthOfValue===0){
    return;
  }
  //----------> find the id of the element to be updated
  let update;
  const noteIndex=notes.findIndex(note=>note._id===noteId)
  if(noteIndex===-1){
    //----------> means if the note cannot be found
    const newNote = { _id: noteId, text: value, disabled: false };
    await setNotes([newNote, ...notes]);
    update = { notes };
  }
  else{
    let note=notes[noteIndex]
    if(note.text.trim()===value.trim()){
      //----------> if the previous value of the text area does not change
      return;
    }
    note={...note,text:value}
    notes[noteIndex]=note
    update = { notes };
  }
  saveToLocalStorage(update)
};
