// Importing Built-in Modules
import { connect } from "react-redux";

// Importing Custom Modules
import NoteView from "./noteView";



const ShowNotes = ({ notes }) => {
  return(
    <>
      { notes.length <= 0
        ? <div id="placeholder"><p id="placeholder-text">Notes you add appear here</p></div>
        : <>
            { notes.filter(({ pinned }) => pinned === true).length > 0 &&
              <>
                <label className="text-label">pinned</label>
                <NoteView notes={ notes.filter(({ pinned }) => pinned === true) } />
                <label className="text-label">others</label>
              </>
            }
            <NoteView notes={ notes.filter(({ pinned }) => pinned === false) } />
          </>
      }
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    notes: state
  }
};

export default connect(mapStateToProps)(ShowNotes);