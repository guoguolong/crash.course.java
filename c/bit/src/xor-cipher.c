#include <stdio.h>
#include <stdlib.h>
#ifndef _WIN32
char * itoa(char c, char* buffer, int radix) {
    if (radix == 2) {
        const int BYTE = sizeof(char) * 8;
        for (int i = BYTE - 1; i >= 0; --i) {
            short bit = c & 1;
            if (bit == 1) {
                buffer[i] = '1';
            } else {
                buffer[i] = '0';
            }
            c = c >> 1;
        }
        buffer[BYTE] = '\0';
    } else if (radix == 16) {
        sprintf(buffer, "%x", c);
    } else if (radix == 8) {
        sprintf(buffer, "%o", c);
    } else {
        sprintf(buffer, "%d", c);
    }
    return buffer;
}
#endif

int main(){
    char plaintext = 'a';  // 明文
    char secretkey = '!';  // 密钥
    char ciphertext = plaintext ^ secretkey;  // 密文
    char decodetext = ciphertext ^ secretkey;  // 解密后的字符
    char buffer[9];
    printf("            char    ASCII\n");

    // itoa()用来将数字转换为字符串，可以设定转换时的进制（基数）
    // 这里将字符对应的ascii码转换为二进制
    printf(" plaintext   %c     %7s\n", plaintext, itoa(plaintext, buffer, 8));
    printf(" secretkey   %c     %7s\n", secretkey, itoa(secretkey, buffer, 2));
    printf("ciphertext   %c     %7s\n", ciphertext, itoa(ciphertext, buffer, 2));
    printf("decodetext   %c     %7s\n", decodetext, itoa(decodetext, buffer, 2));
    return 0;
}