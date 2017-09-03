package model;

public class UserTest {
	public String givenName;
	public String name;
	public String id;
	public String imageUrl;
	
   public UserTest(String id) {
        this.id = id;
    }

	   public UserTest() {
        
    }

	@Override
	public String toString() {
		return "UserTest [givenName=" + givenName + ", name=" + name + ", id=" + id + ", imageUrl=" + imageUrl + "]";
	}

	@Override
    public boolean equals(Object objecto) {
        if (objecto == null)
            return false;
        if (objecto.getClass() != getClass())
            return false;
        UserTest aComparar = (UserTest) objecto;
        if (!this.id.equals(aComparar.id))
            return false;
        else
            return true;
    }


}
