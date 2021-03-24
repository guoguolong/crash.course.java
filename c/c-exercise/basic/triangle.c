/*
    通过键盘输入三角形的底和高，求三角形的面积并显示。
*/
#include <stdio.h>

int main(void) {
    int bottom, height;

    printf("底:"); scanf("%d", &bottom);
    printf("高:"); scanf("%d", &height);

    printf("三角形的面积为：%.1f\n", (double)(bottom * height) / 2);

    return 0;
}