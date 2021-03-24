#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main(int argc, char const *argv[])
{
    printf("strlen(\"abcde\"): %ld\n", strlen("abcde"));

    char s0[] = {'a','b','c','d', 'e', '\0'};
    char *s = s0;
    char s1[6];
    s1[0] = 'a';
    s1[1] = 'b';
    s1[2] = 'c';
    s1[3] = 'd';
    s1[4] = 'e';
    s1[5] = '\0';

    printf("s: %ld\n", strlen(s));
    printf("strlen s1: %ld\n", strlen(s1));
    printf("size s1: %ld\n", sizeof(s1));
    char *x = (char*)malloc(2000);
    printf("1 strlen(x):: %ld\n", strlen(x));
    printf("1 sizeof(x):: %ld\n", sizeof(x));
    sprintf(x, "%s", s);
    printf("2 strlen(x):: %ld\n", strlen(x));
    printf("2 sizeof(x):: %ld\n", sizeof(x));

    printf("s: %s\n", s);
    printf("s1: %s\n", s1);

   return 0;
}