package com.dev.exception;

public class TryCatch {

	public static void main(String[] args) {
		try {
			
			s();
		}catch(Exception e) {//exception type to be mentioned.
			System.out.println("Exception occured");
			e.printStackTrace();//this shows the exception name that where occurred in the program with exception name
			
		}finally {//whether the exception is handled or not finally block would definitely executed.
			System.out.println("this is the finally block");
		}
		System.out.println("code after the finally block");
	}

		
		public static void s() {
			StringBuffer sb = new StringBuffer(-1);
			
		}
}
