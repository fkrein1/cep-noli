import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import styles from './styles.module.scss';

export function Header() {
  const { pathname } = useLocation();
  return (
    <>
      <div className={styles.wrapper}>
        <img src={logo} />
      </div>
      <nav className={styles.nav}>
        <ul>
          <li className={pathname === '/' ? styles.navactive : ''}>
            <Link to="/">Home</Link>
          </li>
          <li
            className={
              pathname.includes('/buscarendereco') ? styles.navactive : ''
            }
          >
            <Link to="/buscarendereco">Buscar Endereço</Link>
          </li>
          <li
            className={pathname.includes('/buscarcep') ? styles.navactive : ''}
          >
            <Link to="/buscarcep">Buscar CEP</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
