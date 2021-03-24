#ifndef __PRODUCT_H__
#define __PRODUCT_H__
typedef struct _Product {
    char code;
    char *name;
    int price;
    int stock;
} Product;

#define PRODUCT_MAX 5
extern Product* product_list(void);
#endif