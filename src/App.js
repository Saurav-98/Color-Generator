import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
  const [color, setColor] = useState([]);
  const [error, setError] = useState(false);

  const [randomList, setRandomList] = useState(new Values('#248624').all(20));

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      setError(false);
      let colors = new Values(color).all(10);
      setRandomList(colors);
    } catch (error) {
      console.log('Error');
      setError(true);
    }
  };

  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            className={error ? 'error' : ''}
            placeholder="#f15025"
            onChange={(e) => setColor(e.target.value)}
          />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {randomList.map((color, index) => {
          console.log(color);
          return (
            <SingleColor
              hexColor={color.hex}
              key={index}
              {...color}
              index={index}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
