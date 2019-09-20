package com.dev.assignment4;

public class Dog {
	private String name;
	private int age;
	@Override
	public String toString() {
		return "Dog [name=" + name + ", age=" + age + ", company=" + company + "]";
	}
	private String company;
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
	public String getCompany() {
		return company;
	}
	public void setCompany(String company) {
		this.company = company;
	}

}
