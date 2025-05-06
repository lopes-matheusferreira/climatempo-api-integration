
module.exports = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    const validToken = process.env.API_TOKEN;

    if (!token || token !== validToken) {
        return res.status(401).json({ message: 'Token de autenticação inválido' });
    }

    next();
};