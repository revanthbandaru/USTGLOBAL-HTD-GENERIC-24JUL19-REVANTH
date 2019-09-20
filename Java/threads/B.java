package com.dev.threads;

public class B extends Thread{
	
	public B(C c) {
		System.out.println("constructor in B");
	}
	
	@Override
	public void run() {
		System.out.println("thread class implementation method");
	}

}
