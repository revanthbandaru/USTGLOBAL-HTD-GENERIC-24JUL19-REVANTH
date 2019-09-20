package com.dev.strings;

public class StringPractice {
	public static void main(String[] args) {
		
		String str = "JaVA DeVeLOpEr";
		String str1 = new String("java developer");
		
		char[] s = str.toCharArray();//converts the string to fresh char array
		System.out.println(s);
		
		boolean b1 = str.equals(str1);//return type is boolean and matches to strings according to ASCII value
		System.out.println(b1);
		
		boolean b2 = str.equalsIgnoreCase(str1);//return type is boolean and ignores the case of the characters.
		System.out.println(b2);
		
		char c = str.charAt(3);//prints that particular indexwd character.
		System.out.println(c);
		
		int n = str.length();//gives the length of the particular string.
		System.out.println("length of the string 'java developer' "+n);
		
		boolean b3 = str.contains("A");//return type is boolean it checks whether the char is present in the string are not.
		System.out.println(b3);
		
		String g = str1.replace('e','a');//replaces the old character with new character.
		System.out.println(g);
		
		int y = str1.indexOf('a');
		System.out.println(y);//if 'a' doesn't find it return -1 value if it exists it returns the index of that perticular value.

		String t = str.toLowerCase();//it converts upper case letters to lower case.
		System.out.println("JaVA DeVeLOpEr = "+t);
		
		String u = t.toUpperCase();
		System.out.println("java developer = "+u);
		
		String a = str.substring(3);//it takes the value of index of the string.
		System.out.println("substring= "+a);
		
		String a1 = str.substring(3,str.length()-1);
		System.out.println(a1);
		
		String a2 = str.substring(3,str.length());
		System.out.println(a2);
	
	}

}



