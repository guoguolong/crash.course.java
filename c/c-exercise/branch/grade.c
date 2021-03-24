/*
    输入学生成绩，如果大于等于80输出“优秀”，70～79输出“良好”，60～69输出“及格”，低于60输出“不及格”。
*/
#include <stdio.h>

int main(void) {
    double score;

    printf("请输入学生成绩：");
    scanf("%lf", &score);

    if (score >= 80) {
        printf("优秀\n");
    } else if (score >= 70) {
        printf("良好\n");
    } else if (score >= 60) {
        printf("及格\n");
    } else {
        printf("不及格\n");
    }

    return 0;
}