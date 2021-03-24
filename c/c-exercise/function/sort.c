/*
设计一个函数，对任意n个整数排序，并在主函数中输入10个整数，调用此函数。
 */
#include <stdio.h>

void print(int array[], int length) {
    for (int i = 0; i < length; i++) {
        printf("%d   ", array[i]);
    }

    printf("\n");
}

void sort(int array[], int n) {
    int isSort;

    for (int i = 0; i < n - 1; i++) {
        isSort = 1;

        for (int j = 0; j < n - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                int temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                isSort = 0;
            }
        }

        if (isSort) {
            break;
        }
    }
}

int main(void) {
    int arr[] = {3, 7, 9, 4, 0, 5, 2, 1, 6, 8};

    printf("原数组：");
    print(arr, 10);

    sort(arr, 10);

    printf("排序后：");
    print(arr, 10);

    return 0;
}