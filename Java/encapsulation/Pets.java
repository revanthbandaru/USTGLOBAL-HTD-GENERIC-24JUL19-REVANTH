package com.dev.encapsulation;

public class Pets {
	private String name;
	private String animal = "Lion";
	private int age;
	private String color;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAnimal() {
		return animal;
	}
	@Override
	public String toString() {
		return "Pets [name=" + name + ", animal=" + animal + ", age=" + age + ", color=" + color + "]";
	}
	public void setAnimal(String animal) {
		this.animal = animal;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getColor() {
		return color;
	}
	public void setColor(String color) {
		this.color = color;
	}

}
