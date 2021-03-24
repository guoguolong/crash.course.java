/*
    顺序表
*/
#include <stdio.h>
#include <stdlib.h>

#define SIZE 10
int currListSize;
char seqList[SIZE];

void insert(int pos, char val) {
    short originPos = pos;
    char originVal = val;

    if (currListSize == SIZE) {
        printf("x 空间已满，指定的 %c 不可添加.\n", val);
        return;
    }

    // 插入位置不能超出空间范围.
    pos = pos < 0 ? 0 : pos;
    pos = pos >= currListSize ? (currListSize - 1) : pos;

    char next;

    for (int i = pos; i < SIZE; ++i) {
        next = seqList[i];
        seqList[i] = val;
        val = next;
    }

    if (originPos == pos) {
        printf("√ 值 %c 实际插入到位置 %d.\n", originVal, pos);
    } else {
        printf("√ 值 %c 指定插入的位置 %d 超出范围，实际插入到末尾.\n", originVal, originPos);
    }

    currListSize++;
}

int search(char val) {
    int pos = -1;

    for (int i = 0; i < SIZE; ++i) {

        if (seqList[i] == val) {
            pos = i;
            break;
        }
    }

    return pos;
}

void delete(int pos) {
    int origin = pos;

    if (currListSize <= 0) {
        printf("x 空间已清空，不可删除.\n");
        return;
    }

    // 删除位置不能超出空间范围.
    pos = pos < 0 ? 0 : pos;
    pos = pos >= currListSize ? (currListSize - 1) : pos;

    // 将删除位置后续元素依次前移
    for (int i = pos; i < SIZE - 1 ; i++) {
        seqList[i] = seqList[i + 1];
    }

    if (origin == pos) {
        printf("√ 实际删除了位置 %d 的值.\n", pos);
    } else {
        printf("√ 指定删除位置 %d 超出范围，实际删除位置 %d 的值.\n", origin, pos);
    }

    currListSize--;
}

void update(int pos, int val) {
    if (pos >= currListSize || pos < 0) {
        printf("x 指定更新的位置 %d 超出空间范围\n", pos);
        return;
    }

    seqList[pos] = val;
    printf("√ 位置 %d 的值更新为 %c\n", pos, val);
}

void init(void) {
    seqList[0] = 'C';
    seqList[1] = 'a';
    seqList[2] = 't';
    seqList[3] = '.';

    currListSize = 4;
}

void display() {
    printf("△ 当前线性表：");

    for (int i = 0; i < currListSize; ++i) {
        printf("[%c]  ", seqList[i]);
    }

    if (currListSize <= 0) {
        printf("内容为空.");
    }

    printf("\033[0m\n\n");
}

int main() {
    init();

    insert(3, 'e');
    insert(5, 'g');
    insert(2, 'i');
    insert(1, 'T');
    insert(80, 'r'); // 位置过大，自动插入到最后
    insert(4, '=');
    insert(3, 'N'); // 超出尺寸，失败

    display();

    delete(6);
    delete(2);
    // delete(4);
    // delete(7);
    // delete(1);
    // delete(2);
    // delete(1);
    // delete(5);
    // delete(3);
    // delete(3);
    // delete(3);
    display();

    update(4, 'R');
    display();

    char toSeachedVal  = 'e';
    int pos = search('e');

    if (pos >= 0) {
        printf("%c 的位置: %d\n", toSeachedVal, pos);
    } else {
        printf("%c 不在表中.\n", toSeachedVal);
    }

    display();

    return 0;
}