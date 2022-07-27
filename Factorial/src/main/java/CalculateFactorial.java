public class CalculateFactorial {
    public int getFactorial(int number){
        if(number==0||number==1)
            return 1;
        else
            return number*getFactorial(number-1);
    }
}
