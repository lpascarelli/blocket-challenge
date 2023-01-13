import classes from './card.module.css';

function Card(props) {
  return (
    <div
      className={`${classes['card-container']} ${classes.card} ${classes.flexed}`}
    >
      {props.children}
    </div>
  );
}

export default Card;
