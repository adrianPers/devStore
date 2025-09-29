


const inputCEP = document.getElementById('input-cep');
const divTeste = document.getElementById('teste');

const completeAddress = (address) => {

    const inputs = [...document.getElementsByClassName('input-form')];

    inputs.map((input) => {

        if (Object.hasOwn(address, input.id)) {
            input.value = address[input.id];
        } else {
            clearAddress();
        }

    })

}

const clearAddress = () => {

    [
        ...document.getElementsByClassName('input-form')
    ].map(input => input.value = '');
}


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


inputCEP.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/\D/g, "")
});

inputCEP.addEventListener('change', async () => {
    let cep = inputCEP.value.substring(0, 8);

    if (cep.length < 8) {
        console.log('digite um cep válido caralho');
        clearAddress();
    } else {

        let endereco = await getCEP(cep);
        console.log(endereco);
        completeAddress(endereco);
    }
})

const btnsNext = [...document.getElementsByClassName('btnNext')];
const boxForm01 = document.getElementById('boxForm01');
const etapas = [...document.querySelectorAll('.etapas .etapa')];



btnsNext.map((btn, index) => {
    btn.addEventListener('click', (e) => {

        e.preventDefault();
        etapas.map(
            etapa => etapa.classList.remove('etapaAtual')
        );
        if (index != 2) {
            boxForm01.style.marginLeft = `-${(index + 1) * (100 / 3)}%`;
            etapas[index + 1].classList.add('etapaAtual')
        }

    })

})

const menu = document.querySelector(".navHeader");
let isOpen = false;
[
    ...document.getElementsByClassName('btnMenu')
].map(el => el.addEventListener('click', () => {
   
    menu.style.left = (isOpen ? '-100%' : '0px');
    isOpen = !isOpen;
     
}))
