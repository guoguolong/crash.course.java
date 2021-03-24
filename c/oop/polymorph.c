#include <stdio.h>
#include <stdlib.h>

void base_dance(void *this) {
    printf("Animal Dance\n");
}

void base_jump(void *this) {
    printf("Animal Jump\n");
}

// 虚函数表结构
struct BaseVtbl {
    void(*dance)(void *);
    void(*jump)(void *);
};

// 基类
typedef struct _Animal {
    struct BaseVtbl *vptr; /*virtual table*/
} Animal;


/* global vtable for base */
struct BaseVtbl animal = {
    base_dance,
    base_jump
};

// 基类的构造函数
Animal * animal_factory() {
    Animal *aobj = (Animal *)malloc(sizeof(Animal));
    aobj->vptr = &animal;
    return aobj;
}

// 派生类
struct Tiger {
    Animal super;
    int high; /* derived members */
};

char* tiger_dance(void * this) {
    printf("Tiger Dance\n"); /* implementation of Tiger's dance function */
    return "Tango";
}

void tiger_jump(void * this) {
    struct Tiger* tobj = (struct Tiger *)this;
    printf("Tiger jump: %d\n", tobj->high); /* implementation of Tiger's jump function */
}

/* global vtable for Tiger */
struct BaseVtbl tiger_table = {
    (void *) tiger_dance, // TODO: 难点
    (void(*)(void *)) &tiger_jump,
};

// 派生类的构造函数
struct Tiger * tiger_factory(int h) {
    struct Tiger * tiger = (struct Tiger *)malloc(sizeof(struct Tiger));
    tiger->super.vptr = &tiger_table;
    tiger->high = h;
    return tiger;
}

int main(void) {
    Animal * animalObj = animal_factory();
    // 这里调用的是基类的成员函数
    animalObj->vptr->dance((void *)animalObj);
    animalObj->vptr->jump((void *)animalObj);

    struct Tiger * tigerObj = tiger_factory(99);
    animalObj = (Animal *)tigerObj; // 基类指针指向派生类, // TODO: 难点

    // 这里调用的其实是派生类的成员函数
    animalObj->vptr->dance((void *)animalObj);
    animalObj->vptr->jump((void *)animalObj);
    return 0;
}