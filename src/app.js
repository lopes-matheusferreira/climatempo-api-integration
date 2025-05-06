const express = require('express');
const dotenvConfig = require('./config/dotenvConfig');
const clientRoutes = require('./routes/clientRoutes');

dotenvConfig.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', clientRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);

});

module.exports = app;