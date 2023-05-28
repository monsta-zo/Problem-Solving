#include <iostream>

using namespace std;

int main(){
    int c;
    int n;
    int avg;
    int score[1000];
    int count;
    double result;
    cin >> c;
    for (int i=0; i<c; i++){
        avg = 0;
        count = 0;
        cin >> n;
        for(int j=0; j<n; j++){
            cin >> score[j];
            avg = avg + score[j];
        }
        avg = avg / n;
        for(int l=0; l<n; l++){
            if(score[l]>avg)
                count += 1;
        }
        result =(double)count / n * 100 ;
        cout<<fixed;
        cout.precision(3);
        cout << result << '%' << endl;
    }
}