package com.dev.Overriding;

public class Parent {
	static Parent p = new Parent();
	String lastName = "Bandaru";

	public static void main(String[] args) {

		p.fullName();
	}
	public void fullName() {
		String name = "loknath";
		System.out.println(name+" "+p.lastName);
	}
	public static void m1() {
		
		System.out.println("not ovveridden");
	}
	private void m2() {
		System.out.println("not overridden");
	}

}
