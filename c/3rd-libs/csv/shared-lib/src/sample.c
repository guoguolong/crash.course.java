/*
 *  Copyright 2019 Banyuan Nanjing Ltd.
 *
 */

#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <csv.h>

#ifdef _WIN32
    #define SEP '\\'
#else
    #define SEP '/'
#endif

char * get_current_dir(char *filepath) {
    char *path = (char *)malloc(strlen(filepath) + 2);
    char *head = path;
    strcpy(path, filepath);
    char *pos = strrchr(path, SEP);
    if (pos == NULL) {
        sprintf(path, ".%c", SEP);
    } else {
        pos++;
        *pos = '\0';
    }
    return head;
}

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
 * 从文件读取CSV数据解析。
 */
int parse_csv_test(char *dir) {
    char *path = (char *)malloc(1024);
    sprintf(path, "%susers.csv", dir);

    FILE *fp = fopen(path, "r");
    if (fp == NULL) {
        printf("%s not found.\n", path);
        return -1;
    }

    int max_line_size = 1024;
    int err, done = 0;

    while (!done) {
        char *line = fread_csv_line(fp, max_line_size, &done, &err);
        print_one_line_csv(line);
    }

    fclose(fp);
    free(path);

    return 0;
}

int main(int argc, char **argv) {
    char *curr_dir = get_current_dir(*argv);
    parse_csv_test(curr_dir);
    return 0;
}
