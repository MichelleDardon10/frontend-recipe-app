FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

# Instalación de dependencias
RUN npm install

# Copia del código fuente
COPY . .

# Variables de entorno
ARG REACT_APP_TITLE
ARG REACT_APP_BUTTON_COLOR

ENV REACT_APP_TITLE=$REACT_APP_TITLE
ENV REACT_APP_BUTTON_COLOR=$REACT_APP_BUTTON_COLOR

# Compilación de la aplicación
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
