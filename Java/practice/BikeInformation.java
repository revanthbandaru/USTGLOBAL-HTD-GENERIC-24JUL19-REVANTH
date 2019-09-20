package com.dev.practice;

public class BikeInformation {

	public static void main(String[] args) {

		BikeData bd = new BikeData();

		Bike n = new Bike();
		
		
		n.setCc(123);
		n.setName("ktm");
		
		Bike n1 = new Bike();
		n1.setCc(120);
		n1.setName("pulsar");
		
		boolean a = bd.addBike("1", n);
		System.out.println(a);
		
		boolean a1 = bd.addBike("34", n1);
		System.out.println(a1);
		
		bd.removeBike("1");
		
		bd.getBike();
		n1.setCc(111);
		n1.setName("ursbfbaflbs");
		
		boolean a2 = bd.updateData("34", n1);
		System.out.println(a2);
		bd.getBike();
	}

}
