package com.dev.collections;

import java.util.HashMap;

import com.dev.encapsulation.Employee;


public class EmployeeHash {

	public static void main(String[] args) {
		HashMap<String,Employee> hm = new HashMap<String,Employee>();

		Employee e = new Employee();

		e.setId(1510205);
		e.setName("Revanth");
		e.setEmail("revanthsteyn@gmail.com");




		Employee e1 = new Employee();

		e1.setId(1510204);
		e1.setEmail("bhanu123@gmail.com");
		e1.setName("Bhanu Prakash");


		Employee e2 = new Employee();

		e2.setId(1510201);
		e2.setName("Vikram");
		e2.setEmail("vikramwat123e@gmail.com");
		
	boolean b = hm.containsKey(e2);
	System.out.println(b);
	}

}
