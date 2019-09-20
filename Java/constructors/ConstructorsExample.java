package com.dev.constructors;

public class ConstructorsExample {
	public ConstructorsExample(){//no-argumented constructor
		System.out.println("constructor with out any args");
	}
	
	public ConstructorsExample(int i)//parameterized constructor with args.
	{
		System.out.println("the number given in the object creation = "+i);
		
	}
	public ConstructorsExample(String s) {
		System.out.println("the string in the argument is = "+s);
	}
	public ConstructorsExample(String str,int age) {
		System.out.println("my name is : "+str);
		System.out.println("my age is: "+age);
	}
	public ConstructorsExample(int age,String str) {
		System.out.println("my name is : "+str);
		System.out.println("my age is: "+age);
	}
	public static void main(String[] args) {
		System.out.println("before the instance of object inside the main method");
		ConstructorsExample s1 = new ConstructorsExample();
		ConstructorsExample s2 = new ConstructorsExample(4);
		ConstructorsExample s3 = new ConstructorsExample("Revanth");
		ConstructorsExample s4 = new ConstructorsExample(21,"Revanth");
		ConstructorsExample s5 = new ConstructorsExample("Revanth",21);
		System.out.println("inside the main method");
	}

}
