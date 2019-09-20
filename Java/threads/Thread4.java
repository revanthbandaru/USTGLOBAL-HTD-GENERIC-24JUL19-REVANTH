package com.dev.threads;

public class Thread4 extends Thread{
	Printer p;
	public Thread4(Printer pref) {

		this.p =pref;
	}


	@Override
	public void run() {
		try {
			Thread.currentThread().sleep(500);
		}catch(InterruptedException e) {
			e.printStackTrace();
		}
		p.printVal(10, "Thread 4#");
	}
}
