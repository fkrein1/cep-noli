import { useState } from 'react';
import InputMask from 'react-input-mask';
import { useNavigate } from 'react-router-dom';
import { getAdress } from '../../services/api';
import styles from './styles.module.scss';

export function BuscarEndereco() {
  const [cep, setCep] = useState('');
  const navigate = useNavigate();
  const cepRegex = /^[0-9]{5}-[0-9]{3}$/;
  const isBtnDisabled = !cepRegex.test(cep);

  async function handleSearchCep() {
    const formatedCep = cep.replace('-', '');
    try {
      const data = await getAdress(formatedCep);
      alert(`
        Logradouro: ${data.logradouro}
        Bairro: ${data.bairro}
        Município/ UF: ${data.localidade} - ${data.uf}
        CEP: ${data.cep}
      `);
    } catch {
      alert('CEP Inválido');
    }
  }

  return (
    <div className={styles.wrapper}>
      <label htmlFor="cep">CEP</label>
      <InputMask
        id="cep"
        mask="99999-999"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        placeholder="23912-322"
      />
      <div className={styles.wrapperBtn}>
        <button type="button" onClick={() => navigate('/')}>
          Voltar
        </button>
        <button
          type="button"
          disabled={isBtnDisabled}
          onClick={handleSearchCep}
        >
          Buscar
        </button>
      </div>
    </div>
  );
}
