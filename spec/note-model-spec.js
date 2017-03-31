// the note instantiates with a string of text stored within a text property on the note an return the note text when requested
test({
 showNoteMethodReturnsString: function() {
   var newNote = new Note("I am a note");
   assert.isEqual("I am a note", newNote.showNote(), 'showNoteMethodReturnsString')
 },

newNoteInstantiatesWithString: function() {
    var newNote = new Note("string of text");
    assert.isTrue(newNote._text === "string of text", 'newNoteInstantiatesWithString');
  }
})
