FROM mhart/alpine-node:latest
ADD . /sounder
WORKDIR /sounder
RUN npm i
CMD ["npm", "run", "electron-dev-linux"]