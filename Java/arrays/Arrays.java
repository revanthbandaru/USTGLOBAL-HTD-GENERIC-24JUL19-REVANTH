package com.dev.arrays;

public class Arrays {

	public static void main(String[] args) {
		//declaration
		int  []arrayName;
		int[] arrayname1;
		char arrayname2[];

		//creation

		arrayName = new int[5];	
		arrayname1 = new int[5];

		arrayName [0] = 112;
		arrayName [1] = 134;
		arrayName [2] = 11;
		arrayName [3] = 12;
		arrayName [4] = 13;
		int res = arrayName [1]+arrayName [0];
		System.out.println(res);
		int res1 = arrayName [1]*3;
		System.out.println(res1);
		int res2 = arrayName [3]-arrayName [0];
		System.out.println(res2);
		int res3 = arrayName [3]/arrayName [0];
		System.out.println(res3);
		int res4 = arrayName [3]%arrayName [0];
		System.out.println(res4);
	}

}
