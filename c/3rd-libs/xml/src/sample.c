#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <libxml/xmlmemory.h>
#include <libxml/parser.h>

void parseUser(xmlDocPtr doc, xmlNodePtr cur) {
    cur = cur->xmlChildrenNode;

    while (cur != NULL) {
        if (xmlStrcmp(cur->name, (const xmlChar *)"name") == 0
                || xmlStrcmp(cur->name, (const xmlChar *)"gender") == 0
                || xmlStrcmp(cur->name, (const xmlChar *)"address") == 0) {

            xmlChar *value = xmlNodeListGetString(doc, cur->xmlChildrenNode, 1);

            if (!xmlStrcmp(cur->name, (const xmlChar *)"gender")) {
                if (!strcmp((const char *)value, "1")) {
                    printf("男");
                } else if (!strcmp((const char *)value, "0")) {
                    printf("女");
                }
            } else {
                printf("%s", value);
            }

            printf(" | ");
            xmlFree(value);
        }

        cur = cur->next;
    }

    printf("\n");
    return;
}

void parseDoc(char *docname) {

    xmlDocPtr doc;
    xmlNodePtr cur;

    doc = xmlParseFile(docname);

    if (doc == NULL) {
        printf("不能正确解析文档.\n");
        return;
    }

    cur = xmlDocGetRootElement(doc);

    if (xmlStrcmp(cur->name, (const xmlChar *) "users")) {
        printf("别骗我，根节点不是users.\n");
        xmlFreeDoc(doc);
        return;
    }

    // 查找第一层子节点，如果名字是user，执行parse处理。
    cur = cur->xmlChildrenNode;

    printf("----------------------—---\n");
    printf("| 姓 名 | 性 别 | 住 址 |\n");
    printf("----------------------—---\n");

    while (cur != NULL) {
        if ((!xmlStrcmp(cur->name, (const xmlChar *)"user"))) {
            parseUser(doc, cur);
            printf("----------------------—---\n");
        }

        cur = cur->next;
    }

    xmlFreeDoc(doc);
    return;
}

int main(int argc, char **argv) {

    char *docname;

    if (argc <= 1) {
        printf("用法: %s xml文档名\n", argv[0]);
        return (0);
    }

    docname = argv[1];
    parseDoc(docname);

    return (1);
}