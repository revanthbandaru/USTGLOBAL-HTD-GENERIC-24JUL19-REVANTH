package com.dev.threads;

public class Thread55 extends Thread{

	Printer11 p;




	public Thread55(Printer11 p1) {
		this.p  =p1;
	}



	@Override
	public void run() {
		try {
			Thread.currentThread().sleep(1000);

		} catch (Exception e) {
			e.printStackTrace();
		}

	}



}
