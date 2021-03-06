# 集群

## 容器集群管理工具
集群管理工具是一个通过图形界面或者通过命令行来帮助你管理一组集群的软件程序。可以监控集群里的节点，配置services，管理整个集群服务器。集群管理可以从像发送工作到集群的低投入活动，到像负载均衡和可得性的高介入工作。
- Swarm
- Kubernetes
- Fleet
- Mesos
 

## Swarm－Docker
Docker Swarm让你聚集一些Docker引擎到一个虚拟引擎。在一个分布式应用程序环境中，计算元素必须也是可以被分布的。Swarm允许你在本地聚集Docker引擎。有了单个引擎，应用程序可以被扩展得更快，更有效率。Swarm能够扩容到50000个容器，1000个节点，同时当容器添加到集群的时候一点都不影响性能。

Swarm的角色相当于Docker API。任意可以操作Docker Daemon的工具都可以运用Docker Swarm的力量在很多主机上进行扩容。这些包括了像Flynn，Compose，Jenkins和Drone之类不同的主机。

Swarm也可以在后端运行Mesos或者Kubernetes的时候，被用来作为前端Docker客户端。Swarm在它的核心内部是一个简单的系统：每个主机运行一个Swarm代理与管理员。管理员处理容器的操作和调度。你可以在高可用状态下运行，它使用的是Consul，ZooKeeper或者etcd来发送容错events到后端系统。

Docker Swarm的一个优点就是，它是一个本地解决办法——你可以用Docker命令来实施Docker网络，插件和数据卷。Swarm管理员为leader选举创建一些master和特定的规定。这些条例实施在初级master故障的event里。Swarm调度器以各种各样的过滤包为特色，也包括紧密性和节点标签。过滤包能够附加容器到底层节点，资源得到更好的利用，性能得到提升。

## Fleet——Core OS
Core OS被创建来允许弹性扩容，允许管理计算能力。与其通过apt或者yum安装包，Core OS觉得倒不如利用Linux容器来处理更高抽象水平的service，提供好处给虚拟机，但是重点是在应用程序上而不是在完成虚拟化主机上。

Fleet能够在它分享个体初始系统的场景中将Core OS集群虚拟化。有了Fleet，每个机器都有一个代理和一个引擎。虽然单个引擎在集群中的任意节点都是活跃的，但是整个引擎社区一直都是活跃的。Fleet也可以处理套借口激活——容器可以被用来处理在特殊接口的连接。这就允许系统在需要的时候创建进程而不是等待需求的时候再去创建。

你们的开发运维人员将他们的时间重点花在管理作为service创建基础的容器上，同时不需要担心可能出现在单个机器上的潜在问题。Fleet确保在集群中的容器在操作状态。在发生机器故障的时候，容器会自动转移到健康的机器上。

## Kubernetes——Google
Kubernetes由谷歌开发，允许你在许多不同的主机上管理容器化应用程序。它提供工具让你部署，弹性扩容和维护应用程序。Kubernetes的开发者致力于保持它一直处于可访问、轻量级状态，并且易于使用。它可以在很多云环境中使用，包括私有云，公有云，多云端和混合云。Kubernetes可以在fly上进行自我修复，它以自动复制，自动再启动，自动定位为特色。它可以被不断扩展，它的特点是hookable，可插拔和模块化。它已经被完全开源，谷歌在2014年首次宣布开发它，第一版在2015夏天的时候发布。除了最近几年的收获，Kubernetes本身也是基于谷歌内部十多年使用容器技术的经验。

Kubernetes使用容器组pod，并且在同时被调度和部署。调度的基础配置是pods，因为相比于系统，单个容器会被当成是基础单元。大部分的pods最多有5个容器，这就组成了一个service。Pods会按照需求在现实生活中创建和删除，或许修改。

Kubernetes是一系列宽松的、可以在很多不同的工作负载下操作的松散耦合原语。它很大程度上依赖于Kubernetes API的可扩展性。API在内部使用，同样的，在外部被容器和拓展版本运行在系统中。目前，已经应用Kubernetes的项目和企业包括：Wikimedia Foundation从本土设置转移到Kubernetes；eBay在OpenStack上运行Kuberenetes和容器；Viacom用Kubernetes创建了一个先进的容器化基础设施。

## Mesos——Apache
Apache Mesos是一个集群管理工具，它着重于资源隔离，以及分布式网络或者在框架上分享应用程序，它的构想和开发源于加州大学伯克利分校。

一个开源系统，它会给管理员分享资源、提升集群利用率的功能。目前使用Apache Mesos的公司包括：Apple，Airbnb和Twitter。

Apache Mesos对于像CPU，Disk和RAM之类的计算元件来说是一个抽象层。它运行在每台机器上，其中一台机器被设计来作为master来运行其它机器。任意Linux程序都可以运行在Mesos上面。Mesos的一个优点就是应对故障，它会提供额外的安全层。

Mesos被设计来处理成千上万的主机，支持各种各样主机上的工作负载。在一个Mesos配置上，你可能会发现Docker和Hadoop并排运行。几年前，当系统支持Twitter的快速扩张的时候Mesos做到了可视化。
Mesos使用代理节点系统来运行任务。代理发送一张可得资源清单到master。在任意时刻，都会有成千上万的代理节点在进行操作。同样，master也会分布任务到代理上。
