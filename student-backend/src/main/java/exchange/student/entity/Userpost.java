package exchange.student.entity;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="userpost")
public class Userpost {

	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	private int upostid;
	
	private String term;
	private String city;
	private String country;
	private boolean active;
	private String bio;
	
	@OneToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="mobile", referencedColumnName = "mobile")
	private Userr mobile;

	public Userpost(int upostid, String term, String city, String country, boolean active, String bio, Userr mobile) {
		
		this.upostid = upostid;
		this.term = term;
		this.city = city;
		this.country = country;
		this.active = active;
		this.bio = bio;
		this.mobile = mobile;
	}

	public int getUpostid() {
		return upostid;
	}

	public void setUpostid(int upostid) {
		this.upostid = upostid;
	}

	public String getTerm() {
		return term;
	}

	public void setTerm(String term) {
		this.term = term;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	public String getBio() {
		return bio;
	}

	public void setBio(String bio) {
		this.bio = bio;
	}

	public Userr getMobile() {
		return mobile;
	}

	public void setMobile(Userr mobile) {
		this.mobile = mobile;
	}
	
}