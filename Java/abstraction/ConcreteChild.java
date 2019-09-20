package com.dev.abstraction;

public class ConcreteChild extends AbstractParent{
	ConcreteChild(){
		System.out.println("constructor in the concrete class");
	}
	
	static ConcreteChild cc = new ConcreteChild();
	
	public static void main(String[] args) {
		
		cc.property();
		cc.money();
		cc.popularity();

	}

	@Override
	public void property() {//Definitely should be implemented from abstract class
	System.out.println("property implemented from AbstractParent abstract class");
		
	}

	@Override
	void money() {//Definitely should be implemented from abstract class as it was not the abstract class.
		System.out.println("money implemented fom AbstractParent abstract class");
		
	}

}
