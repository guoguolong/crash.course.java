#include <stdio.h>
#include "machine.h"

Machine machine;

void machine_init() {
    machine.revenue = 0;
    machine.coins = 200;
    machine.chose_product_code = '*';
}

/* 如果指定产品的库存充足返回1， 否则返回0 */
int purchase(Product prd, int qty) {
    int can_buy = 1;

    Product *p = product_list();
    for (int i = 0; i < PRODUCT_MAX; ++i) {
        if (prd.code == p->code && machine.coins < p->price * qty) {
            can_buy = 0; break;
        }
        p++;
    }

    return can_buy;
}
