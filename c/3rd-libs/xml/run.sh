export PKG_CONFIG_PATH="/usr/local/opt/libxml2/lib/pkgconfig"
SRC_PATH=./src
BIN_PATH=./bin
DATA_PATH=./data

rm -rf $BIN_PATH && mkdir $BIN_PATH
gcc `pkg-config --libs --cflags libxml-2.0` $SRC_PATH/sample.c -o $BIN_PATH/sample && ./bin/sample $DATA_PATH/users.xml
