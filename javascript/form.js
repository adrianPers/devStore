
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

[...document.getElementsByClassName("inputText")].map((input) => {
    input.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/[^A-Za-zÀ-ÿ\s]/g, "");
    })
})

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
const btnsBack = [...document.getElementsByClassName('btnBack')];

const boxForm01 = document.getElementById('boxForm01');

const boxsForm = [...document.getElementsByClassName("boxForm")];
const etapas = [...document.querySelectorAll('.etapas .etapa')];




btnsNext.map((btn, index) => {
    btn.addEventListener('click', (e) => {

        e.preventDefault();

        // [...boxsForm[index-0].children].map((el) => {
        //     console.log(el.lastElementChild?.value);
        // })
        // console.log(boxsForm[index-0]);
        // etapas.map(
        //     etapa => etapa.classList.remove('etapaAtual')
        // );

        if ([...boxsForm[index-0].children].every((el) => {
            return el.lastElementChild?.value != ""
        })){
            
            if( index != 2) {
                boxForm01.style.marginLeft = `-${(index + 1) * (100 / 3)}%`;
                etapas[index + 1].classList.add('etapaAtual');
            }else {
                alert("Conta cadastrada com sucesso!!!");
                window.location.replace("https://loja-devstore.netlify.app/cadastro");
            }
        } else {
            console.log("Campo não preeenchido");
        }

    })

})

console.log(boxsForm)

btnsBack.map((btn, indexBtn) => {
    btn.addEventListener('click', (e) => {

        e.preventDefault();
        boxForm01.style.marginLeft = `-${(indexBtn) * (100 / 3)}%`;
        etapas.map(el => el.classList.remove('etapaAtual'));
        etapas.map((el, index) => {
            if(index <= indexBtn){
                el.classList.add('etapaAtual');
            }
        });

    })
})



const inputs = [...document.querySelectorAll("input")];

inputs.map((input, index) => {
    input.addEventListener("input", () => {
        if(input.value != ""){
            input.parentElement.classList.remove("inputInvalido");
        } else {
            input.parentElement.classList.add("inputInvalido");
        }


    })
})

document.querySelector(".checkSemNum").addEventListener(
    "change", (e) => {
        const boxInputNum = boxsForm[1].children[2];
        boxInputNum.classList.toggle("inputDisabled");
        if(e.target.checked){
            console.log("sim")
            boxInputNum.children[1].value = "Sem número";
            boxInputNum.children[1].disabled = true;
        } else {
            console.log("não")
            boxInputNum.children[1].value = "";
            boxInputNum.children[1].disabled = false;
        }
    }
)

document.querySelector(".checkSemComp").addEventListener(
    "change", (e) => {
        const boxInputComp = boxsForm[1].children[4];
        boxInputComp.classList.toggle("inputDisabled");
        if(e.target.checked){
            console.log("sim");
            boxInputComp.children[1].value = "Sem complemento";
            boxInputComp.children[1].disabled = true;
        } else {
            console.log("não");
            boxInputComp.children[1].value = "";
            boxInputComp.children[1].disabled = false;
        }
    }
)



