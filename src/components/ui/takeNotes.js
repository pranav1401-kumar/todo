// Importing Built-in Modules
import { connect } from 'react-redux';
import { AiFillCloseCircle } from "react-icons/ai";
import { useState, useEffect, useRef } from "react";
import { MdOutlineColorLens, MdOutlineImage } from "react-icons/md";

// Importing Custom Modules
import ColorWidget from "./colors";



const TakeNotes = ({ dispatch }) => {
  const formRef = useRef(null);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [noteText, setNoteText] = useState("");
  const [color, setColor] = useState("#ffffff");
  const [visible, setVisible] = useState(false);
  const [showWidget, setShowWidget] = useState(false);


  const closeNotes = () => {
    setTitle("");
    setImage("");
    setNoteText("");
    setVisible(false);
    setColor("#ffffff");
    setShowWidget(false);
    document.getElementById("note-text").style.height = "inherit";
  }
  const submitNotes = () => {
    const data = {
      id: new Date(),
      title: title,
      message: noteText,
      color: color,
      image: image,
      pinned: false
    }
    dispatch({
      type: 'ADD_NOTE',
      data
    });

    closeNotes();
  }
  const processImage = () => {
    const file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();

    reader.addEventListener("load", function () {
      setImage(reader.result);
    }, false);

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  useEffect(() => {
    const handler = (event) => {
      if(!formRef.current?.contains(event.target)) {
        if(title.length <= 0 && noteText.length <= 0 && image.length <= 0) {
          closeNotes();
        } else {
          submitNotes();
        }
      }
    }
    window.addEventListener('click', handler);
    return () => window.removeEventListener('click', handler);
  });
  

  return(
    <div id="form-container" style={{ backgroundColor:color }}>
      <form id="form" ref={ formRef } autoComplete="off">
        
        <input 
          id="note-title" 
          type="text"
          placeholder="Title" 
          hidden={!visible} 
          value={title} 
          onChange={(text) => setTitle(text.target.value)} 
        />

        { image && 
          <div>
            <div className="tooltip">
              <AiFillCloseCircle size={20} className="image-icon" onClick={() => setImage("")}/>
              <span className="tooltip-text">Close</span>
            </div>
            <img src={image} alt="UserImage" className="form-image"/>
          </div> 
        }

        <textarea 
          id="note-text"
          rows={1}
          onInput={(element) => element.target.style.height = element.target.scrollHeight + "px"}
          type="text" 
          placeholder="Take a note..." 
          value={noteText} 
          onChange={(text) => setNoteText(text.target.value)} 
          onClick={() => setVisible(true)}
        />

        <input 
          type="file"
          id="upload-image"
          style={{ display: "none" }}
          accept="image/png, image/jpeg, image/jpg, image/svg"
          onChange={ processImage }
        /> 

        <div id="form-buttons"  hidden={!visible}>
          { showWidget && <ColorWidget setColor={ setColor } /> }
          
          <div className="tooltip">
            <label htmlFor="upload-image"><MdOutlineImage className="icon-button" /></label>
            <span className="tooltip-text">Add Image</span>
          </div>
          
          <div className="tooltip">
            <MdOutlineColorLens className="icon-button" onClick={ () => setShowWidget(!showWidget) } />
            <span className="tooltip-text">Change Background</span>
          </div>
          
          <button type="button" className="form-close-button" onClick={ closeNotes }>Close</button>
        </div>

      </form>
    </div>
  );
}

export default connect()(TakeNotes);