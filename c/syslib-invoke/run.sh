SRC_PATH=./src
BIN_PATH=./bin
EXE_NAME=sample

rm -rf $BIN_PATH && mkdir $BIN_PATH
gcc ${SRC_PATH}/${EXE_NAME}.c -o ${BIN_PATH}/${EXE_NAME} && ./bin/${EXE_NAME}
