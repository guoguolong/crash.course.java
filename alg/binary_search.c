/*
    二分查找
*/
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define FAILED -1
#define CAPACITY 11

typedef struct _Table {
    int *p;
    int length;
} Table;

Table buildTable(int length) {
    Table table;
    table.p = (int *)malloc(length * sizeof(int));
    table.length = 0;

    for (int i = 0; i < length; i++) {
        srand((unsigned)(time(NULL) + i));
        table.p[i] = rand() % 100;
        table.length++;
    }

    return table;
}

void display(Table table) {
    for (int i = 0; i < table.length; i++) {
        printf("%d  ", table.p[i]);
    }

    printf("\n");
}

int search(Table table, int key) {
    int low = 0;
    int high = table.length - 1;
    int mid;

    while (low <= high) {
        mid = (low + high) / 2;

        if (key == table.p[mid]) {
            return mid;
        } if (key < table.p[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return FAILED;
}

int main(void) {
    int key;

    Table table = buildTable(CAPACITY);
    printf("数组元素：\n");
    display(table);

    printf("请输入要查找的关键字：\n");
    scanf("%d", &key);

    int idx = search(table, key);

    if (idx == FAILED) {
        puts("查找失败！");
    } else {
        printf("查找的关键字%d在第%d个\n", key, idx + 1);
    }

    return 0;
}