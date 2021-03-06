# FTP文件传输协议
* https://blog.csdn.net/andrewniu/article/details/81181696
FTP工作在TCP/IP模型的应用层，基于的传输协议是TCP，FTP客户端和服务器之间的连接是可靠的，面向连接的，为数据的传输提供了可靠的保证。

 

## FTP的主要特征：

1. 控制连接是建立在客户协议解释器和服务器协议解释器之间用于交换命令与应答的通信链路。

2. 数据连接是传输数据的全双工连接。传输数据可以发生在服务器数据传输过程DTP和客户DTP之间，也可以发生在两个服务器的DTP之间。

## 文件类型：

1. ASCII码文件类型（默认选择），以NVT ASCII码形式通过数据连接传输；

2. EBCDIC文件类型。该文本文件传输方式要求两端都是EBCDIC系统；

3. 图像文件类型（也成为二进制文件类型），数据发送形式呈现为一个连续的比特流。

## 数据结构：

1. 文件结构（File Structure）字节流，无结构；

2. 记录结构（Record Structure）文件被划分为记录，用于文本文件；

3. 页结构（Page Structure）文件被划分为页，每页有页号和页头。可以进行随机存取或顺序存取。

 

## 传输方式：

FTP的传输模式有流模式、块模式和压缩模式：

1. 流模式：数据以字节流的形式传送

    -记录结构

    -文件结构

2. 块模式：文件以块的形式传送，块带有自己的头部分。头字节包括16位计数域和8位描述子代码

3. 压缩模式：压缩模式中，因为数据是压缩过的，对于增加带宽有很多好处。