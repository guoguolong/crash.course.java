/*
    通过键盘输入n个整数并计算它们的和
 */
#include <stdio.h>

int main(void) {
    int i, n;
    int number;
    int sum = 0;

    printf("请输入您要输入的整数个数：");
    scanf("%d", &n);

    for (i = 0; i < n; i++) {
        printf("第%d个数：", i + 1);
        scanf("%d", &number);
        sum += number;
    }

    printf("以上%d个整数的和为%d\n", n, sum);
    
    return 0;
}