# reference: https://github.com/semitrivial/csv_parser
BASE_DIR=$(cd `dirname $0`; pwd)
SRC_PATH=${BASE_DIR}/src
TARGET_PATH=${BASE_DIR}/target

rm -rf $TARGET_PATH && mkdir -p $TARGET_PATH

gcc -c $SRC_PATH/csv.c -o $TARGET_PATH/csv.o
gcc -c $SRC_PATH/fread_csv_line.c -o $TARGET_PATH/fread_csv_line.o
gcc -c $SRC_PATH/split.c -o $TARGET_PATH/split.o

ar cr $TARGET_PATH/libcsv.a $TARGET_PATH/*.o
# rm -rf $TARGET_PATH/*.o

# ar -t $TARGET_PATH/libcsv.a  # 查看a文件里的o文件列表
# nm -C $TARGET_PATH/libcsv.a  # 查看a/o文件里的函数列表

cp $SRC_PATH/*.h $TARGET_PATH
