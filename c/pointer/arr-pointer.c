#include <stdio.h>

int main(int argc, char const *argv[]) {
    int dim1_len = 4;
    char arr[][4] = {
        "Cor", "no", "Vir", "us"
    };
    // ptr是指针，可以用 p++这样的语法
    char (*ptr)[dim1_len] = arr;

    printf("size: %lu\n", sizeof(ptr));

    for (int i = 0; i < dim1_len; ++i) {
        // 每次 ptr++，地址前进一个一维数组的长度，即3个字节;
        printf("%p, %p = %s\n", arr[i], ptr, *ptr);
        ptr++;
    }
   return 0;
}