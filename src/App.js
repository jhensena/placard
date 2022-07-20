import './App.css';

const colors = [
  { value: 'red', label: 'Red' },
  { value: 'blue', label: 'Blue' },
  { value: 'green', label: 'Green' },
  { value: 'yellow', label: 'Yellow' },
  { value: 'orange', label: 'Orange' },
]

function App() {
  return (
    <div className="App">
      <div className="color-area">
        {[1, 2, 3].map((idx) => (
          <select name={`color_${idx}`} key={idx}>
            { colors.map((color) => (
              <option value={color.value} key={color.value}>{color.label}</option>
            )) }
          </select>
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
