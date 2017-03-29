var noteList = new List()

noteList.addNote("Favourite drink: seltzer")
var view = new View(noteList)
var controller = new NoteController(noteList)


controller.getHTML(view)
