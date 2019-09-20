package com.dev.Inheritance;

public class Daughter extends Father{
static Daughter d = new Daughter();
	public static void main(String[] args) {
	
d.printName();
	}
	@Override
public void printName()
{
	String name = "robb";
	System.out.println(name+" "+super.name+" "+d.lastName);
}
}
