import { useState } from "react";
import "./style.css";

const ColorDropDown = ({ colors }) => {
  const [active, setActive] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleChangeColor = (color) => {
    setSelectedColor(color);
    setActive(false);
  };

  return (
    <div className="color-picker">
      <div className="wrapper-dropdown">
        <span
          onClick={() => {
            setActive(!active);
          }}
          style={{ background: selectedColor?.hex }}
        >
          {!selectedColor?.value && "Click to select a color"}
        </span>
        {active && (
          <ul className="dropdown">
            {colors.map((color) => (
              <li onClick={() => handleChangeColor(color)} key={color.value}>
                <span style={{ background: color.hex }}></span> {color.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ColorDropDown;
