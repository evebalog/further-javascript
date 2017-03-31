var noteList = new List()
noteList.addNote("Favourite drink: redbull")
noteList.addNote("Favourite drink: seltzer")
var view = new View(noteList)
var controller = new NoteController(noteList)


controller.insertHTML(view)
// controller.getNoteFromUrl(view)
// controller.showAnimalForCurrentPage(view)
// controller.makeUrlChangeShowNoteForCurrentPage(view)
