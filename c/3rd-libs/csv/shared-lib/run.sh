# reference: https://github.com/semitrivial/csv_parser
PROJ_ROOT=$(cd `dirname $0`; pwd)
LIB_CSV_PATH=${PROJ_ROOT}/lib/csv_parser/target
SRC_PATH=${PROJ_ROOT}/src
BIN_PATH=${PROJ_ROOT}/bin
LIB_CSV_DIST_PATH=$BIN_PATH/target

os=`uname  -a`
os_mac="Darwin"
os_mingw='MINGW6'

${PROJ_ROOT}/lib/csv_parser/build-shared-lib.sh

rm -rf $BIN_PATH && mkdir -p ${LIB_CSV_DIST_PATH}
cp -R ${PROJ_ROOT}/data/users.csv $BIN_PATH
cp ${LIB_CSV_PATH}/*.so ${LIB_CSV_DIST_PATH}

if [[ $os =~ $os_mingw ]];then
    gcc $SRC_PATH/sample.c ${LIB_CSV_PATH}/libcsv.so -I${LIB_CSV_PATH} -o $BIN_PATH/sample
    PATH=${LIB_CSV_DIST_PATH}:$PATH # 或者复制.so到可执行文件同一个目录，即：cp ${LIB_CSV_PATH}/libcsv.so $BIN_PATH/ 
else
    gcc $SRC_PATH/sample.c -L${LIB_CSV_PATH} -lcsv -I${LIB_CSV_PATH} -o $BIN_PATH/sample
fi

if [[ $os =~ $os_mac ]];then
    # otool -L ${PROJ_ROOT}/bin/sample # macOS下查看运行文件的动态库依赖关系
    install_name_tool -change ./target/libcsv.so ${PROJ_ROOT}/bin/target/libcsv.so ${BIN_PATH}/sample
else
    export LD_LIBRARY_PATH=${LIB_CSV_DIST_PATH}
    # ldd $BIN_PATH/sample
fi
$BIN_PATH/sample
