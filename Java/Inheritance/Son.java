package com.dev.Inheritance;

public class Son extends Father {
	static Son s = new Son();
	

	
	public static void main(String[] args) {
		
		s.printName();
	}
	@Override 
	public void printName()
	{
		String name = "Aarya";
		System.out.println(name+" "+super.name+" "+s.lastName);
		super.printName();
	}

}
