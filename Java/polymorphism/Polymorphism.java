package com.dev.polymorphism;

public class Polymorphism {//method overloading and method overriding both exists in different form 'POLYMORPHISM'

	static Polymorphism p = new Polymorphism();

	public void method() {//compile time binding (or) early binding
		System.out.println("this is method over loading with zero args");
	}
	public void method(int age,String str) {//compile time binding (or) early binding
		System.out.println("this is method over loading with two input  args");
		System.out.println("age is : "+age+"name is: "+str);
	}
	public static void method(int i) {
		System.out.println("Static method in SuperClass");
	}

	public static void main(String[] args) {

		p.method();
		p.method(21,"Revanth");

	}

}
