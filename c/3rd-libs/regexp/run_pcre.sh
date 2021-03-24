SRC_PATH=./src
BIN_PATH=./bin

rm -rf $BIN_PATH && mkdir -p $BIN_PATH
gcc `pkg-config --libs --cflags libpcre` -o $BIN_PATH/pcre_sample $SRC_PATH/pcre_sample.c && $BIN_PATH/pcre_sample