#include <stdio.h>
#include <cjson/cJSON.h>

int main(void) {
    cJSON *json = cJSON_Parse("{\"name\":\"Allen\"}");
    printf("%s\n", cJSON_Print(json));

    printf("%s=", json->child->string);
    printf("%s\n", json->child->valuestring);
    return 0;
}