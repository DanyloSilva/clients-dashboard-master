# Use a imagem oficial do Node.js como base
FROM node:14.21.3

# Define o diretório de trabalho dentro do contêiner
WORKDIR /api

# Copia o package.json e o package-lock.json (se existir) para o diretório de trabalho
COPY package*.json ./

# Instala as dependências da aplicação
RUN npm ci --only=production

# Copia todo o código fonte da aplicação para o diretório de trabalho
COPY . .

# Exponha a porta 3000 para o mundo exterior (opcional)
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "app.js"]

