package com.dev.constructors;

public class ConstructorsPractise {
	public ConstructorsPractise() {
		System.out.println("constructor without any arguments");
	}
public ConstructorsPractise(int i,int j) {
	int add = i+j;
	System.out.println("int 2 argumented construtor i+j= "+add);	
	}
public ConstructorsPractise(int k,float j,int i) {
	float avg = (k+j+i)/3;
	System.out.println("average of three numbers in three argumented constructor = "+avg);	
}
public ConstructorsPractise(String str,int k) {
	System.out.println("my name is ="+str);
	System.out.println("my age is = "+k);
	
}
public ConstructorsPractise(int k,String str) {
	System.out.println("my age is = "+k);
	System.out.println("my name is ="+str);
}
	public static void main(String[] args) {
		ConstructorsPractise c1 = new ConstructorsPractise();
		ConstructorsPractise c2 = new ConstructorsPractise(2,1);
		ConstructorsPractise c3 = new ConstructorsPractise(4,5,6);
		ConstructorsPractise c4 = new ConstructorsPractise("revanth",21);
		ConstructorsPractise c5 = new ConstructorsPractise(21,"Revanth");
	}

}
