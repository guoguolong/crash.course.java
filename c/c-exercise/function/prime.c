/*
设计一个函数，求输入的整数以内的所有素数（只能被1和自己整除）
 */
#include <stdio.h>

int isPrimeNumber(int number) {
    int prime = 1;
    int i ;

    for (i = 2; i < number; i++) {
        if (number % i == 0) {
            prime = 0;
            break;
        }
    }

    return prime;
}
int main(void) {
    int num;
    printf("请输入一个正整数：");
    scanf("%d", &num);

    if (isPrimeNumber(num)) {
        printf("该整数是素数\n");
    } else {
        printf("该整数不是素数\n");
    }

    return 0;
}