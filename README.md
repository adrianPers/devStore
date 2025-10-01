<p 
align="center">
    <img width="300px"
    src="./imgs/logo-02.png" />
</p>



### Sobre a Devstore
A Devstore é um projeto acadêmico em grupo que se constitui em um e-comerce de roupas *streetwer*. O site é construido em `HTML` , `CSS` e `Javascript`.
O projeto está hospedado no [Netlify](https://www.netlify.com/), que é um serviço de hospedagem gratuito.


### [Ver projeto](https://loja-devstore.netlify.app) 

---

## APIs e Bibliotecas :

### Google Icons

O [Google icons](https://fonts.google.com/icons) 
 é um conjunto de ícones gratuitos, escaláveis e consistentes projetados pelo Google para aplicações web, mobile e de design, seguindo as diretrizes do Material Design.
```html
<header>
    <button class="btnHeader">
        <span class="material-symbols-outlined">
            shopping_cart
        </span>
    </button>

    <img class="logoHeader" 
    alt="logo da Devstore" src="https://" />

    <button class="btnHeader">
        <span class="material-symbols-outlined">
            account_circle
        </span>
    </button>

    <button class="btnMenu btnHeader">
        <span class="material-symbols-outlined">
            menu
        </span>
    </button>
</header>
```
<p align="right">
index.html
</p>

**Resultado :**
<p 
align="center">
    <img width="300px"
    src="./imgs/tela-icons.png" />
</p>

<p align="right">
header
</p>


### ViaCEP

O [ViaCEP](https://viacep.com.br/)
 é Webservice gratuito de alto desempenho para consulta de Código de Endereçamento Postal (CEP) do Brasil. No projeto ele está sendo utilizado no formalário de cadastro.

Exemplo de consulta de CEP:
**viacep.com.br/ws/01001000/json/**

**Consumo da API:**

```js
const getCEP = async (cep) => {
    try {
        const response = await fetch(
            `https://viacep.com.br/ws/${cep}/json/`
        );

        if (!response.ok) {
            clearAddress();
            return {};
        }

        return response.json();

    } catch (err) {
        console.log("sem rede mano");
        return {};
    }
}
```
<p align="right">
form.js
</p>

**Retorno :**
```json
{
    "cep": "01001-000",
    "logradouro": "Praça da Sé",
    "complemento": "lado ímpar",
    "unidade": "",
    "bairro": "Sé",
    "localidade": "São Paulo",
    "uf": "SP",
    "estado": "São Paulo",
    "regiao": "Sudeste",
    "ibge": "3550308",
    "gia": "1004",
    "ddd": "11",
    "siafi": "7107"
}
```


---
by : [Adrian Pereira](https://github.com/adrianPers) -
 [Lanna Ariely](https://github.com/lanna01ariely) -
 [Mateus Paes](https://github.com/mateus-fpl) -
 [Miguel Pinto](https://github.com/Miguelpds10).