// clientService.js
const axios = require('axios');

// ID da cidade permitido (S�o Paulo)
const cityId = 3477; // ID fixo para S�o Paulo

// Fun��o para buscar o clima apenas para S�o Paulo
const getWeather = async (city) => {
    // Substitui h�fen por espa�o e normaliza para verificar a cidade como "sao paulo"
    const normalizedCity = city.replace(/-/g, ' ').normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    // Verifica se a cidade � permitida e registra erro no console se n�o for
    if (normalizedCity !== 'sao paulo') {
        console.error('Apenas S�o Paulo est� dispon�vel para consulta');
        return { error: 'Apenas S�o Paulo est� dispon�vel para consulta' };
    }

    const token = process.env.API_TOKEN;
    const baseUrl = process.env.CLIMA_TEMPO_BASE_URL;
    const url = `${baseUrl}/v1/weather/locale/${cityId}/current?token=${token}`;
    
    try {

        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Erro ao obter dados do clima:', error.message);
        if (error.response) {
            console.error('Detalhes do erro:', error.response.data);
        }
        return { error: 'Erro ao buscar dados do clima' };
    }
};

module.exports = { getWeather };
