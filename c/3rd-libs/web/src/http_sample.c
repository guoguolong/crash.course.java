/*
 *  Copyright 2019 Banyuan Nanjing Ltd.
 *
 */

#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <csv.h>
#include <curl/curl.h>

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

int parse_csv_buf(char* csvBuf) {

    char *delim = "\n";
    char *token = strtok(csvBuf, delim);

    while (token != NULL) {
        print_one_line_csv(token);
        token = strtok(NULL, delim);
    }
    return 0;
}

ssize_t write_data(void *ptr, size_t size, size_t nmemb, void *stream) {
    strcat(stream, (char *)ptr);
    // puts(stream);
    return size * nmemb;
}

char* fetch_csv() {
    CURL *curl;
    CURLcode result;

    static char buffer[20480];
    result = curl_global_init(CURL_GLOBAL_ALL);
    curl = curl_easy_init();

    if (curl)  {
        curl_easy_setopt(curl, CURLOPT_URL, "http://camp.banyuan.club/users.csv");//这是请求的url
        curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, write_data);// 数据请求到以后的回调函数
        curl_easy_setopt(curl, CURLOPT_WRITEDATA, buffer);// 选择输出到字符串
        result = curl_easy_perform(curl);// 这里是执行请求
        curl_easy_cleanup(curl);
    }

    curl_global_cleanup();    
    char *p = buffer;
    return p;
}

int main(int argc, char **argv) {
    char *buffer = fetch_csv();
    parse_csv_buf(buffer);
    return 0;
}
