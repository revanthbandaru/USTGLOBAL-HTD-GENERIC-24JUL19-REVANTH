package com.dev.collections;

import java.util.ArrayList;

import com.dev.encapsulation.Employee;

public class RevanthArray {

	public static void main(String[] args) {
		ArrayList<Employee> arl = new ArrayList<Employee>();

		Employee e = new Employee();

		e.setId(1510205);
		e.setName("Revanth");
		e.setEmail("revanthsteyn@gmail.com");

		e.setPassword("********");


		Employee e1 = new Employee();

		e1.setId(1510204);
		e1.setEmail("bhanu123@gmail.com");
		e1.setName("Bhanu Prakash");


		Employee e2 = new Employee();

		e2.setId(1510201);
		e2.setName("Vikram");
		e2.setEmail("vikramwat123e@gmail.com");
		
		arl.add(e);
		arl.add(e1);
		arl.add(e2);
		arl.trimToSize();
		System.out.println("trimTOSize(): "+arl.size());
	}

}
