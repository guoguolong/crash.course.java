/*
    输入三个正整数，将这三个数从小到大输出。
*/
#include <stdio.h>

int main(void) {
    int x, y, z;

    int temp;

    printf("正整数1:"); scanf("%d", &x);
    printf("正整数2:"); scanf("%d", &y);
    printf("正整数3:"); scanf("%d", &z);

    if (x > y) {
        temp = x;
        x = y;
        y = temp;
    }

    if (y > z) {
        temp = y;
        y = z;
        z = temp;

        if (x > y) {
            temp = x;
            x = y;
            y = temp;
        }
    }

    printf("从小到大排列为：%d %d %d\n", x, y, z);

    return 0;
}