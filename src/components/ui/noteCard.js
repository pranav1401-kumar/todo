// Importing Built-in Modules
import { connect } from "react-redux";
import { MdDeleteForever, MdPushPin, MdOutlinePushPin } from "react-icons/md";



const NoteCard = ({ note, dispatch }) => {
  return(
    <div style={{ backgroundColor: note.color }} className="note" key={ note.id }>
      { note.title && <div className="note-title">{ note.title }</div> }
      { note.image && <img src={ note.image } alt={ "Image" + note.id } style={{ height:"100%", width:"auto" }}/> }
      { note.message && <div className="note-text">{ note.message }</div> }
      <div className="toolbar-container">
        <div className="toolbar">
          {
            note.pinned
            ? <MdPushPin 
                className="toolbar-pin icon-button" 
                onClick={() => {  dispatch({ type: "PIN_NOTE", id: note.id }) }}
              />
            : <MdOutlinePushPin 
                className="toolbar-pin icon-button" 
                onClick={() => {  dispatch({ type: "PIN_NOTE", id: note.id }) }}
              />
          }
          <MdDeleteForever 
            className="toolbar-delete icon-button" 
            onClick={() => { dispatch({ type: "DELETE_NOTE", id: note.id }) }}
          />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    notes: state
  }
};

export default connect(mapStateToProps)(NoteCard);