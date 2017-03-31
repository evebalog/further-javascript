(function(exports) {

  function List() {
    this._notes = [];
  };

  List.prototype.listNotes = function(){
    return this._notes;
  };

  List.prototype.addNote = function(text) {
    var id = this._notes.length
    this._notes.push(new Note(text, id));
  };

  exports.List = List
})(this);
