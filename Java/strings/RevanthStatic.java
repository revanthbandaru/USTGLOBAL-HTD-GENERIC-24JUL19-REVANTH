package com.dev.strings;

public class RevanthStatic {
	static int a,b,c;

	static RevanthStatic s1 = new RevanthStatic();
	public static void main(String[] args) {
		int area = recCal(3,3);
		System.out.println("area of the rectangle = "+area);
		s1.m2();
		s1.m1(5);
	}
	public static int recCal(int length,int breadth)
	{
		int a = length*breadth;
		return a;
	}
	public void m1(int side)
	{
		int area = side* side;
		System.out.println("area of the square = "+area); 
	}
	public void m2()
	{
		a = 10;
		b = 20;
		c = a*b;
		System.out.println(c);
	}

}
