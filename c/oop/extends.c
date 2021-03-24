#include <stdio.h>

typedef struct _Animal {
    char *family; // 科
    char *name;
} Animal;

typedef struct _Tiger {
    Animal parent;
    int age;
} Tiger;

int main() {
    Tiger tiger = { "猫科", "跳跳虎", 12 };

    printf("I'm %s，%d years old，belong with %s.\n", tiger.parent.name, tiger.age, tiger.parent.family);
    return 0;
}