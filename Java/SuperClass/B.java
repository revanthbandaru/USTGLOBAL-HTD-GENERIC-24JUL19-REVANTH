package com.dev.SuperClass;

public class B  extends A{
	B(){
		super();
		System.out.println("SubClass constructor with no args");
	}
	B(int i){
		super(7);
		System.out.println("SubClass constructor with no args");
	}
	B(int i,int j,int l){
		super("revanth",21);
		System.out.println("SubClass constructor with no args");
	}
	B(String str,String str1){
		super(18,"Harinath");
		System.out.println("SubClass constructor with no args");
	}
	B(String str,int j){
		super(33,45);
		System.out.println("SubClass constructor with no args");
	}

	public static void main(String[] args) {
		
		B b = new B(21,34,56);
		System.out.println("===============================");
		B b1 = new B("Harinath","Bhanu");
		System.out.println("===============================");
		B b2 = new B("Loknath",27);
		System.out.println("===============================");
		B b3 = new B(1);
		System.out.println("===============================");
		B b4 = new B();
		

	}

}
