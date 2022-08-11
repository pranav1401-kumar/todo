// Importing Built-in Modules
import Masonry from 'react-masonry-css';

// Importing Custom Modules
import NoteCard from "./noteCard";



const NoteView = ({ notes }) => {
  const breakPoints = {
    default: 4,
    900: 3,
    700: 2,
    400: 1
  };

  return (
    <Masonry
      breakpointCols={ breakPoints }
      className="notes-grid"
      columnClassName="notes-grid_column"
    >
      {  
        notes.map((note) => (
          <NoteCard note={note} key={ note.id } />
        ))
      }
    </Masonry>
  );
}

export default NoteView;