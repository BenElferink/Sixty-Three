import { Fragment, useState, useEffect } from 'react';
import { cardData } from '../data/cardData';
import Cards from './Cards';

export default function Analyze({ num, setNum, toggleFinish }) {
  const [cardStack, setCardStack] = useState(cardData);
  const [cardToDisplay, setCardToDisplay] = useState([]);
  const [disableBtn, setDisableBtn] = useState(null);

  const swapCards = () => {
    if (cardStack.length !== 0) {
      let index = Math.floor(Math.random() * cardStack.length);
      let newCard = cardStack[index];
      let newCardSet = [...cardStack];
      newCardSet.splice(index, 1);
      setCardToDisplay(newCard);
      setCardStack(newCardSet);
    } else {
      toggleFinish();
    }
  };

  const nextRound = () => {
    setDisableBtn(true);
    swapCards();
    setTimeout(() => {
      setDisableBtn(false);
    }, 500);
  };

  const clickYes = () => {
    setNum(num + cardToDisplay[0][0]);
    nextRound();
  };

  const clickNo = () => {
    nextRound();
  };

  // ONLY ON-MOUNT
  useEffect(() => {
    nextRound();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Cards cardToDisplay={cardToDisplay} stackSize={cardStack.length} />

      <div className='controls'>
        <p>is your number on this card?</p>
        <button className='yes' onClick={clickYes} disabled={disableBtn}>
          Yes
        </button>
        <button className='no' onClick={clickNo} disabled={disableBtn}>
          No
        </button>
      </div>
    </Fragment>
  );
}
