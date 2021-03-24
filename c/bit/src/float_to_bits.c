#include <stdio.h>
#include <stdlib.h>

// 浮点数结构体
typedef struct {
    unsigned int nMant : 23;  //尾数部分
    unsigned int nExp : 8;  //指数部分
    unsigned int nSign : 1;  //符号位
} FP_SINGLE;


void _print_bits(int len, char bits[]) {
    for (int i = len; i > 0; i--) {
        if (i % 4 == 0 && i > 0) {
            printf(" ");
        }
        printf("%d", bits[i - 1]);
    }
}

void itoa_linux(int len, int numeric) {
    char bits[len];

    for (int i = 0; i < len; i++) {
        bits[i] = numeric & 1;
        numeric = numeric >> 1;
    }

    _print_bits(len, bits);
}

int main() {
    char strBin[33] = { 0 };
    // float f = -19.625L;
    float f = -19.625625625L;
    FP_SINGLE *p = (FP_SINGLE*)&f;
    printf("float %f : ", f);
    itoa_linux(1, p->nSign);
    printf(",");
    itoa_linux(8, p->nExp);
    printf(",");
    itoa_linux(23, p->nMant);
    printf("\n");
  
    return 0;
}