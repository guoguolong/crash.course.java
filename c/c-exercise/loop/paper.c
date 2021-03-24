/*
    一张纸的厚度大约是0.08mm，对折多少次之后能达到珠穆朗玛峰的高度（8848.13米）
*/
#include <stdio.h>

int main(void) {
    double height = 0.08;
    int i;

    do {
        height = height * 2;
        i++;
    } while (height <= 8848130);

    printf("一张纸对折%d次之后能达到珠穆朗玛峰的高度\n", i);

    return 0;
}