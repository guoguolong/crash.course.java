/*
    判断一个数是否为质数/素数
 */
#include <stdio.h>

int main(void) {
    int count = 0;
    int num;

    printf("请输入一个整数：");
    scanf("%d", &num);

    for (int i = 2; i < num; i++) {
        if (num % i == 0) {
            count++;
            break;
        }
    }

    if (count) {
        printf("%d不是素数\n", num);
    } else {
        printf("%d是素数\n", num);
    }

    return 0;
}
