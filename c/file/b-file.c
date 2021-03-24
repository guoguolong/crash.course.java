/**
 *  二进制文件读写，写入的时候，要去掉结尾的 \0
 *  否则，文本编辑打开后可能会误认为是二进制文件
 */
#include <stdio.h>
#include <stdlib.h>
#include <time.h>
int main() {
    FILE *fp = fopen("./book.data", "wb+");
    char buff[] = "China is not perfect.";
    fwrite(buff, sizeof(buff) - 1, 1, fp); // 这里的长度要减 1

    char read_buff[100];
    size_t size = 10;
    
    rewind(fp);  // 指针回到文件开始，是非常必要的.
    fread(read_buff, size, 5, fp);
    fclose(fp);

    printf("%s\n", read_buff);
    return 0;
}