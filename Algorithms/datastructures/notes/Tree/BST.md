# BST

二叉排序树（Binary Sort Tree），又称二叉查找树（Binary Search Tree），亦称二叉搜索树

BST（Binary Search Tree）目的是为了提高查找的性能，其查找在平均和最坏的情况下都是logn级别，接近二分查找。

其特点是：每个节点的值大于其任意左侧子节点的值，小于其任意右节点的值

## BST的定义
BST是对于任意的node x，如果node y是node x的左边的节点, 那么Key(y) <= Key(x); 对于任意的node x， 如果node y 是node x的右边的节点， 那么key(y)>=key(x).
```
              50
            /    \
          35      58
        /   \    /   \
      30     40 55   60
```

二叉排序树或者是一棵空树，或者是具有下列性质的二叉树：
1. 若左子树不空，则左子树上所有节点的值均小于它的根节点的值；
2. 若右子树不空，则右子树上所有节点的值均大于它的根节点的值；
3. 左、右子树也分别为二叉排序树；
4. 没有键值相等的节点。

## BST操作
### BST插入
BST的插入过程非常简单，很类似与二叉树搜索树的查找过程。当需要插入一个新结点时，从根节点开始，迭代或者递归向下移动，直到遇到一个空的指针NIL，需要插入的值即被存储在该结点位置。这里给出迭代插入算法，递归方式的比较简单

二叉搜索树（BST）的插入操作的时间复杂度为O(n).
### BST删除
二叉搜索树的结点删除比插入较为复杂，总体来说，结点的删除可归结为三种情况：
1. 如果结点z没有孩子节点，那么只需简单地将其删除，并修改父节点，用NIL来替换z；
2.  如果结点z只有一个孩子，那么将这个孩子节点提升到z的位置，并修改z的父节点，用z的孩子替换z；
3.  如果结点z有2个孩子，那么查找z的后继y，此外后继一定在z的右子树中，然后让y替换z。
### 二叉树的遍历：
二叉搜索树的性质允许通过简单的递归算法来输出树中所有的关键字，有三种方式：先序遍历、中序遍历、后序遍历。其中，
- 先序遍历中输出根的关键字在其左右子树的关键字之前；
- 中序遍历中输出根的关键词位于其左子树的关键字和右子树的关键字之间；
- 后序遍历中输出根的关键字在左右子树的关键字之后。

## 参考资料
* https://blog.csdn.net/u013405574/article/details/51058133