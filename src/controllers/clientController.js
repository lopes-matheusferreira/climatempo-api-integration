// clientController.js
const clientService = require('../services/clientService');

const getWeather = async (req, res) => {
    const { city } = req.params; // Recebe o nome da cidade nos parâmetros

    const weatherData = await clientService.getWeather(city); // Busca os dados do clima pelo nome da cidade

    if (weatherData.error) {
        // Envia o erro como resposta se ele estiver presente
        return res.status(400).json({ message: weatherData.error });
    }

    res.status(200).json(weatherData); // Retorna os dados do clima se encontrados
};

module.exports = { getWeather };
