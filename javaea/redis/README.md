## 安装 Redis 服务器

Redis官网 https://redis.io/ 下载安装，macOS下可直接：
```
brew install redis
```

## 启动 Redis
macOS下运行：
```
brew services start redis
```
默认启动到 6379端口

## 访问 Redis
运行 
```
redis-cli
```

进入redis交互命令行，输入：
```
set address "Nanjing China"
get address
```

## Java客户端访问 Redis

Jedis ： 比较老牌的Java Redis客户端 https://github.com/xetorthio/jedis

## 运行代码

```
mvn compile exec:java -Dexec.mainClass="club.banyuan.redis.RedisClient"
```