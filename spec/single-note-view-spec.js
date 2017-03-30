test({

  singleNoteViewInstantiatesWithNote: function (){
    var newNote = new Note("I am a note")
    var singleNoteView = new SingleNoteView(newNote)
    assert.isTrue(singleNoteView instanceof SingleNoteView, "singleNoteViewInstantiatesWithNote")
  },

  singleNoteViewreturnsHTMLString: function (){

  }
})
