package com.dev.abstraction;
public class Experiment {//final class cannot be extended by any other class.
//	Dog d1 = new Dog();
//	com.dev.encapsulation.Dog d2 = new com.dev.encapsulation.Dog();
	//it can be declared with the fully qualified name as above
	final static int INT =10;
	final static void print() {
		System.out.println("this is the final static method in the experiment class");
	}
	public static void main(String[] args) {
		System.out.println(INT);
		
	}
}

 