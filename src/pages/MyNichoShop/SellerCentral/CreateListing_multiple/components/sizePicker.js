import React from 'react';

const sizePicker = [['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'], ['Green', 'Brown', 'Black', 'White', 'Yellow'], ['Cotton', 'Leather', 'Vinyl']]

export default function ToggleSwitch({onChange, selected, type}) {
  const handleClick = (key) => {
    let k = [...selected]
    k[type] = key
    onChange([...k])
  }
  return (
    <div className="sizePicker">
        {
          sizePicker[type].map((item, key) => (
            <span className={key == selected[type]? "active": ""} onClick={() => handleClick(key)}>
              {
                type == 1 && <div style={{background: item.toLowerCase()}}/>
              }
                {item}
            </span>
          ))
        }
      </div>
  );
}
