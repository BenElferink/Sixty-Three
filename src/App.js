import { useState } from 'react';
import './styles/styles.css';
import cardSvg from './images/tarot.svg';
import MakeMagic from './components/MakeMagic';

export default function App() {
  const [start, setStart] = useState(false);

  const toggleStart = () => {
    setStart(!start);
  };

  return (
    <div className='app'>
      <header>
        <div className='title'>
          <img src={cardSvg} alt='magic cards' />
          <h1>Sixty Three</h1>
        </div>
        <h3>
          <i>Think</i> of a number between <b>1 - 63</b>
        </h3>
      </header>

      <main>
        {start ? (
          <MakeMagic toggleStart={toggleStart} />
        ) : (
          <div className='controls push'>
            <button className='start' onClick={toggleStart}>
              Let's Make Magic
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
