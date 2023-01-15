import classes from './input.module.css';

function Input(props) {
  return (
    <div className={classes['input-container']}>
      <input
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onPokemonNameChange}
      />
    </div>
  );
}

export default Input;
