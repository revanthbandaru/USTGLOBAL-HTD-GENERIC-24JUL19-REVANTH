package com.dev.practice;

import java.util.HashMap;

public class BikeData implements BikeInt{
	
	HashMap<String,Bike> hm = new HashMap<String,Bike>();

	

	@Override
	public boolean addBike(String key, Bike b) {
		if(b!=null) {
			hm.put(key, b);
			return true;
		}
		return false;
	}



	@Override
	public void getBike() {
		System.out.println(hm);
		
	}



	@Override
	public boolean removeBike(String key) {
		if(key!=null) {
			hm.remove(key);
			return true;
		}
		return false;
		
	}

	@Override
	public boolean updateData(String key, Bike b) {
		if(key!=null) {
			hm.put(key, b);
			return true;
		}
		return false;
	}

}
