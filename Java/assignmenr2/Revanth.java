package com.dev.assignmenr2;

public class Revanth {

	public static void main(String[] args) {

		Man mn = new Man();

		mn.setComapany("UstGlobal");
		mn.setId(1510204);
		mn.setName("Vinay");
		mn.setSalary(35000);

		Man mn1 = new Man();

		mn1.setComapany("UstGlobal");
		mn1.setId(1510203);
		mn1.setName("Ravi");
		mn1.setSalary(38000);
		
		Man mn2 = new Man();

		mn2.setComapany("Ust-Global");
		mn2.setId(1510205);
		mn2.setName("Raju");
		mn2.setSalary(37000);

		boolean b =mn.addEmploye(mn1);
			System.out.println(b);
			System.out.println();


	}

}
