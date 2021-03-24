/*
    有n个人围成一圈,顺序排号,从第一个开始报数(从1到3报数),凡报到3的人退出圈子,问最后留下的是原来第几号的那位。
 */
#include <stdio.h>
#define N 100

int main(void) {
    int n, i, m = 0, k = 0;
    int arr[N];

    do {
        printf("Please input n:");
        scanf("%d", &n);
    } while (n <= 0 || n > N);

    for (i = 0; i < n; i++) {
        arr[i] = i + 1;
    }

    do {
        for (i = 0; i < n; i++) {
            if (arr[i] != 0) {
                k++;

                if (k % 3 == 0) {
                    arr[i] = 0;
                    m++;
                }

                if (m == n - 1) {
                    break;
                }
            }
        }
    } while (m < n - 1);

    for (i = 0; i < n; i++) {
        if (arr[i] != 0) {
            printf("The last number is %d\n", arr[i]);
        }
    }

    return 0;
}