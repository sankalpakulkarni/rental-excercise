import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

public class Main {

    public static void main(String[] args) {
        System.out.println("Hello World!");
        List<Person> list = new ArrayList<Person>();

        Person p1 = new Person();
        p1.setFirstName("Bob");
        p1.setLastName("Harrison");
        p1.setHeightIn(5.77);
        p1.setWeightIn(170.00);
        SimpleDateFormat sdf = new SimpleDateFormat("dd-M-yyyy");
        try {
            Date date = sdf.parse("31-08-2000");
            p1.setDateOfBirth(date);
        } catch (ParseException e) {
            e.printStackTrace();
        }

        Person p2 = new Person();
        p2.setFirstName("Harry");
        p2.setLastName("Potter");
        p2.setHeightIn(5.77);
        p2.setWeightIn(170.00);
        try {
            Date date = sdf.parse("12-08-1998");
            p2.setDateOfBirth(date);
        } catch (ParseException e) {
            e.printStackTrace();
        }

        list.add(p1);
        list.add(p2);

        List sorted = sort(list, "dateOfBirth", "ascending" );
        System.out.println("-----DOB-------");
        System.out.println(sorted);

        System.out.println("-----DOB Desc-------");
        List sortedDesc = sort(list, "dateOfBirth", "descending" );
        System.out.println(sortedDesc);

        System.out.println("-----Method Two-------");
        List sortedOther = SortPeople.sort(list, "firstName", "ascending");
        System.out.println(sortedOther);
    }


    static List<Person> sort(Iterable<Person> people, String sortField,
                             String ascending){
        final List<Person> target = new ArrayList<Person>();
        people.forEach(target:: add);

        PersonComparatorBuilder builder = new PersonComparatorBuilder();
        if(ascending.endsWith("ascending")){
            Collections.sort(target,builder.buildComparator(sortField));
        } else  if(ascending.endsWith("descending")){
            Collections.sort(target, Collections.reverseOrder(builder.buildComparator(sortField)));
        } else {
            // return unsorted list
            // this is open for discussion
        }
        return target;
    }
}
