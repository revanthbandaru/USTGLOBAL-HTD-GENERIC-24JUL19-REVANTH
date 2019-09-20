package com.dev.assignment3;

import java.util.HashSet;

public class DogData  implements Dogint {
	
	
	HashSet<Dog> hs = new HashSet<Dog>();
	
	@Override
	public boolean addDog(Dog d) {
		if(d!=null) {
			hs.add(d);
			return true;
			
		}
		return false;
		
	}

	@Override
	public void getDog() {
		System.out.println(hs);
		
	}

	@Override
	public boolean removeDog(Dog d) {
		if(d!=null) {
		hs.remove(d);
			return true;
		}
		return false;
	}

	@Override
	public void updateDog(Dog d) {
		
		
	}

	

}
