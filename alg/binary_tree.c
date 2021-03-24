/*
    二叉树链式存储
*/
#include <stdio.h>
#include <stdlib.h>

#define LEFT_CHILD 0
#define RIGHT_CHILD 1

typedef struct _TreeNode {
    char data;
    struct _TreeNode *lchild, *rchild;
} TreeNode;

TreeNode *addChildNode(TreeNode *parentNode, char val, int isRight) {
    TreeNode *newNode = (TreeNode *)malloc(sizeof(TreeNode));
    newNode->data = val;
    newNode->lchild = NULL;
    newNode->rchild = NULL;

    if (isRight) {
        parentNode->rchild = newNode;
    } else {
        parentNode->lchild = newNode;
    }

    return newNode;
}

/* 先(前)序遍历： 先遍历所有子树，再遍历当前节点 */
void iterate(TreeNode *node) {
    if (node->lchild != NULL) {
        iterate(node->lchild);
    }

    if (node->rchild != NULL) {
        iterate(node->rchild);
    }

    printf("%c ", node->data);
}

TreeNode* search(TreeNode *node, char data) {
    TreeNode* child;
    if (node->lchild != NULL) {
        child = search(node->lchild, data);
        if (child) return child;
    }

    if (node->rchild != NULL) {
        child = search(node->rchild, data);
        if (child) return child;
    }

    if (data == node->data) {
        return node; 
    }

    return NULL;
}

/*
         [A]
        /   \
       /     \
      /       \
    [B]      [C]
    / \       /
  [D] [E]   [F]
*/
TreeNode *buildTree() {
    TreeNode *root = (TreeNode *)malloc(sizeof(TreeNode));
    root->data = 'A';
    root->lchild = NULL;
    root->rchild = NULL;

    TreeNode *nodeB = addChildNode(root, 'B', LEFT_CHILD);
    TreeNode *nodeD = addChildNode(nodeB, 'D', LEFT_CHILD);
    TreeNode *nodeE = addChildNode(nodeB, 'E', RIGHT_CHILD);

    TreeNode *nodeC = addChildNode(root, 'C', RIGHT_CHILD);
    TreeNode *nodeF = addChildNode(nodeC, 'F', RIGHT_CHILD);

    return root;
}

int main(void) {
    TreeNode *tree = buildTree();

    printf("前序遍历树：{ ");
    iterate(tree);
    printf("}\n");

    char data = 'X';
    TreeNode *node = search(tree, data);

    if (node) {
        printf("√ 从树中找到了元素 %c\n", data);
    } else {
        printf("ⓧ  树中没发现元素 %c\n", data);
    }
 
    return 0;
}
