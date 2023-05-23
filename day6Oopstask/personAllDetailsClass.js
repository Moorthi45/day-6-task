//person class to hold all details
 
class person{
    constructor(name,age,phoneNO,email){
    this.name=name;
    this.age=age;
    this.phoneNO=phoneNO;
    this.email=email;
    }
    setPhoneNO(newPhoneNO){
    this.phoneNO= newPhoneNO;
    return this.phoneNO;
    }
    }
    
    const person1=new person("surya","26","9575475856","massurya12@gmail.com");
    person1.setPhoneNO("7418610651");
    console.log(person1);