/*
 * Copyright (C) 2018-2019 Banyuan All rights reserved
 */
/**
 * 模拟扔硬币的结果
 * @version 1.0
 * @author Yang Wen
 *
 */
public class Message {
    public static void main(String[] args) {
        if (args.length == 0 || args[0].equals("-h")) {
            System.out.print("Hello,");
        } else if (args[0].equals("-g")) {
            System.out.print("Goodbye,");
        }

        // print the other command-line arguments
        for (int i = 1; i < args.length; i++) {
            System.out.print(" " + args[i]);
        }

        System.out.println("!") ;
    }
}