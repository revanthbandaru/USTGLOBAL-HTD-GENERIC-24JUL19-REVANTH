package com.dev.SuperClass;

public class A {
	A(){
		System.out.println("super class constructor with no-args");
	}
	A(int i){
		System.out.println("super class constructor with int-args");
	}
	A(String str){
		System.out.println("super class constructor with String-args");
	}
	A(int i,int j){
		System.out.println("super class constructor with double int-args");
	}
	A(int i,String str){
		System.out.println("super class constructor with int and String-args");
	}
	A(String str,int i){
		System.out.println("super class constructor with String and int-args");
	}

	public static void main(String[] args) {
		

	}

}
