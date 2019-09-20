package com.dev.threads;

public class Thread2 extends Thread {

	@Override
	public void run() {
		System.out.println("Thread2 thread started..");
		System.out.println("Thread2 class prints the value of i");

		for(int j = 1;j<=10;j++) {
			System.out.println("j ="+j);
		}

		System.out.println("Thread2 thread terminated...");
	}

}
