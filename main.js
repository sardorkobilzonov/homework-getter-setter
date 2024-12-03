import Student from "./app.js";
//   Teacher,
//   Group,
//   Payment,
//   Salary,
//   Organization,

console.log(Student);

//1-CLASS MASALASI
{
  class Student {
    constructor(fname, lname, tel, address) {
      this.fullName = fname;
      this.lastName = lname;
      this.phoneNumber = tel;
      this.address = address;
    }
    getFulName() {
      return `Students Full name ${this.fullName} ${this.lastName}`;
    }
    info() {
      return `Studetnt info: ${this.fullName} ${this.lastName}, Phone number: ${this.phoneNumber}, Adderss: ${this.address}`;
    }

    // get set code's
    setName(newNmae) {
      this.fullName = newNmae;
    }
    getName() {
      return this.fullName;
    }
  }
  let student = new Student(
    "John",
    "Doe",
    "+1 347 632 2489",
    "New York Times Sq"
  );
  console.log(student.getFulName());
  console.log(student.info());

  // get set logs
  student.setName("Mike");
  console.log(student.getName());
}
//2-CLASS MASALASI
{
  class Teacher {
    constructor(fname, lname, address, level, salary) {
      this.fullName = fname;
      this.lastName = lname;
      this.address = address;
      this.level = level;
      this.salary = salary;
    }

    getFulName() {
      return `Teacher Full name ${this.fullName} ${this.lastName}`;
    }

    description() {
      return `Teacher description: ${this.fullName}, ${this.lastName}, Adderss: ${this.address}, Level is ${this.level}, Salary: ${this.salary}`;
    }
    // get set code's
    setSalary(newSalary) {
      this.salary = newSalary;
    }

    getSalary() {
      return this.salary;
    }
  }
  let teacher = new Teacher("Boburmirzo", "BRM", "Jorsu", "Senior", "$10.000"); // => manimcha tahminan yozdim salarysini
  console.log(teacher.getFulName());
  console.log(teacher.description());
  // get set logs
  teacher.setSalary("$20.000");
  console.log(teacher.getSalary());
}
//3-CLASS MASALASI
{
  class Group {
    constructor(name, room, level, taacher, studentsCount) {
      this.groupName = name;
      this.groupRoom = room;
      this.groupLevel = level;
      this.groupTeacher = taacher;
      this.groupStudentsCount = studentsCount;
    }
    fullInformation() {
      return `Group name: ${this.groupName}, room: ${this.groupRoom}, level: ${this.groupLevel}, group techer: ${this.groupTeacher}, studetns: ${this.groupStudentsCount}`;
    }
    // get set code's
    setLevel(newLevel) {
      this.groupLevel = newLevel;
    }
    getLevel() {
      return this.groupLevel;
    }
  }

  let group = new Group(
    "Frontend ReactJS N83",
    "Slack",
    "4-month",
    "Boburmirzo",
    "15"
  );
  console.log(group.fullInformation());
  // get set logs
  group.setLevel("5-month");
  console.log(group.getLevel());
}
//4-CLASS MASALASI
// {
//   class Payment {
//     constructor(from, to, amount, status) {
//       this.paymentFrom = from;
//       this.paymentTo = to;
//       this.paymentAmount = amount;
//       this.paymentStatus = status;
//     }
//     getStatus() {
//       return `This money payment from: ${this.paymentFrom}, to: ${this.paymentTo}, Amount: ${this.paymentAmount}, Stratus: ${this.paymentStatus}`;
//     }
// get set code's
//     setPaymentFrom(newPaymentFrom) {
//       this.paymentFrom = newPaymentFrom;
//     }
//     getPayment() {
//       return this.paymentFrom;
//     }
//   }

//   let payment = new Payment("John", "Mike", "$5 000", "false"); // ustoz shu statusga nima qilishshi chunmadim yana date ni ham qilaolmadim
//   console.log(payment.getStatus());

//get set logs
//   payment.setPaymentFrom("Saymon");
//   console.log(payment.getPayment());

// }
//5-CLASS MASALASI
// {
//   class Salary {
//     constructor(to, amount, type, status) {
//       this.salaryTo = to;
//       this.salaryAmount = amount;
//       this.salaryType = type;
//       this.salaryStatus = status;
//     }
//     getInfo() {
//       return `This salary to ${this.salaryTo}, Amount: ${this.salaryAmount}, Type: ${this.salaryType}, Status: ${this.salaryStatus}`;
//     }
//get set code's
//     setAmount(newAmount) {
//       this.salaryAmount = newAmount;
//     }
//     getAmount() {
//       return this.salaryAmount;
//     }
//   }
//   let salary = new Salary("Mike", "200", "USD", "true");
//   console.log(salary.getInfo());
// get set log's
//   salary.setAmount("500");
//   console.log(salary.getAmount());

// }
//6-CLASS MASALASI
// {
//   class Organization {
//     constructor(name, founder, adderss, employeeCount) {
//       this.name = name;
//       this.founder = founder;
//       this.address = adderss;
//       this.employeeCount = employeeCount;
//     }
//     getInfo() {
//       return `Bu oquv markazning nomi ${this.name}, Asoschisi: ${this.founder}, Adderss: ${this.address}, oquv markazning hodimlari tahminan ${this.employeeCount} taga teng`;
//     }
//get set code's
//     setAddress(newAddress) {
//       this.address = newAddress;
//     }
//     getAddress() {
//       return this.address;
//     }
//   }
//   let organization = new Organization(
//     "Najot Talim",
//     "Temurbek Adhamov",
//     "Najot Ta'lim Chilonzor Filial, 76P3+6G4, 100",
//     "400"
//   );
//   console.log(organization.getInfo());
//get set logs
//   organization.setAddress(
//     "Najot Talim Samarqand filiali,  Рудаки, kochasi 225"
//   );
//   console.log(organization.getAddress());

// }
