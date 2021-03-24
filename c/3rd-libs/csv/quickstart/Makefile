BASE_DIR=.
LIB_CSV_PATH=$(BASE_DIR)/lib/csv_parser
SRC_PATH=$(BASE_DIR)/src
BIN_PATH=$(BASE_DIR)/bin
EXE_NAME=quickstart

# all 或 main 是默认执行任务 
all: clean compile
compile: lib-package
	gcc $(SRC_PATH)/quickstart.c -o $(BIN_PATH)/$(EXE_NAME) -I$(LIB_CSV_PATH) -L$(LIB_CSV_PATH) -lcsv
lib-package: lib-compile
	ar cr $(LIB_CSV_PATH)/libcsv.a $(LIB_CSV_PATH)/*.o
lib-compile: init
	gcc -c $(LIB_CSV_PATH)/csv.c -o $(LIB_CSV_PATH)/csv.o
	gcc -c $(LIB_CSV_PATH)/split.c -o $(LIB_CSV_PATH)/split.o
	gcc -c $(LIB_CSV_PATH)/fread_csv_line.c -o $(LIB_CSV_PATH)/fread_csv_line.o
init: 
	mkdir -p $(BIN_PATH)
	cp -R $(BASE_DIR)/data $(BIN_PATH)
clean:
	rm -rf $(BIN_PATH)
run:
	$(BASE_DIR)/bin/$(EXE_NAME)