package com.dev.practice;

public class Bike {
	private String name;
	private int cc;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getCc() {
		return cc;
	}
	public void setCc(int cc) {
		this.cc = cc;
	}
	@Override
	public String toString() {
		return "Bike [name=" + name + ", cc=" + cc + "]";
	}

}
