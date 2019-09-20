package com.dev.abstraction;

public abstract class AbstractChild extends AbstractParent {
	AbstractChild(){
		System.out.println("constructor in the AbstractChild");
	}
	
	
//	public AbstractChild(){
//		System.out.println("constructor in the AbstractChild class(abstract class)");
//	}
//	@Override
//	public void property() {
//		System.out.println("optional overriding method as it was of abstract class");
//	}
	
	abstract void display();
	abstract void propertyFromGrandParent();

	

}
