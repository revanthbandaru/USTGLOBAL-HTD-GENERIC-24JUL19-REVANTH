package com.dev.assignment4;

import java.util.HashMap;

public class Details implements DogInterface {



	HashMap<String,Dog> hm = new HashMap<String,Dog>();


	@Override
	public void getDetails() {
		System.out.println(hm);

	}


	@Override
	public boolean removeDetails(Dog d) {
		if(d!=null) {

			return true;
		}
		return false;
	}

	@Override
	public void addDetails(Dog d) {
		if(d!=null) {
			hm.put("1", d);

			
		}
		
	}

}
