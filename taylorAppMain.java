package taylorApp;

import java.util.*;


public class taylorAppMain {
	
	public static void main(String args[]) {

		//Main Menu Prompting User
		displayMenu();
		
		try (Scanner userInput = new Scanner(System.in)) {
			
			while(true) {
				
			//Users Input
			String input = userInput.nextLine();
			
			//Making cases
			switch(input.toLowerCase()){
				case "e":
					System.out.println("WELCOME!!!");
					System.out.println("Enter your pet type");
					
					//User enters the type of pet
					String type = userInput.nextLine();
					
					System.out.println("Enter your pet's name");
					
					//User enters their pet name
					String name = userInput.nextLine();
					
					Pet pet = new Pet(type, name);
					//Displays pet type and name
					System.out.println(pet.toString());
					
					return;
				
				case "q":
					System.out.println("Hate to see you leave but have an AMAZING DAYY!!XD");
					System.exit(0);
					break;
				
				default:
					System.out.println("Invalid input. Please enter E or Q:");
					displayMenu();
				}
			}
		}	
	}
	
	/**
	 * Main Menu for the game
	 */
	public static void displayMenu() {
		System.out.println("******Welcome to the Taylor App!!*******");
		System.out.println(" Press [E] To Enter  Press [Q] to Quit  ");
	}
}
	

