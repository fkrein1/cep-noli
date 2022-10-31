import { useQuery } from '@tanstack/react-query';
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCep, getCities, getUFs } from '../../services/api';
import styles from './styles.module.scss';

export function BuscarCep() {
  const [uf, setUf] = useState('12');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');

  const ufQuery = useQuery(['ufs'], getUFs);
  const cityQuery = useQuery(['cities', uf], () => getCities(uf));

  const navigate = useNavigate();

  function handleUfChange(event: ChangeEvent<HTMLSelectElement>) {
    setUf(event.target.value);
    setCity('');
  }

  async function handleSearch() {
    const currentCity = cityQuery.data?.find(
      (cityData) => cityData.id === Number(city),
    );
    const currentUF = ufQuery.data?.find((ufData) => ufData.id === Number(uf));
    if (currentUF && currentCity) {
      try {
        const data = await getCep(currentUF.sigla, currentCity.nome, street);
        alert(`
          Logradouro: ${data.logradouro}
          Bairro: ${data.bairro}
          Município/ UF: ${data.localidade} - ${data.uf}
          CEP: ${data.cep}
        `);
      } catch {
        alert('Endereço Inválido');
      }
    } else {
      alert('Preencha todos os campos');
    }
  }

  const searchBtnDisabled =
    uf.length === 0 || city.length === 0 || street.length === 0;

  return (
    <div className={styles.wrapper}>
      <label htmlFor="uf">UF</label>
      <select id="uf" onChange={handleUfChange} value={uf}>
        {ufQuery.data?.map((uf) => (
          <option key={uf.id} value={uf.id}>
            {uf.nome}
          </option>
        ))}
      </select>

      <label htmlFor="city">Município</label>
      <select id="city" onChange={(e) => setCity(e.target.value)} value={city}>
        <option value=""></option>
        {cityQuery.data?.map((city) => (
          <option key={city.id} value={city.id}>
            {city.nome}
          </option>
        ))}
      </select>

      <label htmlFor="street">Logradouro</label>
      <input
        id="street"
        onChange={(e) => setStreet(e.target.value)}
        value={street}
      />

      <div className={styles.wrapperBtn}>
        <button type="button" onClick={() => navigate('/')}>
          Voltar
        </button>
        <button
          type="button"
          disabled={searchBtnDisabled}
          onClick={handleSearch}
        >
          Buscar
        </button>
      </div>
    </div>
  );
}
