//*Base
import cn from 'classnames';

//*Styles
import base from './../../styles/base.module.css';
import styles from './Header.module.css';

//*Components
import Logo from './../Logo/Logo';
import Navigation from './../Navigation/Navigation';
import Social from './../Social/Social';
// import { useState } from 'react';
// import Button from '../Button/Button';

function Header() {
  // const [count, setCount] = useState(0);

  // const addCounter = () => {
  //   setCount((prevCount) => prevCount +1);
  // };

//*modal window registration
  // const openSignInModal = () => {
  //   console.log('openSignInModal');
  // };

  return (
    <header className={styles.header}>
      <div className={cn([base.wrapper, styles.wrapper])}>
        <Logo />
        <nav>
          <div>
          <Navigation />
          </div>
        </nav>
        <Social />
         {/* <span> Counter: {count} </span>
        <div>
        <button type="button" onClick={addCounter} style={{backgroundColor: 'green', cursor: 'pointer'}}>
          <span>count</span>
        </button>
        </div> */}
        {/* <div className={styles.buttons}>
          <Button text={'Sign in'} onclick={openSignInModal}/>
          <Button text={'Other'}/>
          <Button text={'delete'.toUpperCase()} deleteMode={true} />
        </div> */}
      
      </div>
    </header>
  );
}

export default Header;
