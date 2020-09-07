FROM mhart/alpine-node:latest
ADD . /sounder
RUN npm i
CMD ["npm", "run", "electron-dev-win"]