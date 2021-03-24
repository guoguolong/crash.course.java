# ./build-boot.sh && pkill -9 boot.cgi && spawn-fcgi -a 127.0.0.1 -p 9001 -F 1 -f ./bin/boot.cgi 
LIB_PATH=./lib/csv_parser
SRC_PATH=./src
BIN_PATH=./bin
EXE_NAME=boot

rm -rf $BIN_PATH && mkdir -p $BIN_PATH
gcc -lfcgi $SRC_PATH/${EXE_NAME}.c -o $BIN_PATH/${EXE_NAME}.cgi