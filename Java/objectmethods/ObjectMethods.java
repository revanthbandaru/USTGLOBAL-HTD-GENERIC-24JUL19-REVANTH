package com.dev.objectmethods;

import com.dev.encapsulation.Dog;


public class ObjectMethods {
	public static int i = 10;
	public static void display() {
		System.out.println("this is the static method in the Objectmethods");
	}
	public static void show() {
		System.out.println("this is the static method in the Objectmethods");
	}
	

	public static void main(String[] args) {
		Dog d1 = new Dog();
		System.out.println(d1.getClass());
	}

}
