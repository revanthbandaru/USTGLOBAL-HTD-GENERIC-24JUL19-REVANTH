package com.dev.overloading;

public class MethodOverloading {
	
	static MethodOverloading mo = new MethodOverloading();
	
	public void print() {
		System.out.println("This is print method with no-args");
	print(5);
	}
	
	public int print(int i) {
		
		System.out.println("this is print method with int-arg");
		return 1;
	}
	public static void main(String[] args) {
		
		mo.print();

	}
	static String print(String str) {
		System.out.println("this is print method with string arg");
		return "A";
	}
	private static String print(String str,int i) {
		System.out.println("this is print method with string arg");
		return "A";
	}
	final static String print1(String str,int i) {
		System.out.println("this is print method with final string arg");
		return "A";
	}
	final static String print1(String str) {
		System.out.println("this is print method with final string arg");
		return "A";
	}

}
