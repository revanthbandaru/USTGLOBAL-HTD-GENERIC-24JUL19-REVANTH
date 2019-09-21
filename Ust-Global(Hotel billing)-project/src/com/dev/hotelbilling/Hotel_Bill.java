package com.dev.hotelbilling;

public class Hotel_Bill {

	private int Item_Code;
	private String Food_Name;
	private double Price;

	public int getItem_Code() {
		return Item_Code;
	}

	public void setItem_Code(int item_Code) {
		this.Item_Code = item_Code;
	}

	public String getFood_Name() {
		return Food_Name;
	}

	public void setFood_Name(String food_Name) {
		this.Food_Name = food_Name;
	}

	public double getPrice() {
		return Price;
	}

	public void setPrice(double price) {
		this.Price = price;
	}

	@Override
	public String toString() {
		return "Hotel_Bill [Item_Code=" + Item_Code + ", Food_Name=" + Food_Name + ", Price=" + Price + "]";
	}
}
