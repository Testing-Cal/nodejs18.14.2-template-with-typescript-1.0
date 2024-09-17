FROM node:18.20.3-slim

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Added context 
ENV context ""
ENV port 3005

# install app dependencies
COPY package.json ./

RUN npm install

# add app
COPY src ./src

# start app
CMD ["ts-node", "./src/app.ts"]
