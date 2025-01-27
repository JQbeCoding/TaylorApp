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
					choosePet();
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
	
	/**
	 * User selection for their preferred pet
	 */
	public static void choosePet() {
		try (Scanner kbd = new Scanner(System.in)) {
			
			Pet userPet = new Pet();
			//User chooses/enters the type of pet
			System.out.println("Type a letter or enter the type of pet you want:");
			System.out.println("[D]og");
			System.out.println("[C]at");
			System.out.println("[F]ish");
			System.out.println("[E]nter a custom type");
			
			String input = kbd.nextLine();
			boolean entered = false;
			
			while(!entered) {
			switch(input.toLowerCase()) {
			
			case "d":
				userPet.setPetType("Dog");
				entered = true;
				break;
			
			case "c":
				userPet.setPetType("Cat");
				entered = true;
				break;
			
			case "f":
				userPet.setPetType("Fish");
				entered = true;
				break;
			
			case "e":
				System.out.println("Enter your pet type:");
				String petType = kbd.nextLine();
				userPet.setPetType(petType);
				entered = true;
				break;
				
			default:
				System.out.println("Invalid input. Please try again.");
			}
		}
			
			System.out.println("Enter your pet name: ");
			//User enters their pet name
			String petName = kbd.nextLine();
			userPet.setPetName(petName);
			
			;
			//Displays pet type and name
			System.out.println(userPet.toString());
		}	
	}
}
