import ColorDropDown from "./components/ColorDropdown";
import "./App.css";

const colors = [
  { value: "red", label: "Red", hex: "red" },
  { value: "blue", label: "Blue", hex: "blue" },
  { value: "green", label: "Green", hex: "green" },
  { value: "yellow", label: "Yellow", hex: "yellow" },
  { value: "orange", label: "Orange", hex: "orange" },
];

function App() {
  return (
    <div className="App">
      <div className="color-area">
        {[1, 2, 3].map((idx) => (
          <ColorDropDown colors={colors} key={idx} />
        ))}
      </div>
      <div className="container">
        <div className="input-field">
          <label>JOB:</label>
          <input name="job" />
        </div>
        <div className="input-field">
          <label>SO #:</label>
          <input name="so" />
        </div>
        <div className="input-field">
          <label>ITEM ID:</label>
          <input name="item_id" />
        </div>
        <div className="input-field">
          <label>REC'D BY:</label>
          <input name="rec_by" />
        </div>
        <div className="footer">
          <div>RECEIVING FORM</div>
          <div>ARIZONA RESTAURANT SUPPLY</div>
          <div>V2R1</div>
        </div>
      </div>
    </div>
  );
}

export default App;
