#include <stdio.h>
#define LAMBDA( return_type, function_body) \
       ({return_type LAMBDA_func function_body LAMBDA_func;})

int main( int argc, const char **argv){
    int count = 1;
    printf( "Sum = %d\n", LAMBDA( int, (int x, int y){ count++; return x + y; })(count, 4) );
    printf( "count = %d\n", count);
    return 0;
}