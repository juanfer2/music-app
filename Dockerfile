FROM node:12-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
# COPY package-lock.json ./
RUN npm install
RUN npm install react-scripts@3.4.3 -g --silent

# add app
COPY . ./

# start app
CMD ["npm", "start"]
