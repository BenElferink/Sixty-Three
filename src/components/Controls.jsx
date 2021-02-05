export default function Controls({ start, setStart, finish, setFinish }) {
  return (
    <footer>
      {!start && !finish ? (
        // phase 1 of 3

        <button
          onClick={() => {
            setStart(true);
          }}>
          Let's Begin
        </button>
      ) : start && !finish ? (
        // phase 2 of 3

        <div>
          <p>is your number on this card?</p>
          <button
            onClick={() => {
              // setNum(props.num + props.card[0][0]);
              // props.handleClickEvent();
            }}>
            Yes
          </button>
          <button
            onClick={() => {
              // props.handleClickEvent();
            }}>
            No
          </button>
        </div>
      ) : start && finish ? (
        // phase 3 of 3

        <button
          onClick={() => {
            // props.setNum(0);
            // props.setStart(false);
          }}>
          Try Again
        </button>
      ) : (
        console.warn('~ dev error ~')
      )}
    </footer>
  );
}
