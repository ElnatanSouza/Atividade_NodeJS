const fetch = require('node-fetch')

const placaCarro = async (placa) => {
    const response = await fetch(`https://apicarros.com/v1/consulta/${placa}/`)
    const json = await response.json()

    return json
}

module.exports = placaCarro