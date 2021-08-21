#include <stdio.h>

int main(){
    int t = 1;
    int mul = 1;
    int sum = 0;
    while ((mul = 5*t) < 1000){
        t++;
        if (mul % 3 != 0){
            sum += mul;
        }
    }
    t = 1;
    mul = 1;
    while ((mul = 3*t) < 1000){
        t++;
        sum += mul;
    }
    printf("%d\n", sum);
}
