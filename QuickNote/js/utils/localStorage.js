export const saveToLocalStorage = async(newData) => {
  let data = getLocalStorageData();
  const updatedData = { ...data, ...newData };
  return localStorage.setItem("QuickNote", JSON.stringify(updatedData));

  //  if (action === "delete-note") {
  //    //----------> destructure the updates properties and _id from the content
  //    const { _id } = content;
  //    //----------> find the index of note to be updated
  //    const updatedNotes = notes.filter((note) => note._id !== _id);

  //    return localStorage.setItem("QuickNote", JSON.stringify({ notes: updatedNotes }));
  //  }
};

export const getLocalStorageData = () => {
  const notes=localStorage.getItem("QuickNote")
  if(notes){
    return JSON.parse(notes)
  }
  return {notes:[]}
};