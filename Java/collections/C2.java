package com.dev.collections;

import java.util.HashMap;

import com.dev.encapsulation.Dog;

public class C2 {

	public static void main(String[] args) {
		
		HashMap<String,Dog> hm = new HashMap<String,Dog>();
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
		
		hm.put("1", d1);
		hm.put("2",d2);
		hm.put("3",d);
//		Dog c = hm.put("1", d1);
		Dog f = hm.remove("2");
		System.out.println(f);
		System.out.println(hm);
		System.out.println("output of containsKey(): "+hm.containsKey("5"));
		System.out.println("output of containsValue(): "+hm.containsValue(d1));


	}

}
