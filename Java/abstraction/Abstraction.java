package com.dev.abstraction;

public 
class Abstraction extends AbstractExample{
	public Abstraction() {
		System.out.println("Cost of Abstraction class");
	}

	static Abstraction ab = new Abstraction(); //we cannot create object for Abstract class.	

	public static void main(String[] args) {

		ab.display();
		ab.show();
	}
	@Override
	void show1() {
		System.out.println("second overridded method from abstract class");
	}

	@Override
	void display() {//we can provide some implementation here
		System.out.println("this is implemented abstract method");

	}

}
