import classes from './input.module.css';

function Input() {
  return (
    <div className={classes['input-container']}>
      <input type='text' placeholder='Search your pokemon' />
    </div>
  );
}

export default Input;
