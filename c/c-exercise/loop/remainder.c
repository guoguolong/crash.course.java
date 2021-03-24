/*
    每瓶可乐3块钱，喝完后瓶子可以退回1块钱，输入金额，输出最多可以喝到多少瓶可乐
 */
#include <stdio.h>

int main(void) {
    int price = 3;/*每瓶可乐的价格*/
    int back = 1;/*每瓶退回的钱*/
    int momey = 0; /*初始金额*/
    int count = 0;/*能喝到的可乐数*/
    int temp = 0;/*每一次能够购买的可乐数*/
    int change = 0;/*每次购买后的找零*/

    printf("请输入金额："); scanf("%d", &momey);

    while (momey > price) {
        temp = momey / price;
        change = momey % price;
        count += temp;
        momey = change + back * temp;
    }

    printf("共可以喝到%d瓶可乐\n", count);

    return 0;
}