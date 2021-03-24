#include <stdio.h>
int a = 1, b = 2;

void funcA() {
    printf("a:%p\n", &a);
}

void funcB() {
    printf("b:%p\n", &b);
}

void funcC(int z) {
    printf("z:%p\n", &z);
}

int main(void) {

    int c = 3;
    auto int d = 4;
    char e = 'e';
    float f = 1.098;
    int g = 10;
    static int s = 100;

    funcA();
    funcB();
    printf("c:%p\n", &c);
    funcC(c);

    printf("d:%p\n", &d);
    printf("e:%p\n", &e);
    printf("f:%p\n", &f);
    printf("g:%p\n", &g);

    printf("s:%p\n", &s);

    return 0;
}