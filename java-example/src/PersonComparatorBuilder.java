import java.util.Comparator;

public class PersonComparatorBuilder {

    public class SSNComparator implements Comparator<Person> {
        @Override
        public int compare(Person p1, Person p2){
            return p1.getFirstName().compareTo(p2.getFirstName());
        }
    }

    public class DOBComparator implements Comparator<Person> {
        @Override
        public int compare(Person p1, Person p2){
            return p1.getDateOfBirth().compareTo(p2.getDateOfBirth());
        }
    }

    public class LastNameComparator implements Comparator<Person> {
        @Override
        public int compare(Person p1, Person p2){
            return p1.getLastName().compareTo(p2.getLastName());
        }
    }

    public class FirstNameComparator implements Comparator<Person> {
        @Override
        public int compare(Person p1, Person p2){
            return p1.getFirstName().compareTo(p2.getFirstName());
        }
    }

    public class HeightComparator implements Comparator<Person> {
        @Override
        public int compare(Person p1, Person p2){
            return p1.getHeightIn().compareTo(p2.getHeightIn());
        }
    }

    public class WeightComparator implements Comparator<Person> {
        @Override
        public int compare(Person p1, Person p2){
            return p1.getWeightIn().compareTo(p2.getWeightIn());
        }
    }

    public Comparator<Person> buildComparator(String sortfield){
        switch (sortfield) {
            case "dateOfBirth":
                return new DOBComparator();
            case "ssn":
                return new SSNComparator();
            case "lastName":
                return new LastNameComparator();
            case "firstName":
                return new FirstNameComparator();
            case "heightIn":
                return new HeightComparator();
            case "weightIn":
                return new WeightComparator();
        }

        return null;
    }
}
