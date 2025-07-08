# Étape de build
FROM node:21 as build

WORKDIR /app

# Copier les fichiers de configuration
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code source
COPY . .

# Construire l'application
RUN npm run build

# Étape de production avec nginx
FROM nginx:alpine AS production

# Copier les fichiers de build dans le dossier de nginx
COPY --from=build /app/dist /usr/share/nginx/html

# 🔁 Copie de la bonne configuration nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf


# Exposer le port 80
EXPOSE 80

# Démarrer nginx
CMD ["nginx", "-g", "daemon off;"]
