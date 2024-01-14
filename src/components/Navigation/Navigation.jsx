//*data
import list from './Navigation.data';

//*style
import styles from './navigation.module.css';

function Navigation() {
  return (
    <ul className={styles.list} role="list">
      {list.map((item, index) => {
        return (
          <li role="item" key={'list item - ' + item + index}>
            <a href={item.url} className={styles.link}>
              <div className={styles.circle}></div>
              <span>{item.name}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default Navigation;
