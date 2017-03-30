test({

  noteControllerCanBeInstantiated: function() {
    function ListDouble() {};
    var notelist = new ListDouble();

    noteControl = new NoteController(notelist);
    assert.isTrue(noteControl instanceof NoteController, "noteControllerCanBeInstantiated");
    assert.isTrue(noteControl._noteList === notelist, "noteControllerCanBeInstantiated" );
  },

  noteControllerInsertsHTML: function() {
    function ViewDouble() {
      ViewDouble.prototype = {
        returnHTMl: function() {
          return "<ul><li><div>Fake Note</div></ul></li>"
        }
      };
    };
    function dummyElement(){};
    var dummyElement = new dummyElement();
    var dummyView = new ViewDouble();
    var noteController = new NoteController(dummyView)
    noteController.insertHTML(dummyView, dummyElement);
    assert.isEqual("<ul><li><div>Fake Note</div></ul></li>", dummyElement, "noteControllerInsertsHTML")

  }

})
