const fetch = require('node-fetch')

const buscaCep = async (cep) => {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const json = await response.json()

    return json
}

module.exports = buscaCep