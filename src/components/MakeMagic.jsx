import { useState } from 'react';
import Analyze from './Analyze';

export default function MakeMagic({ toggleStart }) {
  const [num, setNum] = useState(0);
  const [finish, setFinish] = useState(false);

  const toggleFinish = () => {
    setFinish(!finish);
  };

  if (finish) {
    return (
      <div className='controls push'>
        <p>
          Your number is <br />
          <span className='num'>{num}</span>
        </p>
        <button className='finish' onClick={toggleStart}>
          Awesome!
        </button>
      </div>
    );
  } else {
    return <Analyze num={num} setNum={setNum} toggleFinish={toggleFinish} />;
  }
}
