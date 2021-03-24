#include <stdio.h>

typedef void (*ProductList)(int);
typedef void (*ProductDetail)(char *);

void product_list(int length) {
    printf("Total products: %d\n", length);
    return;
}

void product_detail(char* code) {
    printf("Product code : %s\n", code);
    return;
}

typedef struct TypeProductService {
    char *name;
    ProductList getList;
    ProductDetail getDetail;
} ProductService;

ProductService makePS() {
    ProductService srv = {"MP3", product_list, product_detail};
    return srv;
}

int main() {
    ProductService srv = makePS();
    srv.getList(8987);
    srv.getDetail("MP3");
    return 0;
}