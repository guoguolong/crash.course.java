/*
 *  Copyright 2019 Banyuan Nanjing Ltd.
 *
 */

#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <csv.h>

/**
 * 用csv_parser解析一行逗号分隔字符串，并输出到屏幕上
 */
void print_one_line_csv(char *line, FILE *fp) {
    char **parsed = parse_csv(line);
    char **orginal = parsed;

    fputs("<tr>", fp);
    
    while (*parsed) {
        fputs("<td style=\"border: 1px solid gray\">", fp);
        fputs(*parsed, fp);
        fputs("</td>", fp);
        parsed++;
    }

    fputs("</tr>", fp);

    parsed = orginal;
    free_csv_line(parsed);
}

/**
 * 从文件读取CSV数据解析。
 */
int parse_csv_test() {
    FILE *fp = fopen("./data/users.csv", "r");

    if (fp == NULL) {
        printf("%s\n", "File not found.");
        return -1;
    }

    int max_line_size = 1024;
    int err, done = 0;

    FILE *fp2;

    fp2 = fopen("sample.html", "w");
    fputs("<table>", fp2);
    while (!done) {
        char *line = fread_csv_line(fp, max_line_size, &done, &err);
        print_one_line_csv(line, fp2);
    }
    fputs("</table>", fp2);
    fclose(fp);
    return 0;
}

int main(int argc, char **argv) {
    parse_csv_test();
    return 0;
}
