import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by skulkarni4 on 9/30/18.
 */
public class SortPeople {

    static List<Person> sort(Iterable<Person> people, String sortField, String ascending) {
        final List<Person> target = new ArrayList<Person>();
        people.forEach(target:: add);
        List<Person> sortedList = new ArrayList<>();

        switch (sortField) {
            case "dateOfBirth":
                if (ascending.equals("ascending")) {
                    sortedList = target.stream().sorted(Comparator.comparing(Person::getDateOfBirth)).collect(Collectors.toList());
                } else {
                    sortedList = target.stream().sorted(Comparator.comparing(Person::getDateOfBirth).reversed()).collect(Collectors.toList());
                }
                break;
            case "ssn":
                if (ascending.equals("ascending")) {
                    sortedList = target.stream().sorted(Comparator.comparing(Person::getSsn)).collect(Collectors.toList());
                } else {
                    sortedList = target.stream().sorted(Comparator.comparing(Person::getSsn).reversed()).collect(Collectors.toList());
                }
                break;
            case "firstName":
                if (ascending.equals("ascending")) {
                    sortedList = target.stream().sorted(Comparator.comparing(Person::getFirstName)).collect(Collectors.toList());
                } else {
                    sortedList = target.stream().sorted(Comparator.comparing(Person::getFirstName).reversed()).collect(Collectors.toList());
                }
                break;
            case "lastName":
                if (ascending.equals("ascending")) {
                    sortedList = target.stream().sorted(Comparator.comparing(Person::getLastName)).collect(Collectors.toList());
                } else {
                    sortedList = target.stream().sorted(Comparator.comparing(Person::getLastName).reversed()).collect(Collectors.toList());
                }
                break;
            case "heightIn":
                if (ascending.equals("ascending")) {
                    sortedList = target.stream().sorted(Comparator.comparing(Person::getHeightIn)).collect(Collectors.toList());
                } else {
                    sortedList = target.stream().sorted(Comparator.comparing(Person::getHeightIn).reversed()).collect(Collectors.toList());
                }
                break;
            case "weightIn":
                if (ascending.equals("ascending")) {
                    sortedList = target.stream().sorted(Comparator.comparing(Person::getWeightIn)).collect(Collectors.toList());
                } else {
                    sortedList = target.stream().sorted(Comparator.comparing(Person::getWeightIn).reversed()).collect(Collectors.toList());
                }
                break;
        }

        return sortedList;

    }
}
