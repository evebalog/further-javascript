var list = new List();
list.addNote('This is the first note')
list.addNote('This is the second note')
var listView = new NoteListView(list);

function listViewInstantiateWithList() {
  assert.isTrue(listView._noteList === list);
}

listViewInstantiateWithList();
