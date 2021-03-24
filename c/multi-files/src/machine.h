#include "product.h"

typedef struct _Machine {
    int revenue;
    int coins;
    char chose_product_code;
} Machine;

extern Machine machine;
extern void machine_init(void);
extern int purchase(Product prd, int qty);