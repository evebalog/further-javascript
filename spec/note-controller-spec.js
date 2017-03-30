test({

  noteControllerCanBeInstantiated: function() {
    function ListDouble() {};
    var notelist = new ListDouble();

    noteControl = new NoteController(notelist);
    assert.isTrue(noteControl instanceof NoteController, "noteControllerCanBeInstantiated");
    assert.isTrue(noteControl._noteList === notelist, "noteControllerCanBeInstantiated" );
  }



})
