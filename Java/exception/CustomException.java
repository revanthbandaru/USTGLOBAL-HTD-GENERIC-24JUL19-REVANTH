package com.dev.exception;

public  class CustomException extends Exception{
	
	public CustomException() {
		System.out.println("Custom Exception");
	}

	public CustomException(int i,int j) {
		System.out.println("Custom Exception occured in two integer argument");
	}
	public CustomException(int i) {
		System.out.println("Custom Exception in single integer argument");
	}
	@Override
	public String getLocalizedMessage() {
		return "exception in NegativeArraySizeException";
		
	}
}
