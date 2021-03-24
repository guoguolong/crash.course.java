/**
 *  二进制文件读写，写入的时候，要去掉结尾的 \0
 *  否则，文本编辑打开后可能会误认为是二进制文件
 */
#include <stdio.h>
#include <stdlib.h>
#include <time.h>
int main() {
    FILE *fp = fopen("./book.data", "w+");
    char buff[] = "China is not perfect.";
    fprintf(fp, "%s", buff);
    fprintf(fp, "%s", "America is great.");

    char read_buff1[100];
    char read_buff2[100];
    rewind(fp);
    fscanf(fp, "%s %s", read_buff1, read_buff2);
    
    fclose(fp);

    printf("%s %s\n", read_buff1, read_buff2);
    return 0;
}