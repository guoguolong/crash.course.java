/*
    本金10000元存入银行，年利率是千分之三，每过一年将本金和利息之和作为新的本金，计算5年后可获取多少元？
*/
#include <stdio.h>

int main(void) {
    int money = 10000;
    int all = money;

    int i = 1;

    do {
        all = all * (1 + 0.003);
        i++;
    } while (i <= 5);


    printf("本金%d元存入银行5年可获取本息和为：%d\n", money, all);

    return 0;
}