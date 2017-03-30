// var element = document.getElementById('app');
// element.innerHTML = "Howdy";

(function(exports) {

  function NoteController(noteList) {
    this._noteList = noteList;
  };

  NoteController.prototype.insertHTML = function (view) {
    var myNotes = view.returnHTML()
    var element = document.getElementById("app")
    element.innerHTML = myNotes
  };

  exports.NoteController = NoteController;
})(this);


// Takes a note list model upon instantiation. Adds a note that says Favourite drink: seltzer. (You could create another file, index.js, to instantiate the NoteController.)
// Creates a note list view, passing in the note list model.
// Has a method that gets HTML from the note list view and inserts it into the app element.
