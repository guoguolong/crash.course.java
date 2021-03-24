/*
设计一个函数int days(int year,int month,int day)，当用户输入年月日时，计算出该日期是这一年的第几天。
 */
#include <stdio.h>

int isLeapYear(int year) {
    return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
}

int days(int year, int month, int day) {
    int days = day;

    switch (month - 1) {
    case 11:
        days += 30;

    case 10:
        days += 31;

    case 9:
        days += 30;

    case 8:
        days += 31;

    case 7:
        days += 31;

    case 6:
        days += 30;

    case 5:
        days += 31;

    case 4:
        days += 30;

    case 3:
        days += 31;

    case 2:
        if (isLeapYear(year)) {
            days += 29;
        } else {
            days += 28;
        }

    case 1:
        days += 31;
        break;
    }

    return days;
}

int main(void) {
    int y, m, d;

    printf("请输入年月日：\n");
    scanf("%d %d %d", &y, &m, &d);

    printf("%d年%d月%d日是该年的第%d天\n", y, m, d, days(y, m, d));

    return 0;
}