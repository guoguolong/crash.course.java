/**
 *  整数算术右移1位和除以2的测试
 *
 */
#include <stdio.h>

int main(void) {
    char num = -103; // 10011001

    printf("%d / 2 = %d\n", num, num / 2);
    printf("%d >> 2 = %d\n", num, num >> 1);
}