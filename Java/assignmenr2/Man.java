package com.dev.assignmenr2;

import java.util.HashSet;

public class Man implements Employe{
	private int id;
	private String name;
	private long salary;
	private String comapany;
	
	HashSet<Man> hs = new HashSet<Man>();
	@Override
	public boolean addEmploye(Man m) {
		if(m!=null) {
			hs.add(m);
			return true;
		}
		return false;
		
		
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public long getSalary() {
		return salary;
	}
	public void setSalary(long salary) {
		this.salary = salary;
	}
	public String getComapany() {
		return comapany;
	}
	public void setComapany(String comapany) {
		this.comapany = comapany;
	}
	@Override
	public void getEmploye() {
		System.out.println(hs);
		
	}
	@Override
	public String toString() {
		return "Man [id=" + id + ", name=" + name + ", salary=" + salary + ", comapany=" + comapany + "]";
	}
	@Override
	public void updateEmploye() {
		// TODO Auto-generated method stub
		
	}
	@Override
	public void removeEmploye() {
		// TODO Auto-generated method stub
		
	}
	
}
