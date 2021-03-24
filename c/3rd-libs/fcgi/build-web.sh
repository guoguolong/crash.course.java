# ./build-web.sh && pkill -9 web.cgi && spawn-fcgi -a 127.0.0.1 -p 9001 -F 1 -f ./bin/web.cgi 
SCRIPT_PATH=$(dirname "$0")
LIB_PATH=${SCRIPT_PATH}/lib/csv_parser
SRC_PATH=${SCRIPT_PATH}/src
BIN_PATH=${SCRIPT_PATH}/bin
EXE_NAME=web

rm -rf $BIN_PATH && mkdir -p $BIN_PATH
gcc $LIB_PATH/csv.c \
    $LIB_PATH/split.c \
    $LIB_PATH/fread_csv_line.c \
    -lfcgi \
    -lcurl \
    $SRC_PATH/${EXE_NAME}.c \
    -I$LIB_PATH \
    -o $BIN_PATH/${EXE_NAME}.cgi