import java.util.Comparator;
import java.util.Date;

public class Person {

    public String getSsn() {
        return ssn;
    }

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public Double getHeightIn() {
        return heightIn;
    }

    public Double getWeightIn() {
        return weightIn;
    }

    public void setSsn(String ssn) {
        this.ssn = ssn;
    }

    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setHeightIn(Double heightIn) {
        this.heightIn = heightIn;
    }

    public void setWeightIn(Double weightIn) {
        this.weightIn = weightIn;
    }

    String ssn;
    Date dateOfBirth;
    String firstName;
    String lastName;
    Double heightIn;
    Double weightIn;

    @Override
    public String toString(){
        return this.getFirstName() + " " + this.getLastName();
    }

}
