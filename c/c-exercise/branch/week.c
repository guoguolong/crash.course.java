/*
    请输入星期几的第一个字母来判断一下是星期几，如果第一个字母一样，则继续判断第二个字母。
*/
#include <stdio.h>

int main(void) {
    char first, second;

    printf("请输入第一个字母：");
    scanf("%c", &first);

    switch (first) {
    case 'M':
    case 'm':
        printf("周一 Monday\n");
        break;

    case 'T':
    case 't':
        printf("请输入第二个字母：");
        scanf(" %c", &second);

        if (second == 'u') { printf("周二 Tuesday\n"); }
        else if (second == 'h') { printf("周四 Thursday\n"); }
        else { printf("Error Input!\n"); }

        break;

    case 'W':
    case 'w':
        printf("周三 Wednesday\n");
        break;

    case 'F':
    case 'f':
        printf("周五 Friday\n");
        break;

    case 'S':
    case 's':
        printf("请输入第二个字母：");
        scanf(" %c", &second);

        if (second == 'a') { printf("周六 Saturday\n"); }
        else if (second == 'u') { printf("周日 Sunday\n"); }
        else { printf("Error Input!\n"); }

        break;

    default:
        printf("Error Input!\n");
        break;
    }

    return 0;
}