/*
    输入两个数，计算他们的最小公倍数和最大公约数。
*/
#include <stdio.h>

int main(void) {
    int max, min;

    int p, r;

    puts("请输入两个正整数：")
    scanf("%d %d", &max, &min);

    if (max < min) {
        int temp = max;
        max = min;
        min = temp;
    }

    p = max * min;

    while (min != 0) {
        r = max % min;
        max = min;
        min = r;
    }

    printf("%d%d%d%d\n", max, min, max, p / max);
    return 0;
}