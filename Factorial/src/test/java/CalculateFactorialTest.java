import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class CalculateFactorialTest {
    @Test
    void CheckFactorialZero() {
        CalculateFactorial calculateFactorial = new CalculateFactorial();
        int result=calculateFactorial.getFactorial(0);
        assertEquals(1,result);
    }

    @Test
    void CheckFactorialOne() {
        CalculateFactorial calculateFactorial = new CalculateFactorial();
        int result=calculateFactorial.getFactorial(1);
        assertEquals(1,result);
    }

    @Test
    void CheckFactorialForOtherNumbers() {
        CalculateFactorial calculateFactorial = new CalculateFactorial();
        int result=calculateFactorial.getFactorial(5);
        assertEquals(120,result);
    }
}