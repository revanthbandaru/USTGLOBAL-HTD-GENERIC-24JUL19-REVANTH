package com.dev.overloading;

public class ArithematicOperations {

	static ArithematicOperations ao = new ArithematicOperations();

	public void add(int i,int j,int k) {
		int add = i+j+k;
		System.out.println("addition of three numbers is :"+add);
	}
	public void add(int i,int j) {
		int add = i+j;
		System.out.println("addition of two numbers is :"+add);
	}
	public void add(int i,int j,int k,int l) {
		int add = i+j+k+l;
		System.out.println("addition of four numbers is :"+add);
	}
	public void sub(int l,int m) {
		int sub = l-m;
		System.out.println("substraction of two numbers is :"+sub);
	}
	public void sub(int l,int m,int o) {
		int sub = l-m-o;
		System.out.println("substraction of three numbers is :"+sub);
	}
	public void sub(int l,int m,int k,int p) {
		int sub = l-m-k-p;
		System.out.println("substraction of four numbers is :"+sub);
	}
	public void mul(int i,int j,int k,int l) {
		int mul = i*j*k*l;
		System.out.println("multiplication of four numbes is :"+mul);
	}
	public void mul(int i,int j,int k) {
		int mul = i*j*k;
		System.out.println("multiplication of three numbes is :"+mul);
	}
	public void mul(int i,int j) {
		int mul = i*j;
		System.out.println("multiplication of two numbes is :"+mul);
	}
	public void div(int k,int l) {

		float div = k/l;
		System.out.println("division of two numbes is :"+div);
	}
	public void div(int k,int l,int m) {

		float div = (k/l)/(m);
		System.out.println("division of three numbers is :"+div);
	}
	public void div(int k,int l,int m,int n) {

		float div = (k/l)/(m/n);
		System.out.println("division of four numbers is :"+div);
	}

	public static void main(String[] args) {
		
		ao.add(4,5,6,7);
		ao.div(2,2);
		ao.div(20,10,20,10);
		ao.mul(22, 2);

	}

}
