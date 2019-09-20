package com.dev.abstraction;

public abstract class AbstractExample {
	public AbstractExample() {//it is possible to have a constructor in the abstract class.
		System.out.println("this is the constructor in the abstract class");
	}

	abstract void display();//abstract method inside abstract class.
	abstract void show1();

	public void show() {
		System.out.println("conscrete method of abstract class");//concrete method inside the abstract class.
	}

}