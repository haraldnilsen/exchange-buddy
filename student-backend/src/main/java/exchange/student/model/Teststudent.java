package exchange.student.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="teststudent")
public class Teststudent {
	
	@Id
	@GeneratedValue
	private Integer sid;
	private String name;
	private String studentnr;
	
	public Teststudent(String name, String studentnr) {
		this.name = name;
		this.studentnr = studentnr;
	}
	
	public Teststudent() {}

	public Integer getSid() {
		return sid;
	}

	public void setSid(Integer sid) {
		this.sid = sid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getStudentnr() {
		return studentnr;
	}

	public void setStudentnr(String studentnr) {
		this.studentnr = studentnr;
	}

}
