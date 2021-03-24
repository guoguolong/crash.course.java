/*
 *  Copyright 2019 Banyuan Nanjing Ltd.
 *
 */
#include <stdio.h>

int main(int argc, char **argv) {
    FILE *fp;

    fp = fopen("sample.html", "w");
    char *buffer = "<h1>Hello Banyuan</h1>";
    fputs(buffer, fp);
    fclose(fp);
    return 0;
}
