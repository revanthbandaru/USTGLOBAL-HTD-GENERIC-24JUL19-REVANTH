package com.dev.assignment4;

public class Information {

	public static void main(String[] args) {
		Details de = new Details();
		Dog d1 = new Dog();
		
		d1.setAge(23);
		d1.setCompany("vehariu");
		d1.setName("fun");
		
		Dog d2 = new Dog();
		d2.setAge(23);
		d2.setCompany("two");
		d2.setName("bun");
		
		Dog d3 =new Dog();
		d3.setAge(23);
		d3.setCompany("three");
		d3.setName("sun");
		
		de.addDetails(d3);
//		de.addDetails(d2);
		de.getDetails();
	}

}
