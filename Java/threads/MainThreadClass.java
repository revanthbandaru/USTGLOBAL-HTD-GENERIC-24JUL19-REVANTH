package com.dev.threads;

public class MainThreadClass {

	public static void main(String[] args) throws InterruptedException {
		System.out.println("MainThreadClass started....");
		
		Printer11 p1 = new Printer11();
		
		Thread55 t5 = new Thread55(p1);
		
		t5.start();
		t5.join();
		
		System.out.println("MainThreadClass terminated....");

	}

}
