package com.dev.compare123;

import java.util.Comparator;

public class Boy implements Comparable<Boy>{
	private String name;
	private int age;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	@Override
	public int compareTo(Boy b) {
		
		return (this.age - b.age);
	}
	@Override
	public String toString() {
		return "Boy [name=" + name + ", age=" + age + "]";
	}
//	@Override
//	public int compare(Boy b, Boy b1) {
//		
//		return (b.age - b1.age);
//	}
	
	

}
