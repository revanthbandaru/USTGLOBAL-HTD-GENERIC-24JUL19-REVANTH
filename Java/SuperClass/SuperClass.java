package com.dev.SuperClass;

public class SuperClass {
	SuperClass(){
		System.out.println("constuctor with no args in super class");
	}
	SuperClass(int i ){
		System.out.println("constuctor with int arg in super class");
	}
	SuperClass(String str){
		System.out.println("constuctor with string arg in super class");
	}
	SuperClass(String str,int i){
		System.out.println("constuctor with stirng and int args in super class");
	}
	SuperClass(int i,String str){
		System.out.println("constuctor with int and str args in super class");
	}

	public static void main(String[] args) {
		System.out.println("this is super class");

	}

}
