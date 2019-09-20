package com.dev.strings;

public class Strings123 {

	public static void main(String[] args) {
		String str = new String("HELLO");
		String abc = "hello";
		System.out.println("with new key word "+str);
		String str1;
		str1  = "java";
		System.out.println("with initialization "+str1);
		String str2 = "REVANTH";
		System.out.println(str2);
		System.out.println("=========================");
		System.out.println(str1+" "+str2);
		String str3 = "Some   String";
		
		
		System.out.println(str3.length());
		char c = ' ';
		int j = c;
		System.out.println(j);
		
		char[] ch = str3.toCharArray();//converts the string in to fresh character array.
		System.out.println(ch[3]);
		System.out.println(str3.charAt(11));// gives the character present at that perticular index
		System.out.println(str3.equals(str1));
		
		boolean b = abc.equalsIgnoreCase(str);
		System.out.println(b);
		StringBuffer sb = new StringBuffer("Hello");
		StringBuilder sbi = new StringBuilder("Java");
		System.out.println(sb+" "+sbi);
		System.out.println("--------======--------");
	
		StringBuffer sb1 = new StringBuffer(1);
		System.out.println(sb.length());
		System.out.println(sb.capacity());
	
	
	
	
	
	}
}
