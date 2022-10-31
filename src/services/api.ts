import axios from 'axios';

interface UF {
  id: number;
  sigla: string;
  nome: string;
}

interface CEP {
  bairro: string;
  cep: string;
  localidade: string;
  logradouro: string;
  uf: string;
}

interface City {
  id: number;
  nome: string;
}

export async function getAdress(cep: string): Promise<CEP> {
  const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
  if (data.erro) throw new Error();
  return data;
}

export async function getUFs(): Promise<UF[]> {
  const { data } = await axios.get(
    'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome',
  );
  return data;
}

export async function getCities(ufId: string): Promise<City[]> {
  const { data } = await axios.get(
    `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufId}/municipios?orderBy=nome`,
  );
  return data;
}

export async function getCep(
  uf: string,
  city: string,
  street: string,
): Promise<CEP> {
  const { data } = await axios.get(
    `https://viacep.com.br/ws/${uf}/${city}/${street}/json/`,
  );
  if (data.length === 0) throw new Error();

  return data[0];
}
