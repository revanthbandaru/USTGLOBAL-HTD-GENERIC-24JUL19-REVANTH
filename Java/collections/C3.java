package com.dev.collections;

import java.util.TreeSet;

import com.dev.encapsulation.Dog;

public class C3 {

	public static void main(String[] args) {
		
		TreeSet<Dog> ts = new TreeSet<Dog>();
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
		
		ts.add(d1);
		ts.add(d2);
		ts.add(d3);

		System.out.println(ts);
	}

}
