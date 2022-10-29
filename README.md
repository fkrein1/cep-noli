# Challenge-Web-React

## Projeto React.js

A proposta deste projeto é criar um website utilizando a biblioteca React JS, realizando integrações com as APIs ViaCep/IBGE.

**Dependências do projeto:**

* **REACT JS**: em caso de dúvidas sobre a biblioteca, utilize a documentacao oficial https://reactjs.org/
* [Axios](https://github.com/axios/axios) - Módulo utilizado para realizar as requisições na API.
* Sinta-se livre para utilizar qualquer biblioteca para criação de interfaces ou navegação.

## Layout

- O protótipo apresentado abaixo é apenas uma sugestão de implementação/design. A tela não necessita ser idêntica ao protótipo.
- https://www.nolifretes.com.br/wp-content/uploads/2022/09/Challenge-Web-React.pdf

## Funcionalidades básicas:

### Página inicial

- Possuir dois botões com as opções do sistema incluindo uma mensagem de boas vindas.  

  1 - Buscar um endereço a partir de um CEP (OPCIONAL). 
  
  2 - Buscar um CEP a partir de um endereço (OBRIGATÓRIO). 

### Página de busca de endereço por CEP (OPCIONAL)

- Deverá conter um campo para o usuário digitar o CEP.
- Deverá conter um botão para realizar a busca.
- Deverá conter um botão para voltar a página inicial.
- Quando a busca for realizada seus dados deverão ser exibidos em uma modal.
- Validações.  

  1 - O botão de pesquisa deverá ficar inabilitado caso o campo contenha letras. 
  
  2 - O botão de pesquisa deverá ficar inabilitado caso o campo esteja vazio. 

### Página de busca de CEP por endereço (OBRIGATÓRIO)
 - Deverá conter 3 campos. 
 
   1 - Selecionar um estado.  
  
   2 - Selecionar um município (de acordo com o estado selecionado). 
  
   3 - Input com o logradouro.
  
- Deverá conter um botão para realizar a busca. 
- Deverá conter um botão para voltar a página inicial. 
- Quando a busca for realizada, seus dados deverão ser exibidos em uma modal/alert. 
- Validações:   

  1 - O botão de pesquisa deverá ficar inabilitado caso algum dos campos esteja vazio. 

  
## API GitHub

- APIs para consumo: 
 
  ViaCEP - https://viacep.com.br/ 
  
  IBGE - https://servicodados.ibge.gov.br/api/docs/localidades


## Entrega

 Ao terminar o teste, envie um email para `desenvolvimento@nolifretes.com.br` com o titulo - DEV-REACT-CHALLENGE contendo o link do github. 
