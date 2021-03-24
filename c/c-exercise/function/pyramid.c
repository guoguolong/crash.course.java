/*
设计一个函数void pyramid(int n)，n为正整数，输出n行数字金字塔，第n行显示n%10，每个数字后跟一个空格，如n=3如下所示：
  1
 2 2
3 3 3
 */
#include <stdio.h>

void pryramid(int n) {
    int i , j;

    for (i = 0; i < n; i++) {
        for (j = 0; j < n - 1 - i; j++) {
            printf(" ");
        }

        for (j = 0; j < i + 1; j++) {
            printf("%d", (i + 1) % 10);
            printf(" ");
        }
        printf("\n");
    }
}

int main(void) {
    int n ;

    printf("请输入金字塔的层数：");
    scanf("%d", &n);

    pryramid(n);

    return 0;
}