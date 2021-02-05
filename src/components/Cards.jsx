import React, { useState, useEffect } from 'react';
import { Transition } from 'react-spring/renderprops';

function Cards({ cardToDisplay, stackSize }) {
  const [cards, setCards] = useState([]);

  const generateStack = (card, remaining) => {
    let cardsArray = new Array(remaining).fill('');
    cardsArray.unshift(card);
    setCards(cardsArray);
  };

  useEffect(() => {
    generateStack(cardToDisplay, stackSize);
  }, [cardToDisplay, stackSize]);

  return (
    <div className='card-deck'>
      {cards.map((card, i) =>
        card !== '' ? (
          <table className='card' key={i}>
            <tbody>
              <Transition
                items={cardToDisplay}
                from={{ transform: 'rotate(360deg)' }}
                enter={{ transform: 'rotate(0deg)' }}
                leave={{}}>
                {(row) => (props) => (
                  <tr>
                    {row.map((num, key) => (
                      <td style={props} key={key}>
                        {num}
                      </td>
                    ))}
                  </tr>
                )}
              </Transition>
            </tbody>
          </table>
        ) : (
          <div
            key={i}
            className='card-bg'
            style={{
              top: `${i * -1.5 + 15}%`,
              transform: `rotate(${i % 2 === 0 ? i + 7 : i - 7}deg)`,
            }}
          />
        )
      )}
    </div>
  );
}

export default Cards;
