POSIX 表示可移植操作系统接口（Portable Operating System Interface of UNIX，缩写为 POSIX ），POSIX 标准定义了操作系统应该为应用程序提供的接口标准。

POSIX 标准意在期望获得源代码级别的软件可移植性。换句话说，为一个POSIX兼容的操作系统编写的程序，应该可以在任何其它的 POSIX 操作系统（即使是来自另一个厂商）上编译执行。

## 简单总结：
完成同一功能，不同内核提供的系统调用（也就是一个函数）是不同的，例如创建进程，linux 下是 fork 函数，windows 下是 creatprocess 函数。好，我现在在 linux 下写一个程序，用到fork函数，那么这个程序该怎么往windows上移植？我需要把源代码里的 fork 通通改成 creatprocess，然后重新编译.

POSIX 标准的出现就是为了解决这个问题。linux 和 windows 都要实现基本的 POSIX 标准，linux 把 fork 函数封装成 posix_fork（随便说的），windows把creatprocess函数也封装成 posix_fork，都声明在unistd.h里。这样，程序员编写普通应用时候，只用包含 unistd.h，调用 posix_fork 函数，程序就在源代码级别可移植了。

