FROM node:20

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y \
    build-essential \
    ninja-build \
    wget \
    flex \
    bison \
    libxkbcommon-dev \
    libwayland-dev \
    libegl1-mesa-dev \
    python3 \
    python3-pip \
    python3-packaging && \
    rm -rf /var/lib/apt/lists/*

RUN pip3 install meson --break-system-packages
RUN npm install -g npm@latest
RUN npm install -g pnpm

RUN wget https://download.gnome.org/sources/glib/2.76/glib-2.76.6.tar.xz && \
    tar -xf glib-2.76.6.tar.xz && \
    cd glib-2.76.6 && \
    mkdir build && cd build && \
    meson setup --prefix=/usr --buildtype=release -Dtests=false .. && \
    ninja && ninja install && cd ../.. && \
    rm -rf glib-2.76.6 glib-2.76.6.tar.xz

RUN wget https://download.gnome.org/sources/gobject-introspection/1.76/gobject-introspection-1.76.1.tar.xz && \
    tar -xf gobject-introspection-1.76.1.tar.xz && \
    cd gobject-introspection-1.76.1 && \
    mkdir build && cd build && \
    meson setup --prefix=/usr --buildtype=release .. && \
    ninja && ninja install && cd ../.. && \
    rm -rf gobject-introspection-1.76.1 gobject-introspection-1.76.1.tar.xz

RUN wget https://download.gnome.org/sources/gtk/4.12/gtk-4.12.5.tar.xz && \
    tar -xf gtk-4.12.5.tar.xz && \
    cd gtk-4.12.5 && \
    mkdir build && cd build && \
    meson setup --prefix=/usr --buildtype=release \
    -Dx11-backend=false \
    -Dwayland-backend=true \
    -Dwin32-backend=false \
    -Dmacos-backend=false \
    -Dmedia-gstreamer=disabled \
    -Dprint-cups=disabled \
    -Df16c=disabled \
    -Dintrospection=enabled \
    -Dbuild-demos=false \
    -Dbuild-examples=false \
    -Dbuild-tests=false \
    .. && \
    ninja && ninja install && cd ../.. && \
    rm -rf gtk-4.12.5 gtk-4.12.5.tar.xz

COPY package.json pnpm-lock.yaml ./
RUN pnpm install
COPY . .
ENTRYPOINT ["pnpm", "test"]
