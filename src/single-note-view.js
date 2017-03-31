(function(exports) {

  function SingleNoteView (Note) {
    this.note = Note
  };

  SingleNoteView.prototype.returnHTMLString = function () {

    var noteHTML = "<div>" + this.note._text + "</div>"
    return noteHTML;
  };

  exports.SingleNoteView = SingleNoteView;

})(this);
