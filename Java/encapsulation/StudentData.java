package com.dev.encapsulation;

public class StudentData {

	public static void main(String[] args) {
		Student s = new Student();
		s.setRegno(1510205);
//		s.setName("Rayon");
		s.setEmail("rayonmoofa@gmail.com");
		s.setPassword("123456");
		
		System.out.println("Regno: "+s.getRegno());
		System.out.println("Name : "+s.getName());
		System.out.println("Email: "+s.getEmail());
		System.out.println("$======================$");
	
	}

}
