/*
 *  Copyright 2019 Banyuan Nanjing Ltd.
 *
 */

#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include "../lib/csv_parser/csv.h"

/**
 * 用csv_parser解析一行逗号分隔字符串，并输出到屏幕上
 */
void print_one_line_csv(char *line) {
    char **parsed = parse_csv(line);
    char **orginal = parsed;
    printf("| ");

    while (*parsed) {
        printf(" %s | ", *parsed);
        parsed++;
    }

    printf("\n|-----------------------------------|");
    printf("\n");

    parsed = orginal;
    free_csv_line(parsed);
}

/**
 * 解析完整的CSV：多行csv
 */
void parse_csv_test() {
    char *buf[] = {
        "姓名,年龄,性别,所在城市",
        "Bob,35,1,\"California, America\"",
        "Jay,24,0,\"Beiking, China\"",
    };
    unsigned long len = sizeof(buf) / sizeof(*buf);

    for (int i = 0; i < len; i++) {
        print_one_line_csv(buf[i]);
    }
}

int main(int argc, char **argv) {
    parse_csv_test();
    // print_one_line_csv("姓名,年龄,性别,所在城市");
    return 0;
}