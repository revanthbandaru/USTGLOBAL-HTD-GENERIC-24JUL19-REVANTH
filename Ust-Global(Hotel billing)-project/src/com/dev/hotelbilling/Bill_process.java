package com.dev.hotelbilling;

import java.util.HashMap;

public class Bill_process implements Operations_int {
	
	HashMap<String,Hotel_Bill> hm = new HashMap<String,Hotel_Bill>();
	public static void main(String[] args) {
		
	}
	
	@Override
	public boolean addItems(String str, Hotel_Bill key) {
		if(key != null) {
			
			hm.put(str, key);
			return true;
		}
		return false;
	}
	
	@Override
	public boolean modifyItems(String str, Hotel_Bill key) {
		if(key != null) {
			hm.put(str, key);
			
			return true;
		}
		return false;
	}
	
	@Override
	public boolean deleteItem(Hotel_Bill key) {
		if(key != null) {
			hm.remove(key);
			return true;
		}
		return false;
	}
	@Override
	public void displayItems() {
		System.out.println(hm);
		
	}

	@Override
	public void totalBill() {
		
	
		
		
	}

	

	
	
}
