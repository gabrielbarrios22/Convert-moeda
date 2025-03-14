// const button = document.getElementById('convert-button')
// const select = document.getElementById('currency-select')


// const dolar = 5.2
// const euro = 5.9
// const btc = 467.4

// const convertValues = () => {
//     const inputReais = document.getElementById('input-real').value
//     const realValueText = document.getElementById('real-value-text')
//     const currencyValueText = document.getElementById('currency-value-text')


//     realValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
//         style: 'currency',
//         currency: 'BRL',
//     }).format(inputReais)


//     if (select.value === 'USD$ Dólar americano') {
//         currencyValueText.innerHTML = new Intl.NumberFormat('en-US', {
//             style: 'currency',
//             currency: 'USD',
//         }).format(inputReais / dolar)
//     }


//     if (select.value === '€ Euro') {
//         currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', {
//             style: 'currency',
//             currency: 'EUR',
//         }).format(inputReais / euro)
//     }


//     if (select.value === '€ BTC') {
//         currencyValueText.innerHTML = new Intl.NumberFormat('BTC', {
//             style: 'currency',
//             currency: 'BTC',
//         }).format(inputReais / btc)
//     }
    
    
// }

// changeCurrency = () => {
//     const currencyName = document.getElementById('currency-name')
//     const currencyImg = document.getElementById('currency-img')



//     if (select.value === 'USD$ Dólar americano') {
//         currencyName.innerHTML = 'Dólar americano'
//         currencyImg.src = './assets/usd.png.png'
//     }



//     //TROCAR IMAGEM

//     if (select.value === '€ Euro') {
//         currencyName.innerHTML = 'Euro'
//         currencyImg.src = './assets/eur.png.png'
//     }

//     convertValues()

//     if (select.value === 'BTC') {
//         currencyName.innerHTML = 'BTC'
//         currencyImg.src = 'assets/btc.png'
//     }

//     convertValues()


// }

// button.addEventListener('click', convertValues)
// select.addEventListener('change', changeCurrency)


const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const dolar = 5.2
const euro = 5.9
const btc = 467.4 

const convertValues = () => {
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(inputReais)

    if (select.value === 'USD$ Dólar americano') {
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(inputReais / dolar)
    }

    if (select.value === '€ Euro') {
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR',
        }).format(inputReais / euro)
    }

    if (select.value === 'BTC') {
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'decimal',
            minimumFractionDigits: 8,
            maximumFractionDigits: 8
        }).format(inputReais / btc) + " BTC";
    }
}

const changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')

    if (select.value === 'USD$ Dólar americano') {
        currencyName.innerHTML = 'Dólar americano'
        currencyImg.src = './assets/usd.png.png'
    }

    if (select.value === '€ Euro') {
        currencyName.innerHTML = 'Euro'
        currencyImg.src = './assets/eur.png.png'
    }

    if (select.value === 'BTC') {
        currencyName.innerHTML = 'Bitcoin'
        currencyImg.src = './assets/btc.png'
    }

    convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)
