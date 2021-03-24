LIB_CSV_PATH=./lib/csv_parser
SRC_PATH=./src
BIN_PATH=./bin

rm -rf ./${BIN_PATH}      # 删除上次构建的目标目录
mkdir -p ./${BIN_PATH}    # 重新创建构建目标目录
cp -R ./data ${BIN_PATH}  # 将整个data目录复制到目标目录

gcc $SRC_PATH/quickstart.c -o $BIN_PATH/quickstart -I$LIB_CSV_PATH -L$LIB_CSV_PATH -lcsv
    
cd ${BIN_PATH}
./quickstart

