import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import styles from './styles.module.scss';

export function Header() {
  const navigate = useNavigate()
  return (
    <>
      <div className={styles.wrapper}>
        <img src={logo} />
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/buscarendereco">Buscar Endereço</Link>
          </li>
          <li>
            <Link to="/buscarcep">Buscar CEP</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
