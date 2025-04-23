FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# 環境変数を設定
ENV NODE_ENV=development
ENV WDS_SOCKET_PORT=0
ENV CHOKIDAR_USEPOLLING=true
ENV PORT=3000
ENV HOST=0.0.0.0

CMD ["npm", "start"]
