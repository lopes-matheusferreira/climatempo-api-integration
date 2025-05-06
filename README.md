# 🌤️ ClimaTempo Weather API Integration

Este projeto é uma API REST construída com **Node.js** que se conecta à **API da ClimaTempo** para buscar dados meteorológicos **em tempo real** exclusivamente para a cidade de **São Paulo**.

## 📦 Sobre o Projeto

- Consulta o clima atual de São Paulo usando a API oficial do ClimaTempo.
- Integração segura com token via middleware.
- Organização modular com controllers, services, routes e middleware.
- Ideal para testes, aprendizado ou como parte de um sistema maior.

---

## 🚀 Tecnologias utilizadas

- Node.js
- Express.js
- Axios
- dotenv

---

## 🔐 Autenticação

A API utiliza **token de autenticação** via header:

```http
Authorization: Bearer seu_token_aqui
