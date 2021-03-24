/*
    有一个数列：8,54,27,11,23,344,82，将这8个元素按从小到大的顺序排列。
 */
#include <stdio.h>

int main(void) {
    int array[] = {8, 54, 27, 11, 23, 344, 82};

    int length = sizeof(array) / sizeof(int);

    for (int i = 0; i < length - 1; i++) {
        for (int j = 0; j < length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                int temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    for (int i = 0; i < length; i++) {
        printf("%d   ", array[i]);
    }

    printf("\n");

    return 0;
}