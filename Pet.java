package taylorApp;

public class Pet {
	private String type;
	
	
	/**
	 * Default for pet
	 */
	public Pet() {
		type = null;
	}
	
	/**
	 * Type method for pet
	 * @param type The pet type entered/chosen by the user
	 */
	public Pet(String type) {
		this.type = type;
	}
	
	/**
	 * Setter for the pet
	 * @param type The type of pet entered/chosen by the user
	 */
	public void setPetType(String type) {
		this.type = type;
	}
	
	/**
	 * Getter for pet type
	 * @return The type of pet the user entered/chose
	 */
	public String getPetType(){
		return type;
	}
	
	@Override
	/**
	 * String method for pet type
	 */
	public String toString() {
		return "Your pet is a " + type + "!";
	}
	
	
	

}
