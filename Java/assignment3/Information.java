package com.dev.assignment3;

public class Information extends DogData {

	public static void main(String[] args) {
		DogData dd = new DogData();
		Dog d1 = new Dog();
		d1.setAge(2);
		d1.setBreed("Golden retriever");
		d1.setName("Boomer");

		Dog d2 = new Dog();
		d2.setAge(1);
		d2.setBreed("Dolmation");
		d2.setName("Jelly");

		System.out.println(dd.addDog(d2));
		System.out.println(dd.addDog(d1));
	dd.removeDog(d2);
		
		dd.getDog();
	}

}
