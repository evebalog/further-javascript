(function(exports) {

  function NoteListView(noteList) {
    this._noteList = noteList;
  };

  NoteListView.prototype.returnHTML = function(){
    var listItemsHTML = ''
    this._noteList.notes().forEach(function(item){
      listItemsHTML += '<li><div>' + item.text() + '<div><liv>';
    })
    return '<ul>' + listItemsHTML + '</ul>'
  };

  exports.NoteListView = NoteListView;
  
})(this);
