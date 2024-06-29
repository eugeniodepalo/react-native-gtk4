FROM ubuntu:24.04

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

RUN curl -fsSL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh && \
    bash nodesource_setup.sh && \
    rm nodesource_setup.sh && \
    apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y nodejs build-essential libgtk-4-dev libgirepository1.0-dev && \
    rm -rf /var/lib/apt/lists/*

RUN npm install -g npm@latest
RUN npm install -g pnpm

ENTRYPOINT ["pnpm"]
