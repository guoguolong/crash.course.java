/*
    通过键盘输入两个实数，计算并显示和、差、积、商、平均数（小数点后保留两位）。
*/
#include <stdio.h>
int main(void) {
    double x, y;

    printf("实数x:"); scanf("%lf", &x);
    printf("实数y:"); scanf("%lf", &y);

    printf("x + y = %.2f\n", x + y);
    printf("x - y = %.2f\n", x - y);
    printf("x * y = %.2f\n", x * y);
    printf("x / y = %.2f\n", x / y);
    printf("x 和 y 的均值为：%.2f\n", (x + y) / 2);

    return 0;
}