#include <stdio.h>
#include <unistd.h>

int main(void) {
    char buf[80];
    getcwd(buf, sizeof(buf));
    printf("当前目录位于: %s\n", buf);    

    return 0;
}