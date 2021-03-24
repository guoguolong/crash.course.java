/*
 * 
 * 使用gcc扩展支持lambda表达式（不能在macOS下运行，不支持clang）
 *  - Statements and Declarations in Expressions：https://gcc.gnu.org/onlinedocs/gcc-8.1.0/gcc/Statement-Exprs.html
 *  - Nested Functions：https://gcc.gnu.org/onlinedocs/gcc-8.1.0/gcc/Nested-Functions.html
 */

#include <stdio.h>

#define LAMBDA(return_type, function_body) \
({return_type lambda_func function_body lambda_func;})

int main( int argc, const char **argv) {
    printf( "Sum = %d\n", LAMBDA(int, (int x, int y){ return x + y; })(3, 4) );
    return 0;
}
