(function(exports) {

  function SingleNoteView (note) {
    this._note = note
  };

  SingleNoteView.prototype.returnHTMLString = function () {

    var noteHTML = "<div>" + this._note._text + "</div>"
    return noteHTML;
  };

  exports.SingleNoteView = SingleNoteView;

})(this);
