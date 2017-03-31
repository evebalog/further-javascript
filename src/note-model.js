(function(exports) {

   function Note(text, id) {
     this._text = (text)
     this._id = id;
   };

    Note.prototype.showNote = function() {
     return this._text
   };

   exports.Note = Note;
 })(this);
