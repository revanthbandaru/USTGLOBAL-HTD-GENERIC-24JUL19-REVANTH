package com.dev.collections;

import java.util.HashSet;

import com.dev.encapsulation.Dog;

public class C1 {

	public static void main(String[] args) {

		HashSet<Dog> hs = new HashSet<Dog>();
		Dog d = new Dog();
		d.setAge(1);
		d.setBreed("german");
		d.setColor("Black");
		d.setName("Shepard");

		Dog d1 = new Dog();
		d1.setAge(5);
		d1.setBreed("Golden Retriever");
		d1.setColor("white");
		d1.setName("Boomer");

		Dog d2 = new Dog();
		d2.setAge(3);
		d2.setBreed("Hound");
		d2.setColor("Black");
		d2.setName("hsagd");

		boolean b2 = hs.add(d2);
		boolean b = hs.add(d);
		boolean b1 = hs.add(d1);
		System.out.println("Output() of add(): "+b+" "+b1+" "+b2);
		System.out.println(hs);

		boolean b4 = hs.remove(d);
		System.out.println("Output of remove(): "+b4);
		System.out.println(hs);


		System.out.println("Output of contains(): "+hs.contains(d));
		System.out.println("Output of size(): "+hs.size());
		hs.clear();
		System.out.println("Output of hshset after clear ():"+hs.size());


	}

}
