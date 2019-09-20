package com.dev.filehandling;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;

public class FileCommonsUtil {

	public static void main(String[] args) throws IOException {
		File file = new File("D:/Text.txt");
		FileUtils.touch(file);//maven methods are all static methods.
		if (file.exists()) {
			System.out.println("FIle exists...");
		} else {
			System.out.println("File not found..");
		}
		FileUtils.deleteQuietly(file);
		if (file.exists()) {
			System.out.println("FIle exists...");
		} else {
			System.out.println("File not found..");
		}
	}

}
	