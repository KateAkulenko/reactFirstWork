//*styles
import styles from './components/Button/Button.module.css';
//*base
import { useState } from 'react';
import Header from './components/Header/Header';
import List from './components/List/List';

function App() {
 
  const [name, setName] = useState('Jhon');
  const [age, setAge] = useState(30);
  const clickFunction = () => {
    setName('Willy');
    setAge(32);
  };

  return (
    <>
      <Header />
      <div style={{ marginTop: 200, padding: 100}}>
        <h2>Content</h2>
        <List />
      </div>
      <div style={{ padding: 100}}>
      <p>{name} has {age} years old</p>
        <button className={styles.button} onClick={clickFunction}>Change</button>
      </div>
    </>
  );
}

export default App;
