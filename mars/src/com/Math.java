package com;

public class Math {
    public String getGreeting() {
        return "Hello Math.";
    }

    public static void main(String[] args) {
        System.out.println(new Math().getGreeting());
    }
}
