package com.dev.threads;

public class MainThread {

	public static void main(String[] args) {
		System.out.println("Main thread Started.....");
		System.out.println("MainThread class prints the value of i");

		Thread2 t = new Thread2();
		t.setPriority(1);
		t.setName("Thread T2");
		t.start();
		
		
		Thread.currentThread().setName("Main thread");

		T3 t3 = new T3();
		Thread t1 = new Thread(t3);
		
		t1.start();

		for(int i = 1 ; i<=10 ; i++) {
			System.out.println("i ="+i);
		}

		System.out.println("Thread name 1 " +t.getName());
		System.out.println("thread Name2: "+Thread.currentThread().getName());
		System.out.println("thread2 id: "+t.getId());
		System.out.println("thread3 id: "+t1.getId());
		System.out.println("main thread id: "+Thread.currentThread().getName());
		System.out.println("priority of: "+t.getPriority());
		
		System.out.println("main thread terminated...");

	}

}
