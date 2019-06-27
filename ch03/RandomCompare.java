import java.util.Random;
/**
 * 写一个程序，产生25个int类型的随机数，对于每一个随机数，
 * 使用if-else语句来将其分类为大于、小于，或等于紧随它而随机产生的值。
 */
public class RandomCompare {
    static int greaterNum = 0;
    static int lessNum = 0 ;
    static int equalNum = 0;

    public static void main(String[]args){
        Random random = new Random();
        int[] numList = new int[25];
        int i = 0;
        numList[i]=random.nextInt();
        System.out.println("随机数："+numList[i]);
        //循环赋值循环对比
        for(i=1;i<25;i++){
            numList[i]=random.nextInt();
            System.out.println("随机数："+numList[i]);
            if (numList[i-1]>numList[i]){
                greaterNum++;
            }else if (numList[i-1]<numList[i]){
                lessNum++;
            }else{
                equalNum++;
            }
        }

        System.out.print("随机数大于后者的：" + greaterNum+"\n");
        System.out.print("随机数小于后者的：" + lessNum+"\n");
        System.out.print("随机数等于后者的：" + equalNum+"\n");
        System.out.print("一共生成了" + i+"个随机数\n");
    }

}