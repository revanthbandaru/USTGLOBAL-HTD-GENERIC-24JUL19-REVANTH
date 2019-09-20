package com.dev.Interface;

public class D implements C {
	static C cd = new D();
	
	public static void main(String[] args) {
		
		cd.display();
		C.print();
	}

	@Override
	public void display() {
		System.out.println("this is in the class D");
		
	}

}
