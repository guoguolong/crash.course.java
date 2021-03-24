SRC_PATH=./src
BIN_PATH=./bin

rm -rf $BIN_PATH && mkdir -p $BIN_PATH
gcc -o $BIN_PATH/regexp $SRC_PATH/regexp.c  && $BIN_PATH/regexp