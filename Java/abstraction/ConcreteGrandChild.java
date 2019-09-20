package com.dev.abstraction;

public class ConcreteGrandChild extends AbstractChild{
	ConcreteGrandChild(){
		System.out.println("constructor in the ConcreteGrandChild");
	}
	static ConcreteGrandChild cgc = new ConcreteGrandChild();

	public static void main(String[] args) {
		cgc.display();
		cgc.propertyFromGrandParent();
		cgc.money();

	}

	@Override
	void display() {
		
		System.out.println("method implemented from abstractChild");
	}

	@Override
	void propertyFromGrandParent() {
		System.out.println("method implemented from abstractChild");
		
	}

	@Override
	void money() {
		System.out.println("method implemented by abstractparent to concrete child");
		
	}

	@Override
	 public void property() {
	
	}

	

}
