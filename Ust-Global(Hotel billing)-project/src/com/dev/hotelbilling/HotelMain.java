package com.dev.hotelbilling;

import java.util.Scanner;

public class HotelMain {

	static Bill_process bp = new Bill_process();

	static Hotel_Bill hb = new Hotel_Bill();
	static Hotel_Bill hb1 = new Hotel_Bill();
	static Hotel_Bill hb2 = new Hotel_Bill();
	static Hotel_Bill hb3 = new Hotel_Bill();
	static Hotel_Bill hb4 = new Hotel_Bill();

	public static void main(String[] args) {
		Scanner scn = new Scanner(System.in);

		System.out.println("To show all food items press '1'");

		System.out.println("To take order from customers press '2'and '0' to end the order");

		System.out.println("To operate on food items press '3'");

		System.out.println("to check total bill of the day press '4'");
		int a1 = scn.nextInt();

		hb.setFood_Name("Dosa");
		hb.setItem_Code(101);
		hb.setPrice(45.20);

		hb1.setFood_Name("Puuri");
		hb1.setItem_Code(102);
		hb1.setPrice(35.90);

		hb2.setFood_Name("Upma");
		hb2.setItem_Code(103);
		hb2.setPrice(30.30);

		hb3.setFood_Name("Chapathi");
		hb3.setItem_Code(104);
		hb3.setPrice(38.50);

		hb4.setFood_Name("parata");
		hb4.setItem_Code(105);
		hb4.setPrice(60.70);
		bp.addItems("101", hb);
		bp.addItems("102", hb1);
		bp.addItems("103", hb2);
		bp.addItems("104", hb3);
		bp.addItems("105", hb4);

		if (a1 == 1) {
			bp.displayItems();

		} else if (a1 == 3) {

			System.out.println("Press A to add food item ");
			System.out.println("Press B to remove food item ");
			System.out.println("Press C to modify food item ");

			 String c = scn.next();
			if (c == "add") {
				bp.addItems("101", hb);
				bp.addItems("102", hb1);
				bp.addItems("103", hb2);
				bp.addItems("104", hb3);
				bp.addItems("105", hb4);
				System.out.println("added");
				bp.displayItems();

			} else if (c == "delete") {

				bp.deleteItem(hb);
				bp.deleteItem(hb1);
				bp.deleteItem(hb2);
				bp.deleteItem(hb3);
				bp.deleteItem(hb4);
				System.out.println("deleted");
				System.out.println("all the elements are deleted " + bp.deleteItem(hb4));

			} else if (c == "modify") {

				hb.setFood_Name("Idly");
				hb1.setFood_Name("kaara_bath");
				bp.modifyItems("101", hb);
				bp.modifyItems("102", hb1);
				bp.modifyItems("103", hb2);
				bp.modifyItems("104", hb3);
				bp.modifyItems("105", hb4);
				bp.displayItems();
			} else if (c == "1") {

			} else {
				System.out.println("invalid input entered");
			}
		} else if (a1 == 2) {
			System.out.println("you must enter the code of the item to select your menu");
			m1();
		} else if (a1 == 4) {
			Hotel_Bill[] arr = { hb, hb1, hb2, hb3, hb4 };
			for (int i = 0; i <= arr.length; i++) {

				double total = 0;
				total = total + arr[i].getPrice();

				System.out.println("total amount of the dishes" + total);
			}
		}
	}

	private static void m1() {
		Scanner sc = new Scanner(System.in);
		int getOrder = sc.nextInt();

		if (getOrder == 101) {

			System.out.println(bp.addItems("101", hb));
			double d = hb.getPrice();
			System.out.println("item is: " + hb.getFood_Name());
			int getOrder1 = sc.nextInt();
		} else if (getOrder == 102) {
			System.out.println(bp.addItems("102", hb1));
			double d1 = hb1.getPrice();
			System.out.println("item is: " + hb1.getFood_Name());
			int getOrder2 = sc.nextInt();
		} else if (getOrder == 103) {
			System.out.println(bp.addItems("103", hb2));
			double d2 = hb2.getPrice();
			System.out.println("item is: " + hb2.getFood_Name());
			int getOrder3 = sc.nextInt();

		} else if (getOrder == 104) {
			System.out.println(bp.addItems("104", hb3));
			double d3 = hb3.getPrice();
			System.out.println("item is: " + hb3.getFood_Name());
			int getOrder4 = sc.nextInt();
		} else if (getOrder == 105) {
			System.out.println(bp.addItems("105", hb4));
			double d4 = hb4.getPrice();
			System.out.println("item is: " + hb4.getFood_Name());
		}

		if (getOrder == 0) {

			System.out.println("your order is end thank you");
		}

	}
}
