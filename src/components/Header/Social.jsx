import style from './social.module.css';

function Social() {
  return (
    <ul className={style.social}>
      <li>
        <a href='https://www.facebook.com/' target='_balank' title="facebook" className={style.soc_link}>
            <svg></svg>
        </a>
      </li>
      <li>
        <a href='https://www.instagram.com/' target='_balank' title="instagram" className={style.soc_link}>
            <svg></svg>
        </a>
      </li>
      <li>
        <a href='https://twitter.com/' target='_balank' title="twitter" className={style.soc_link}>
            <svg></svg>
        </a>
      </li>
    </ul>
  );
}

export default Social;