# Utiliza una imagen base de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia los archivos de tu proyecto al contenedor
COPY . .

# Instala las dependencias de Node.js
RUN npm install

EXPOSE 8080

# Define el comando para ejecutar la aplicación
CMD ["node", "app.js"]