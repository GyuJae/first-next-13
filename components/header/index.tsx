import React from 'react';
import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div>Youtube Music</div>
      <nav className={styles.navigator}>
        <ul>
          <li>홈</li>
          <li>둘러보기</li>
          <li>보관함</li>
          <li>검색</li>
        </ul>
      </nav>
      <div>User Icon</div>
    </header>
  );
};

export default Header;
