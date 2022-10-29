import { useNavigate } from "react-router-dom"
import styles from './styles.module.scss';


export function Home() {
  const navigate = useNavigate()
  return (
    <div className={styles.wrapper}>
      <h1>Bem vindo ao BuscadorCEP</h1>
      <p>O aplicativo BuscadorCEP permite que você encontre códigos de endereçamento postais (CEP).
      </p>
      <p>Se você já tiver o CEP em mãos e gostaria de buscar seu endereço, o BuscadorCEP também vai te ajudar. Aproveite! =D</p>
      <div className={styles.wrapperBtn}>
        <button type="button" onClick={() => navigate('/buscarendereco')}>Buscar Endereço</button>
        <button type="button" onClick={() => navigate('/buscarcep')}>Buscar CEP</button>
      </div>
    </div>
  )
}