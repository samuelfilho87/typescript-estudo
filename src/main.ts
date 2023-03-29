import { Person } from "./Person";
import { Repository } from "./Repository";

const book = new Person("Samuel Damasceno Filho", 36);

const persons = new Repository<Person>();

persons.add(new Person('Samuel Damasceno Filho', 36));

console.log(persons);
