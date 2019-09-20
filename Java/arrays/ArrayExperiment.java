package com.dev.arrays;

public class ArrayExperiment { 
	public static void main(String[] args) {
		int n = 1;
		int[] arr1 = {12,32,4,23,4,5};
		for(int i = 0;i<arr1.length;i++)
		{
			if(n>=arr1.length) {
				System.out.println("index is not present");
				break;
			}else {
				System.out.println("index is present");
				for(int j =0;j<=n-1;j++) {
					System.out.println(arr1[j]);
				}
				break;
			}
		}
	}
}
