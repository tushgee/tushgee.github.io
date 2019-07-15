public class User {
    private String username;
    private String password;

    User(String username, String password){
        this.username = username;
        this.password = password;
    }
    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }


    public static User getUserFromDatabase(String username, String password){

        if ("tushgee".equals(username) && "123".equals(password)){
            return new User(username, password);
        }

        return null;
    }


}
