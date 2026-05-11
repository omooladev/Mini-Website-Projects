//<---------- MODULES ---------->
import { notes } from "../../index.js";
import { getLocalStorageData} from "../utils/localStorage.js";
import { DeleteNote, EditNote, SaveNote } from "../utils/noteFunctions.js";
//<---------- ELEMENTS ---------->
const Notes = document.querySelector(".notes");
//<---------- fUNCTIONS ---------->
export const createNote = (notesToCreate, { howToAddChild }) => {
  for (let index = 0; index < notesToCreate.length; index++) {
    //----------> ID, disabled and the text
    let noteId = notesToCreate[index]._id;
    let isDisabled = notesToCreate[index].disabled;
    let text = notesToCreate[index].text;
  

    //<---------- CREATION OF ELEMENTS ---------->
    const Note = document.createElement("div");
    const noteHeader = document.createElement("div");
    const noteBody = document.createElement("div");

    const noteText = document.createElement("textarea");

    const iconContainer = document.createElement("div");
    const editButton = document.createElement("button");
    const editIcon = document.createElement("i");
    const deleteButton = document.createElement("button");
    const deleteIcon = document.createElement("i");
    //<----------ATTRIBUTES---------->
    Note.classList.add("note");
    noteHeader.classList.add("note-header");
    noteBody.classList.add("note-body");
    //<---------- TEXT AREA CONFIGURATIONS --------->
    noteText.classList.add("note-text");
    noteText.spellcheck = false;
    noteText.value = text;
    //<---------- TEXT AREA CONFIGURATIONS ENDS HERE --------->
    iconContainer.classList.add("icon-container");
    editIcon.classList.add("edit-icon");
    deleteIcon.classList.add("delete-icon");
    editIcon.className = "bx bxs-edit-alt edit";
    deleteIcon.className = "bx bx-trash";
    Note.dataset.noteId = noteId;
    //<---------- CONFIGURATIONS ---------->
    if (isDisabled) {
      editButton.classList.add("no-edit");
      noteText.disabled=true
    }
    //<---------- Add Event Listener ---------->
    deleteButton.addEventListener("click", (event) => DeleteNote(event, noteId));
    editButton.addEventListener("click", (event) => EditNote(event, noteId));
    noteText.addEventListener("mouseout", (event) => SaveNote(event, noteId));

    //----------> append children
    editButton.appendChild(editIcon);
    deleteButton.appendChild(deleteIcon);
    iconContainer.append(editButton, deleteButton);
    noteHeader.appendChild(iconContainer);
    noteBody.appendChild(noteText);
    Note.append(noteHeader, noteBody);
    if (howToAddChild === "prepend") {
      Notes.prepend(Note);
    } else {
       Notes.append(Note);
    }
  }
};

export const createNoteHandler = () => {
  let notesToCreate;
  let noteId = (Math.random() * 10).toString();
  let newNote = { _id: noteId, text: "", disabled: false };
  notesToCreate = [newNote];
  createNote(notesToCreate,{howToAddChild:"prepend"});
};