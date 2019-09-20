package com.dev.abstraction;

public abstract class AbstractParent {
	AbstractParent(){
		System.out.println("constructor in the Abstract class(grand class)");
	}
	
	abstract public void property();
	abstract void money();
	public void popularity() {
		System.out.println("this is the concrete method in AbstractParent abstract class");
	}

	public static void main(String[] args) {
		

	}

}
