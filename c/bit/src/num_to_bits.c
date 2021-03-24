/**
 *  给定一个8bit十进制数（char），剖析对应的二进制位数字串打印
 *
 */
#include <stdio.h>

void _print_bits(int len, char bits[]) {
    for (int i = len; i > 0; i--) {
        if (i % 4 == 0 && i > 0) {
            printf(" ");
        }
        printf("%d", bits[i - 1]);
    }
    printf("\n");
}

void _print_bits_memory (int len, char bits[]) {
    int steps = len / 8;
    for (int i = 0; i < steps; ++i) {
        int pos = (i + 1) * 8 - 1;

        int count = 0;
        for(;;) {
            printf("%d", bits[pos]);
            pos--;
            count++;
            if (count % 4 == 0 && count > 0) {
                printf(" ");
            }
            if (count == 8) break;
        }
    }
    printf("\n");
}

void float_to_bits(void *float_ptr) {
    float fnumber = *(float *)float_ptr;
    int BYTE = 8;
    int size = sizeof(float);
    int len = size * BYTE;

    char bits[len];

    char *p = (char *)float_ptr;
    for (int i = 0; i < size; i++) {
        char numeric = *p;
        for (int j = 0; j < BYTE; j++) {
            int k = i * BYTE + j;
            bits[k] = numeric & 1;
            numeric = numeric >> 1;
        }
        p++;
    }

    printf("float %f 的二进制数：", fnumber);
    _print_bits(len, bits);

    printf("float %f 在内存中的存储（小端）：", fnumber);
    _print_bits_memory(len, bits);

}

void short_to_bits(short numeric) {
    int len = sizeof(short) * 8;
    char bits[len];

    for (int i = 0; i < len; i++) {
        bits[i] = numeric & 1;
        numeric = numeric >> 1;
    }

    printf("short %d 在内存的存储：", numeric);
    _print_bits(len, bits);
}

void char_to_bits(char numeric) {
    int len = sizeof(char) * 8;
    char bits[len];

    for (int i = 0; i < len; i++) {
        bits[i] = numeric & 1;
        numeric = numeric >> 1;
    }

    printf("char %d 在内存的存储：", numeric);
    _print_bits(len, bits);
}

int main(void) {
    char_to_bits('A');
    char_to_bits(-12);
    short_to_bits(-12);


    float f = 19.625f;
    float_to_bits(&f);

    printf("\n");
}