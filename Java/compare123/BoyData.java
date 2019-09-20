package com.dev.compare123;

import java.util.TreeSet;

public class BoyData {

	public static void main(String[] args) {

		TreeSet<Boy> ts = new TreeSet<Boy> ();

		Boy b = new Boy();

		b.setAge(21);
		b.setName("qwerty");

		Boy b1 = new Boy();

		b1.setAge(11);
		b1.setName("ytrewq");

		Boy b2 = new Boy();

		b2.setAge(10);
		b2.setName("yuiop");

		Boy[] booy = {b,b1,b2};
		

		ts.add(b);
		ts.add(b1);
		ts.add(b2);
		System.out.println(ts);

		for(int i = 0;i<booy.length;i++) {
			System.out.println("age of the boy: "+booy[i].getAge());
		}




	}

}
