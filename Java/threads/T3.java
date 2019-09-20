package com.dev.threads;

public class T3 implements Runnable{



	@Override
	public void run() {

		System.out.println("Main thread started...");
		for(int k = 1; k<=10 ;k++) {
			System.out.println("k = "+k);
		}
		System.out.println("Main thread terminated..");
	}

}
