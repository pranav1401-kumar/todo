// Importing Custom Modules
import ShowNotes from "../ui/showNotes";
import TakeNotes from "../ui/takeNotes";
import Header from "./header";



const Notes = () => {
  return(
    <>
      <Header />
      <main>
        <TakeNotes />
        <ShowNotes />
      </main>
    </>
  ); 
}

export default Notes;