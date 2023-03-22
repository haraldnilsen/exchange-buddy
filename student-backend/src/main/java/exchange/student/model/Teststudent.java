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
	private Integer studentnr;
	
	public Teststudent(Integer sid, String name, Integer studentnr) {
		this.sid = sid;
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

	public Integer getStudentnr() {
		return studentnr;
	}

	public void setStudentnr(Integer studentnr) {
		this.studentnr = studentnr;
	}

}