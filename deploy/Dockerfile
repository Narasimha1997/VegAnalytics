FROM nodejs:latest

COPY ./app /app
WORKDIR /app

#this will install both client and server
RUN apt update -y && apt install -y wget
RUN wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | apt-key add -
RUN echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.4 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-4.4.list
RUN apt update -y && apt install -y mongodb-org
RUN npm install  --unsafe-perm

#run the app
ENTRYPOINT [ "npm", "run", "start" ]
