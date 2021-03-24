#include "product.h"

Product products[PRODUCT_MAX] = {
    {'A', "Juice", 10, 4},
    {'B', "Cola", 6, 2},
    {'C', "Tea", 5, 30},
    {'D', "Water", 8, 3},
    {'E', "Coffee", 7, 2},
};

Product* product_list() {
    return products;
}