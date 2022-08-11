


const ColorWidget = ({ setColor }) => {
  return(
    <div id="color-tooltip">
      <div className="color-option tooltip" style={{ backgroundColor: "#fffff" }} onClick={() => setColor("#ffffff") }>
        <span className="tooltip-text">White</span>
      </div>
      <div className="color-option tooltip" style={{ backgroundColor: "#ff9f80" }} onClick={() => setColor("#ff9f80") }>
        <span className="tooltip-text">Red</span>
      </div>
      <div className="color-option tooltip" style={{ backgroundColor: "#ffd280" }} onClick={() => setColor("#ffd280") }>
        <span className="tooltip-text">Orange</span>
      </div>
      <div className="color-option tooltip" style={{ backgroundColor: "#ffff80" }} onClick={() => setColor("#ffff80") }>
        <span className="tooltip-text">Yellow</span>
      </div>
      <div className="color-option tooltip" style={{ backgroundColor: "#b3ffb3" }} onClick={() => setColor("#b3ffb3") }>
        <span className="tooltip-text">Green</span>
      </div>
      <div className="color-option tooltip" style={{ backgroundColor: "#01ffff" }} onClick={() => setColor("#01ffff") }>
        <span className="tooltip-text">Teal</span>
      </div>
      <div className="color-option tooltip" style={{ backgroundColor: "#b3b3ff" }} onClick={() => setColor("#b3b3ff") }>
        <span className="tooltip-text">Blue</span>
      </div>
      <div className="color-option tooltip" style={{ backgroundColor: "#5982ff" }} onClick={() => setColor("#5982ff") }>
        <span className="tooltip-text">Dark Blue</span>
      </div>
      <div className="color-option tooltip" style={{ backgroundColor: "#ffdae0" }} onClick={() => setColor("#ffdae0") }>
        <span className="tooltip-text">Pink</span>
      </div>
      <div className="color-option tooltip" style={{ backgroundColor: "#e08787" }} onClick={() => setColor("#e08787") }>
        <span className="tooltip-text">Brown</span>
      </div>
      <div className="color-option tooltip" style={{ backgroundColor: "#c0c0c0" }} onClick={() => setColor("#c0c0c0") }>
        <span className="tooltip-text">Gray</span>
      </div>
      <div className="color-option tooltip" style={{ backgroundColor: "#fadbfa" }} onClick={() => setColor("#fadbfa") }>
        <span className="tooltip-text">Violet</span>
      </div>
      <div className="color-option tooltip" style={{ backgroundColor: "#cdffcd" }} onClick={() => setColor("#cdffcd") }>
        <span className="tooltip-text">Lime</span>
      </div>
    </div>
  );
}

export default ColorWidget;