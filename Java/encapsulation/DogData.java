package com.dev.encapsulation;

public class DogData {

	public static void main(String[] args) {
		Dog d1 = new Dog();
		d1.setAge(4);
		d1.setBreed("Golden retriever");
		d1.setColor("Gold");
		d1.setName("Boomer");

		Dog d2 = new Dog();
		d2.setAge(1);
		d2.setBreed("German Shepherd");
		d2.setColor("brown");
		d2.setName("Spike");
		
		Dog d3 = new Dog();
		d3.setAge(3);
		d3.setBreed("GreatDen");
		d3.setColor("Black");
		d3.setName("Abby");
		
		Dog[] dogs = {d1,d2,d3};
		for(int i = 0;i<dogs.length;i++) {
			System.out.println("Age of Dog: "+dogs[i].getAge());
			System.out.println("Breed of Dog: "+dogs[i].getBreed());
			System.out.println("color of Dog: "+dogs[i].getColor());
			System.out.println("Name of Dog: "+dogs[i].getName());
		}
		System.out.println(d1.equals(d2));
	}

}
