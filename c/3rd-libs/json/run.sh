JSON_LIB_PATH=./lib/cJSON
DATA_PATH=./data
SRC_PATH=./src
BIN_PATH=./bin
EXE_NAME=${1}

if  [ ! -n "$EXE_NAME" ] ;then
    echo "用法：./run.sh json_str 或 ./run.sh json_file"
    exit
fi
rm -rf $BIN_PATH && mkdir $BIN_PATH
gcc -L${JSON_LIB_PATH}/lib -lcjson -I ${JSON_LIB_PATH}/include ${SRC_PATH}/${EXE_NAME}.c -o ${BIN_PATH}/${EXE_NAME} && ./bin/${EXE_NAME} ${DATA_PATH}/users.json
