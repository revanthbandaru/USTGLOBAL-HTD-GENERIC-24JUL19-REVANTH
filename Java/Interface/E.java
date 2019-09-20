package com.dev.Interface;

public class E implements Abs{
	

	public static void main(String[] args) {
		Abs i =  new E();
		i.display();
	}

	@Override
	public void display() {
		System.out.println("this is in E class");
		
	}

}
