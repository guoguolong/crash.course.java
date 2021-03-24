#include <stdio.h>

int main(int argc, char const *argv[]) {
    char *p[] = {
        "ab","cd","chenglish"
    };
    printf("size: %lu\n", sizeof(p) / sizeof(char *));

    printf("%s\n", p[0]);
    printf("%s\n", p[1]);
    printf("%s\n", p[2]);
    // p++; // 报错： cannot increment value of type 'char *[3]'

    // p是数组，不是指针，不能用 p++这样的语法，所以最好将 p 变量修改为 arr，让人不易误解.
    return 0;
}