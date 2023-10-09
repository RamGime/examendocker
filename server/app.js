const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('¡Bienvenido a la aplicación de noticias! Visita /noticia para obtener una noticia aleatoria.');
});

app.get('/noticia', async (req, res) => {
  try {
    const apiKey = 'ac00f2444aa6463fab2df756a0d39b1d'; // Reemplaza con tu clave de API de noticias
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
    const response = await axios.get(url);

    if (response.data.articles && response.data.articles.length > 0) {
      const randomIndex = Math.floor(Math.random() * response.data.articles.length);
      const randomArticle = response.data.articles[randomIndex];
      const title = randomArticle.title;
      const description = randomArticle.description;

      res.json({ title, description });
    } else {
      res.status(404).json({ error: 'No se encontraron noticias.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener la noticia.' });
  }
});

app.listen(port, () => {
  console.log(`Aplicación escuchando en el puerto ${port}`);
});
