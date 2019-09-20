package com.dev.exception;

public class ExceptionHandling2 {
	static CustomException c = new CustomException();
	public static void main(String[] args) throws CustomException{
		
		try {
		
			s();
			System.out.println("no exception for s()");
			int total = divide(10,4);
			System.out.println("no exception for divide()");
		
		}catch(NegativeArraySizeException e) {
			
			System.err.println("exception in the Catch block");//shows the output in red color.
			System.err.println("getMessage(): "+e.getMessage());
			System.out.println("getlocalizedMeassage: "+e.getLocalizedMessage());
			e.printStackTrace();
		}
		catch(ArithmeticException h) {
			
			System.err.println("exception caught in the catch block of Arithmetic");//shows the output in red color
			System.err.println("getMessage: "+h.getMessage());
			h.printStackTrace();
		
		}finally {
			
			System.out.println("this is the finally Block");
			}
	}
	
	public static void s() {
		
		StringBuffer str1 = new StringBuffer(-1);
	}
	
	public static int divide(int i,int j) {
	
		int res = i/j;
		return res;
	}

}
