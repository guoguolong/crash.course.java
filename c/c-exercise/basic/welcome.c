/*
    在控制台上分两行打印“XXX同学你好！”“欢迎来到半圆学社！”（用两种方法实现）
*/
#include <stdio.h>

int main(void) {
    /*1*/
    printf("XXX同学你好！\n欢迎来到半圆学社！\n");

    /*2*/
    puts("XXX同学你好！");
    puts("欢迎来到半圆学社！");

    return 0;
}