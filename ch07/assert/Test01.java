/*
 * Copyright (C) 2018-2019 Banyuan All rights reserved
 */
/**
 * 断言测试
 * @version 1.0
 * @author Yang Wen
 *
 */
public class Test01 {
    /**
    * 断言的使用方法一
    */
    public static void useAssertExt1() {
        boolean isOk = 1 > 2;
        assert isOk;
        System.out.println("程序正常");
    }
    /**
     * 断言的第二个例子
     */
    public static void useAssertExt2() {
        boolean isOk = 1 > 2;

        try {
            assert isOk : "程序错误";
            System.out.println("程序正常");
        } catch (AssertionError err) {
            System.out.println(err.getMessage());
        }
    }
    public static void main(String[] args) {
//      useAssertExt1();
        useAssertExt2();
    }
}
