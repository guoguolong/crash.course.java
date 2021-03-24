package club.banyuan.redis;

import redis.clients.jedis.Jedis;

/**
 * @author Allen Guo
 *
 */
public class RedisClient {
    public static void main(String[] args) {
        Jedis jedis = new Jedis("localhost");
        jedis.set("name", "Bill Gates");
        System.out.println("Name is " + jedis.get("name"));
    }
}