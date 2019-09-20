package com.dev.Overriding;

public class Child extends Parent {
	static Child c = new Child();

	String name1 = "revanth";
	
	public static void main(String[] args) {
		
		c.fullName();
		m1();

	}
	@Override
	public void fullName() {// 
		
		System.out.println(name1+" "+c.lastName);
	}
//	@Override
//	public static void m1() {//static method cannot be overriden.
//		
//		System.out.println("after overridden");
//	}
//	@Override
//	public void m2() {
//		
//	}

}
