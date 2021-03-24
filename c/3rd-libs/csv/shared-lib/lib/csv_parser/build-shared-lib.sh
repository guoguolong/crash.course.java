# reference: https://github.com/semitrivial/csv_parser
BASE_DIR=$(cd `dirname $0`; pwd)
SRC_PATH=${BASE_DIR}/src
TARGET_PATH=${BASE_DIR}/target

rm -rf $TARGET_PATH && mkdir -p $TARGET_PATH

gcc -fPIC -shared $SRC_PATH/csv.c $SRC_PATH/fread_csv_line.c $SRC_PATH/split.c -o $TARGET_PATH/libcsv.so

cp $SRC_PATH/*.h $TARGET_PATH

echo "csv_parser lib built."
