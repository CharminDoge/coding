#include <stdio.h>

int main(){
    int sum = 0;
    int a = 1;
    int b = 1;
    int t;
    int i = 2;
    while (b < 4000000){
        t = b;
        b = a + b;
        a = t;
        if (i % 3 == 2){
            sum += b;
        }
        i++;
    }
    
    printf("%d\n", sum);
}