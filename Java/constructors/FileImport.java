package com.dev.constructors;
import com.dev.methods.MethodExample;
public class FileImport {

	public static void main(String[] args) {
		int area =MethodExample.calcArea(6);
		System.out.println("area of the square mathod in the other package = "+area);
		System.out.println("the number that is initialized in another pacakge and using in thios pacakge = "+MethodExample.j);
	}

}