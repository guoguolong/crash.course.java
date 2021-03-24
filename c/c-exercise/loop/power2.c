/*
    2的N次幂
 */
#include <stdio.h>
#define N 16

int main(void) {
    int n;
    int val = 1;

    printf(" n       2^n\n");
    printf("============\n");

    for (n = 0; n < N; n++) {
        printf("%3d   %6d\n", n, val);
        val = 2 * val;
    }

    return 0;
}