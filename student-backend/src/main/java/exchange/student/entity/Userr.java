package exchange.student.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

import org.springframework.jdbc.support.lob.DefaultLobHandler;
import org.springframework.jdbc.support.lob.LobHandler;

@Entity
public class Userr {
	
	@Id
	private String mobile;
	
	private String fname;
	private String lname;
	private String profilepic; // getBlobAsBytes, Lobhandler
	private String sex;
	private String salt;
	private String password;

	
	
	public Userr(String mobile, String fname, String lname, String profilepic, String sex, String salt,
			String password) {
		this.mobile = mobile;
		this.fname = fname;
		this.lname = lname;
		this.profilepic = profilepic;
		this.sex = sex;
		this.salt = salt;
		this.password = password;
	}



	public String getMobile() {
		return mobile;
	}



	public void setMobile(String mobile) {
		this.mobile = mobile;
	}



	public String getFname() {
		return fname;
	}



	public void setFname(String fname) {
		this.fname = fname;
	}



	public String getLname() {
		return lname;
	}



	public void setLname(String lname) {
		this.lname = lname;
	}



	public String getProfilepic() {
		return profilepic;
	}



	public void setProfilepic(String profilepic) {
		this.profilepic = profilepic;
	}



	public String getSex() {
		return sex;
	}



	public void setSex(String sex) {
		this.sex = sex;
	}



	public String getSalt() {
		return salt;
	}



	public void setSalt(String salt) {
		this.salt = salt;
	}



	public String getPassword() {
		return password;
	}



	public void setPassword(String password) {
		this.password = password;
	}
	
}
