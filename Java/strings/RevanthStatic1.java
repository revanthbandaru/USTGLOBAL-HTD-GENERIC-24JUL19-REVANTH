package com.dev.strings;

public class RevanthStatic1 {
	static int  j =0;
	int i ;
	static RevanthStatic1 s2 = new RevanthStatic1();
	public static void main(String[] args) {
		j = s2.calArea(7);
		System.out.println("area of the square = "+j);
		s2.i = calcArea(6,6);
		System.out.println("area of the rectangle = "+s2.i);

	}
	public int calArea(int side)
	{
		int area = side*side;
		return area;
	}
	public static int calcArea(int length,int breadth)
	{
		s2.i = 12;
		System.out.println(s2.i);
		return length*breadth;

	}

}
