#include <stdio.h>
#include "machine.h"
#include "product.h"

int main() {
    machine_init();

    Product prd = {'C', "Tea"};
    int can_buy = purchase(prd, 20);

    if (can_buy) {
        printf("货币充足，可以购买\n");
    } else {
        printf("货币不够，不可以购买\n");
    }

    return 0;
}