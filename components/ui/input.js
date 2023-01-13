import classes from './input.module.css';

function Input(props) {
  return (
    <div className={classes['input-container']}>
      <input
        type='text'
        placeholder='Search your pokemon'
        onChange={props.onPokemonNameChange}
      />
    </div>
  );
}

export default Input;
