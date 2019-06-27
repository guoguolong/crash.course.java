/**
 * 模拟扔硬币的结果
 *Copyright (C) 2018-2019 Banyuan All rights reserved
 */
import java.util.Random;
public class ThrowCron {

    public static void main(String[] args) {
        Random num = new Random();
        int a = num.nextInt(100);
        switch (a % 2) {
        case 0:
            System.out.println("正面");
            break;
        case 1:
            System.out.println("反面");
            break;
        }
    }

}