#include <stdio.h>
#include <stdlib.h>
#include <cjson/cJSON.h>

char* getJson(const char *filename) {
    FILE *fp = fopen(filename, "r");

    if (fp == NULL) {
        return NULL;
    }

    fseek(fp, 0, SEEK_END);
    long length = ftell(fp);

    char *p = (char *)malloc(sizeof(char) * length);

    rewind(fp);
    fread(p, sizeof(char), length, fp);
    fclose(fp);

    return p;
}

int main(int argc, char **argv) {
    if (argc <= 1) {
        printf("Usage: %s json_file\n", argv[0]);
        return (0);
    }

    char *jsonPtr = getJson(argv[1]);

    if (jsonPtr == NULL) {
        printf("\a无法打开文件。%s\n", argv[1]);
        return (0);
    }

    cJSON *json = cJSON_Parse(jsonPtr);

    const cJSON *user = NULL;
    cJSON_ArrayForEach(user, json) {
        cJSON *name = cJSON_GetObjectItemCaseSensitive(user, "name");
        cJSON *age = cJSON_GetObjectItemCaseSensitive(user, "age");
        cJSON *gender = cJSON_GetObjectItemCaseSensitive(user, "gender");
        cJSON *addr = cJSON_GetObjectItemCaseSensitive(user, "address");

        printf("%s: ", name->valuestring);
        printf("%d岁, ", age->valueint);

        if (gender->valueint == 1) {
            printf("小伙子");
        } else {
            printf("大姑娘");
        }

        printf(", 来自 %s.", addr->valuestring);
        puts("");
    }

    free(jsonPtr);

    return 0;
}