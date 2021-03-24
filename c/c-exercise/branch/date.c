/*
    输入某年某月，打印出该月天数，注意大小月以及闰年。
*/
#include <stdio.h>

/**
 * 判断是否闰年
 * @param  year [年]
 * @return      [1为是，0为否]
 */
int isLeapYear(int year) {
    return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
}

int main(void) {
    int year, month;
    int day;

    printf("请输入年月：");
    scanf("%d %d", &year, &month);

    switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        day = 31;
        break;

    case 2:
        if (isLeapYear(year)) {
            day = 29;
        } else {
            day = 28;
        }

        break;

    case 4:
    case 6:
    case 9:
    case 11:
        day = 30;
        break;
    }

    printf("%d年%d月有%d天\n", year, month, day);

    return 0;
}