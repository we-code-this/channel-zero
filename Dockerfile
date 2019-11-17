FROM node:12

ARG fontawesomeKey

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

WORKDIR /app
COPY package.json ./
RUN npm config set "@fortawesome:registry" https://npm.fontawesome.com/ && \
    npm config set "//npm.fontawesome.com/:_authToken" $fontawesomeKey && \
    npm install
COPY . .

RUN npm run build

CMD ["npm", "run", "start"]
