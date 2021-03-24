/*
    1分钱、2分钱、5分钱组成1元钱的方式
*/
#include <stdio.h>
int main(void) {
    int n5, n2, k = 0;

    for (n5 = 100 / 5; n5 >= 0; n5--) {
        for (n2 = (100 - 5 * n5) / 2; n2 >= 0; n2--) {
            printf("5分%d个，2分%d个，1分%d个\n", n5, n2, 100 - 5 * n5 - 2 * n2); //输出结果
            k++;
        }
    }

    printf("共有%d种组合方式\n", k);
    return 0;
}