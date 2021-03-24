#include <stdio.h>

long factorial(int n) {
    if (n <= 0) return 1;

    int result = 1;
    for(int i = 1; i <= n; i++) {
        result = i * result;
    }

    return result;
}

int main(int argc, char const *argv[]) {
    int n; // 定义
    printf("Please input a number: ");
    scanf("%d", &n);
    printf("The factorial value of %d is %ld\n", n, factorial(n));
    return 1;
}