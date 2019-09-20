package com.dev.exception;

public class ExceptionExample {

	public static void main(String[] args) {
//		double d = 10.0;
//		double q = 0.0;
//		System.out.println("Result: "+d/q);
//		StringBuffer Sr = new StringBuffer(-1);
//		System.out.println("Exception");
		System.out.println("print Statement before");
		t();
		System.out.println("print statement After");
	}
	public static void s() {
		t();
		StringBuffer sb = new StringBuffer(-1);
	}

	public static void t() {
		StringBuffer sb = new StringBuffer(-1);
	}

}
