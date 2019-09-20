package com.dev.encapsulation;

public class PetData {

	public static void main(String[] args) {
		
		Pets p1 = new Pets();
		Pets p2 = new Pets();
		Pets p3 = new Pets();
		Pets p4 = new Pets();
		
		p1.setAnimal("Rabbit");
		p1.setAge(1);
		p1.setColor("White");
		p1.setName("Shiro");
		
		p2.setAge(2);
//		p2.setAnimal("Dog");
		p2.setColor("Black");
		p2.setName("Boomer");
		
		p3.setAge(3);
		p3.setAnimal("Cat");
		p3.setColor("White-black");
		p3.setName("Tom");
		
		p4.setAge(1);
		p4.setAnimal("Rat");
		p4.setColor("Lite-Brown");
		p4.setName("Jerry");
		
		Pets[] pet = {p1,p2,p3,p4};
		for(int i=0;i<pet.length;i++) {
			System.out.println("Name of animal: "+pet[i].getAnimal());
			System.out.println("Age og animal : "+pet[i].getAge());
			System.out.println("nick name of animal: "+pet[i].getName());
			System.out.println("color of animal: "+pet[i].getColor());
			System.out.println("==========================");
		}
		
	}

}
