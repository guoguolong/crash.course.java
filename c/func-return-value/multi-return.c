#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char prompt(char *title, char **items, short count) {
    puts(title);
    char *t = items[0];
    for (int i = 0; i < count; ++i) {
        printf("%s\n", items[i]);
    }
    puts("q. press q to exit.");
    printf("Your choice: ");

    char c = getchar(); // 读取回车符，并忽略之.
    getchar();
    return c;
}

char** get_menu_labels(int *count) {
    int length = 5;
    char **labels = malloc(sizeof(char *) * length);
    int k = length;
    while(k) {
        labels[length - k] = (char *)malloc(sizeof(char) * 20);
        sprintf(labels[length - k], "Coin $%d", length - k + 1);
        k--;
    }
    *count = length; // count = &length; 这样写是不对的
    return labels;
}

int main() {
    int count = 0;
    char **labels = get_menu_labels(&count);
    
    char c = prompt("(2) Which coin would you like to insert?", labels , count);
    
    free(labels);
    labels = NULL;

    if (c != 'q') {
        printf("You pressed %c\n", c);
    }
    return 0;
}