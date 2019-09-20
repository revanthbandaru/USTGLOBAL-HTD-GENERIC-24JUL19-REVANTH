package com.dev.assignmenr2;

public class Casting {

	int  i = 10;
	public void m1() {
		System.out.println("Casting method(parent class)");
	}

	static Casting c = new  Casting();
	public static void main(String[] args) {
		
		
		c.i = 20;
	}

}
