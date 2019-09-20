package com.dev.lambdaexp;

public class Test {

	public static void main(String[] args) {
		
		FuncInt f1 = () -> {
			
			for(int i =0;i<=10;i++) {
				System.out.println("i ="+i);
			}
		};
		f1.display();
		FuncInt f2 =() -> {
			try {
				int i = 10/0;
			System.out.println(i);
			}catch(Exception e) {
				System.out.println("Exception caught");
			}
		};
		f2.display();
	
		FuncInt2 f3 = (int i) -> {
			for(int j = 1;j<=i; j++) {
				System.out.println(j);
			}
		};
		f3.printVal(5);
	}
	

}
