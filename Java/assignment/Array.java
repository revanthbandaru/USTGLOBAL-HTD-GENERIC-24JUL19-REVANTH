package com.dev.assignment;

public class Array {

	public static void main(String[] args) {
		int[] a = {1,2,3,4,5,6,7,8};
		int firstElement = a[0]; 
		int midElement = a[a.length-1]/2;
		int lastSecondElement = a[a.length-2];
		int sum =firstElement+midElement+lastSecondElement;
		System.out.println("sum of first and mid and lastsecond element: "+sum);

	}

}
