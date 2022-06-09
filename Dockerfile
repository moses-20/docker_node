FROM node:16-alpine 

# work directory and user
RUN mkdir -p /home/app; chown -R node:node /home/app
WORKDIR /home/app
USER node 

# project files 
COPY --chown=node:node yarn.lock .
COPY --chown=node:node package.json .
COPY --chown=node:node dist/. .

# environment
COPY --chown=node:node .env . 
ENV NODE_ENV production 
RUN yarn install  

#  final steps
EXPOSE 3000 
CMD yarn start