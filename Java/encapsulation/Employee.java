package com.dev.encapsulation;

public class Employee implements Comparable<Employee>,Employee1{
	
	private String name;
	private String email;
	private int id;
	private String password;
	
	@Override
	public String toString() {
		return "Employee [name=" + name + ", email=" + email + ", id=" + id + ", password=" + password + "]";
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public int compareTo(Employee e) {
		
		return (this.id - e.id);
	}

	@Override
	public void addEmployee() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void removeEmployee() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void updateEmployee() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void getEmployee() {
		// TODO Auto-generated method stub
		
	}


}
