package com.dev.Inheritance;

public class Loknath extends Chennamaiah {
	static Loknath l = new Loknath();
	
	public static void main(String[] args) {
		l.printName();

	}
	public void printName() {
		String name = "Loknath";
		System.out.println(name+" "+l.lastName);
	}

}
