# reference: https://github.com/semitrivial/csv_parser
LIB_PATH=./lib/csv_parser
SRC_PATH=./src
BIN_PATH=./bin
EXE_NAME=http_sample

rm -rf $BIN_PATH && mkdir -p $BIN_PATH
gcc $LIB_PATH/csv.c \
    $LIB_PATH/split.c \
    $LIB_PATH/fread_csv_line.c \
    -lcurl \
    $SRC_PATH/${EXE_NAME}.c \
    -I$LIB_PATH \
    -o $BIN_PATH/${EXE_NAME} \
    && $BIN_PATH/${EXE_NAME}