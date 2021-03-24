/*
    通过键盘输入一个圆的半径（浮点型），求出圆的周长和面积并显示（小数点后取四位，圆周率取3.14）。
*/
#include <stdio.h>

int main(void) {
    double radius;

    printf("半径：");
    scanf("%lf", &radius);

    printf("该圆的周长是：%.4f，面积是：%.4f\n",
           2 * 3.14 * radius, 3.14 * radius * radius);

    return 0;
}