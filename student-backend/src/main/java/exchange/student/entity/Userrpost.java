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
@Table(name="userrpost")
public class Userrpost {

	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	private int upostid;
	
	private String term;
	private String city;
	private String country;
	private boolean active;
	private String bio;
	private int minPrice;
	private int maxPrice;
	
	@OneToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="mobile", referencedColumnName = "mobile")
	private Userr mobile;
	

	public Userrpost(int upostid, String term, String city, String country, boolean active, String bio, int minPrice,
			int maxPrice, Userr mobile) {
		super();
		this.upostid = upostid;
		this.term = term;
		this.city = city;
		this.country = country;
		this.active = active;
		this.bio = bio;
		this.minPrice = minPrice;
		this.maxPrice = maxPrice;
		this.mobile = mobile;
	}


	public Userrpost() {
		super();
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


	public int getMinPrice() {
		return minPrice;
	}

	public void setMinPrice(int minPrice) {
		this.minPrice = minPrice;
	}

	public int getMaxPrice() {
		return maxPrice;
	}

	public void setMaxPrice(int maxPrice) {
		this.maxPrice = maxPrice;
	}
	
	
	
}
