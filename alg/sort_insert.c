/*
    插入排序
*/
#include <stdio.h>

#define NUMBER 9

void display(int a[], int length, int pos) {
    for (int j = 0; j < length; j++) {
        if (j == pos + 1) {
            printf("[%d]  ", a[j]);
        } else {
            printf(" %d   ", a[j]);
        }
    }

    printf("\n");
}

void insertSort(int table[], int length) {
    for (int i = 1; i < length; i++) {
        int j = i - 1;
        int data = table[i];

        while (j >= 0 && table[j] > data) {
            table[j + 1] = table[j];
            j--;
        }

        table[j + 1] = data;
        display(table, length, i);
    }
}

int main(void) {
    int table[NUMBER] = {3, 1, 7, 5, 2, 4, 9, 6, 8};
    display(table, NUMBER, 0);
    insertSort(table, NUMBER);
    return 0;
}