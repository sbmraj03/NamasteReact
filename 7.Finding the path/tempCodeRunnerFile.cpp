#include <iostream>
using namespace std;

 class animal {
        private:
        string name;
        int weight;

        public:
             animal(string name, int weight){
                this-> name = name;
                this-> weight = weight;
             }

             animal( animal &obj){
                this-> name= obj.name;
                this-> weight= obj.weight;
                cout << "la la la la lalalal \n";
             }

            void fun(){
                cout << "it is eating grasses\n";
            }

            void getInfo(){
                cout << "the weight of this animal is " << weight << endl;
                cout << "and the name of this animal is " << name << endl;
    
            }

            void setInfo(string name, int weight){
                this-> name= name;
                this-> weight= weight;
            }

            ~animal(){
                cout << "are destructor call hua hai rey\n";
            }
    };


int main () {

    animal suresh("lion", 45);

    suresh.getInfo();
    // delete suresh;

    
    // delete p;

    // cout << *p << " arre nhin nhin mere se hua\n";







    // animal ramesh("tiger", 45);
    // animal suresh(ramesh);

    // ramesh.getInfo();
    // suresh.getInfo();
    //cout << get

    return 0;
}