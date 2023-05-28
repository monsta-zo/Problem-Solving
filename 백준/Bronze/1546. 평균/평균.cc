#include <iostream>

using namespace std;

int main(){
    int N;
    cin >> N;
    float a[1000];
    float max = 0;
    float sum=0;
    for(int i=0; i<N; i++){
        cin >> a[i];
        if(a[i]>max) max = a[i];
    }
    for(int i=0; i<N; i++){
        a[i] = a[i]/max*100;
        sum += a[i];
    }
    cout << sum/N;

}