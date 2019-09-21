package com.dev.hotelbilling;

public interface Operations_int {
	
	public boolean addItems(String str,Hotel_Bill key);
	public boolean modifyItems(String str,Hotel_Bill key);
	public boolean deleteItem(Hotel_Bill key);
	public void displayItems();
	public void totalBill();
}
