FROM node:latest

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y \
    build-essential \
    ninja-build \
    meson \
    libglib2.0-dev \
    libcairo2-dev \
    libpango1.0-dev \
    libatk1.0-dev \
    libgdk-pixbuf2.0-dev \
    libgirepository1.0-dev \
    libxkbcommon-dev \
    libwayland-dev \
    libegl1-mesa-dev \
    wayland-protocols \
    wget && \
    rm -rf /var/lib/apt/lists/*

RUN npm install -g npm@latest
RUN npm install -g pnpm

RUN wget https://download.gnome.org/sources/gtk/4.10/gtk-4.10.4.tar.xz && \
    tar -xf gtk-4.10.4.tar.xz && \
    cd gtk-4.10.4 && \
    mkdir build && \
    cd build && \
    meson setup --prefix=/usr --buildtype=release \
        -Dx11-backend=false \
        -Dwayland-backend=true \
        -Dbroadway-backend=false \
        -Dwin32-backend=false \
        -Dmacos-backend=false \
        -Dmedia-ffmpeg=disabled \
        -Dmedia-gstreamer=disabled \
        -Dprint-cpdb=disabled \
        -Dprint-cups=disabled \
        -Dvulkan=disabled \
        -Dcloudproviders=disabled \
        -Dsysprof=disabled \
        -Dtracker=disabled \
        -Dcolord=disabled \
        -Dgtk_doc=false \
        -Dman-pages=false \
        -Dintrospection=enabled \
        -Ddemos=false \
        -Dbuild-testsuite=false \
        -Dbuild-examples=false \
        -Dbuild-tests=false \
        .. && \
    ninja && ninja install && \
    cd ../.. && \
    rm -rf gtk-4.10.4 gtk-4.10.4.tar.xz

COPY package.json pnpm-lock.yaml ./
RUN pnpm install
COPY . .
ENTRYPOINT ["pnpm", "test"]
