package com.dev.Inheritance;

public class GrandFather {
	static GrandFather g = new GrandFather();
	String lastName = "Stark";
	String name = "Torrhen";
	public static void main(String[] args) {

		g.printName();
	}
	public void printName() {

		System.out.println(name+" "+lastName);
	}
}
