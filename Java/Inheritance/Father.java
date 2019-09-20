package com.dev.Inheritance;

public class Father extends GrandFather{
	
	static Father f = new Father();
	@Override
	public void printName() {
		
		String name = "Eddard";
		System.out.println(name+" "+super.name+" "+f.lastName);
		super.printName();
	}
	
	public static void main(String[] args) {
		f.printName();

	}

}
