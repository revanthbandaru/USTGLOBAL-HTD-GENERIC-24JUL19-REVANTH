package com.dev.methods;

public class MethodExample {
	public static int j = 53;

	public static void main(String[] args) {
		int area = calcArea(7);
		System.out.println(area);

	}
	public static int calcArea(int side) {
		int area = side*side;
		return area;

	}
}
