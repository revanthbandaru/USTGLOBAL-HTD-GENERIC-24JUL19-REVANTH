package com.dev.polymorphism;

public class SubClass extends Polymorphism {
	static SubClass sc = new SubClass();
//	@Override
//	public void method() {//late binding (or) runtime binding
//		System.out.println("overriding method in the SubClass with zero args");
//	}
	@Override
	public void method(int i,String str) {//late binding or runtime binding
		System.out.println("overriding method in the SubClass with zero args");
		System.out.println("age is: "+i+"name is :"+str);
	}
//	@Override
//	public static void method(int i) {
//		System.out.println("overridded static method in SubClassS");
//	}

	public static void main(String[] args) {

		sc.method();
		sc.method(18,"Harinath");
//		method(7);

	}

}
