/*
 * 将浮点数存储为二进制文件，再用sublime text打开，
 * 验证二进制值是不是符合IEEE规范定义的单精度浮点数规格？
 */

#include <stdio.h>

int main(void) {
    FILE *fp;
    fp = fopen("./number.dat", "wb");
    float f  = -19.625625625L;
    fwrite(&f, sizeof(float), 1, fp);
    fclose(fp);

    return 0;
}