LIB_PATH=./lib/csv_parser
SRC_PATH=./src
BIN_PATH=./bin
EXE_NAME=sample
OBJECTS=$(LIB_PATH)/csv.c $(LIB_PATH)/split.c $(LIB_PATH)/fread_csv_line.c
main: compile
	gcc $(OBJECTS) -o $(BIN_PATH)/$(EXE_NAME) $(BIN_PATH)/$(EXE_NAME).o 
compile: init
	gcc -I$(LIB_PATH) -c $(SRC_PATH)/$(EXE_NAME).c -o $(BIN_PATH)/$(EXE_NAME).o
init: 
	mkdir -p $(BIN_PATH)
clean:
	rm -rf $(BIN_PATH)
run:
	./bin/sample