/*
    使用循环打印正三角形、倒三角形、菱形。
*/
#include <stdio.h>

int main(void) {
    int h;
    printf("请输入三角形的高："); scanf("%d", &h);

    int i;

    printf("正三角形：\n");

    /*正三角形*/
    for (i = 0; i < h; i++) {
        int blank = h - i - 1;

        for (int j = 0; j < blank; j++) {
            putchar(' ');
        }

        for (int j = 0; j < 2 * i + 1; j++) {
            putchar('*');
        }

        printf("\n");
    }

    printf("倒三角形：\n");

    for (i = 0; i < h; i++) {
        int blank = i ;

        for (int j = 0; j < blank; j++) {
            putchar(' ');
        }

        for (int j = 0; j < 2 * (h - i) - 1; j++) {
            putchar('*');
        }

        printf("\n");
    }

    printf("菱形：\n");

    for (i = 0; i < 2 * h - 1; i++) {

        int blank = 0;
        int star = 0;

        if (i < h) {
            blank = h - i - 1;
            star = 2 * i + 1;
        } else {
            blank = i - h + 1;
            star = 2 * (2 * h - i - 1) - 1;
        }

        for (int j = 0; j < blank; j++) {
            putchar(' ');
        }

        for (int j = 0; j < star; j++) {
            putchar('*');
        }

        printf("\n");
    }

    return 0;
}