#include <stdio.h>

int main(int argc, char const *argv[])
{
    char *ptr = "this is a test";

    printf("ptr: %p\n", ptr);
    printf("sizeof(ptr): %ld\n", sizeof(ptr));
    return 0;
}