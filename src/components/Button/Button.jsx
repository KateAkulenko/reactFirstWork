//*Base
import classNames from 'classnames';
//*Styles
import styles from './Button.module.css';

function Button({text = 'Default B txt', type = 'button', onclick, deleteMode }) {
  const buttonStyles = [styles.button];

  if (deleteMode) {
    buttonStyles.push(styles.delete);
  }

  return (
    <button type={type} className={classNames([buttonStyles])} onClick={onclick}>
      <span>{text}</span>
    </button>
  );
}

export default Button;