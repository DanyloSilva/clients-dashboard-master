# Estágio de compilação
FROM node:14.21.3 as build

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia o package.json e o package-lock.json (se existir) para o diretório de trabalho
COPY package*.json ./

# Instala as dependências da aplicação
RUN npm install

# Copia todo o código fonte da aplicação para o diretório de trabalho
COPY . .

# Compila a aplicação Angular
RUN npm run build --prod

# Estágio de produção
FROM nginx:alpine

# Copia os arquivos de construção da etapa de compilação para o diretório de documentos padrão do Nginx
COPY --from=build /app/dist/* /usr/share/nginx/html/

# Exclui a configuração de nginx padrão
RUN rm /etc/nginx/conf.d/default.conf

# Copia a configuração customizada do nginx (se necessário)
# COPY nginx.conf /etc/nginx/conf.d

# Exponha a porta 80 para o mundo exterior
EXPOSE 80

# Comando para iniciar o servidor nginx
CMD ["nginx", "-g", "daemon off;"]
