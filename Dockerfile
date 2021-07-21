FROM node:lts AS development


WORKDIR /code
COPY package.json /code/package.json
COPY yarn.lock /code/yarn.lock
RUN yarn install
COPY . /code

#CMD [ "npm", "start" ]

#FROM development AS builder

#RUN npm run build

#FROM nginx:1.13-alpine

#COPY --from=builder /code/build /usr/share/nginx/html