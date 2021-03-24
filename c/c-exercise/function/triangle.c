/*
设计一个函数int func(int a,int b,int c)，
若a，b，c能构成等边三角形函数返回3，
若能构成等腰三角形函数返回2，
若能构成一般三角形函数返回1，
若不能构成三角形函数返回0。
 */
#include <stdio.h>

int func(int a, int b, int c) {
    int result = 0;

    if (a == b && b == c) {
        result = 3;
    } else if (a == b || b == c || a == c) {
        result = 2;
    } else if (a + b > c || a + c > b || b + c > a) {
        result = 1;
    }

    return result;
}

int main(void) {
    int a, b, c;

    puts("请输入三条边。");
    printf("a:"); scanf("%d", &a);
    printf("b:"); scanf("%d", &b);
    printf("c:"); scanf("%d", &c);

    int result = func(a, b, c);

    switch (result) {
    case 0:
        printf("这三条边不能构成三角形！\n");
        break;

    case 1:
        printf("这三条边能构成三角形！\n");
        break;

    case 2:
        printf("这三条边能构成等腰三角形！\n");
        break;

    case 3:
        printf("这三条边能构成等边三角形！\n");
        break;
    }

    return 0;
}