# brew install gtk+3
# brew install pkg-config
# loocate libffi.pc
# export PKG_CONFIG_PATH=/usr/local/Cellar/libffi/3.2.1/lib/pkgconfig/
gcc `pkg-config --libs --cflags gtk+-3.0` -O3 -g0 -o ./bin/gui ./src/gui.c  && ./bin/gui