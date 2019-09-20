package com.dev.assignment;

public class StringReverse {

	public static void main(String[] args) {
		String str = "";
		String str1 = "REVANTH";
		for(int i = str1.length()-1;i>=0;i--) {
			str += str1.charAt(i);
		}
		System.out.println(str);
	}

}
