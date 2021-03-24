#include<stdio.h>
 
#define N 100

long fib_func(int n) {
    long i, fib[N]; // 定一个数组

    fib[0] = 0; fib[1] = 1;  // 迭代算法控制      

    for(i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib[n];
}

int main() {
    int n; // 定义
    printf("Please input a number: ");
    scanf("%d", &n); // 输入
    printf("The Fib value of %d is %ld\n", n, fib_func(n));
    return 1;
}