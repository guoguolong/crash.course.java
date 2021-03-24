# reference: https://github.com/semitrivial/csv_parser
PROJ_ROOT=.
LIB_CSV_PATH=${PROJ_ROOT}/lib/csv_parser/target
SRC_PATH=${PROJ_ROOT}/src
BIN_PATH=${PROJ_ROOT}/bin

${PROJ_ROOT}/lib/csv_parser/build-static-lib.sh

rm -rf $BIN_PATH && mkdir $BIN_PATH
cp -R ${PROJ_ROOT}/data/users.csv $BIN_PATH

# 注：为了系统兼容性，应将"源码"在-L -l参数之前，否则可能编译失败.
gcc $SRC_PATH/sample.c -o $BIN_PATH/sample -I$LIB_CSV_PATH -L$LIB_CSV_PATH -lcsv

# 另外两种方法编译: 像指定源码文件一样指定 .o或.a
# gcc $SRC_PATH/sample.c $LIB_CSV_PATH/csv.o $LIB_CSV_PATH/fread_csv_line.o $LIB_CSV_PATH/split.o -I$LIB_CSV_PATH -o $BIN_PATH/sample  # 像指定源码文件一样指定 .o
# gcc $SRC_PATH/sample.c $LIB_CSV_PATH/libcsv.a -I$LIB_CSV_PATH -o $BIN_PATH/sample # 像指定源码文件一样指定 .a

cd $BIN_PATH 
./sample
