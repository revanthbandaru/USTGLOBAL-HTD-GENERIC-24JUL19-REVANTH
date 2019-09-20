package com.dev.collections;

import java.util.HashSet;

import com.dev.encapsulation.Employee;

public class Employees {
	public static void main(String[] args) {
		HashSet<Employee> hs = new HashSet<Employee>();
		
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
		
		boolean z = hs.add(e2);
		boolean z1 = hs.add(e1);
		boolean z2 = hs.add(e);//add to the HashSet.
		
		System.out.println("output of add(): "+z1+" "+z+" "+z2);//returns boolean type whether added or not if added returns true.
	
		System.out.println("-------===========-----------");
		
		System.out.println(e+" "+e2+""+e);
		
		System.out.println("------===============-----------");
		
		System.out.println("output of size(): "+hs.size());//size of the HashSet.
		
		boolean b56 = hs.remove(e2);
		System.out.println("output of remove(): "+b56);
		System.out.println("-----===========------------");

		System.out.println(hs);
		
		System.out.println("output of size(): "+hs.size());
		System.out.println("---------============------------");
		
		hs.clear();
		
		
		
		
		
		
	}

}
