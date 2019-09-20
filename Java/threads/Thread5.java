package com.dev.threads;

public class Thread5 extends Thread {
	
	Printer p;
	
	public Thread5(Printer pref) {
		this.p =pref;
	}
	@Override
	public void run() {
		p.printVal(10, "thread5$");
	}
	
	
}


