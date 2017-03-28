// the note instantiates with a string of text stored within a text property on the note an return the note text when requested
 function newNoteInstantiatesWithString() {
   var newNote = new Note("string of text");
   assert.isTrue(newNote._text === "string of text", 'newNoteInstantiatesWithString');
 };

 newNoteInstantiatesWithString();

function showNoteMethodReturnsString() {
  var newNote = new Note("I am a note");
  assert.isTrue(newNote.showNote() === "I am a note", 'showNoteMethodReturnsString')
}

showNoteMethodReturnsString();
