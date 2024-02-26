import Link from 'next/link';

import classes from './main-header.module.css';

function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href='/'>PokeDex</Link>
      </div>
      <div className={classes.sponsored}>
        <h1>Challenge</h1>
      </div>
    </header>
  );
}

export default MainHeader;
