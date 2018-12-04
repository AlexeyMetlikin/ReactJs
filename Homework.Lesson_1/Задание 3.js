class Human{
  
  constructor(name, age, dateOfBirth){
    if(typeof name === 'string')
      this.name = name;
    
    if(typeof age === 'number')
      this.age = age;
    
    if(typeof dateOfBirth === 'string' || dateOfBirth instanceof Date)
      this.dateOfBirth = dateOfBirth;
  }
  
  displayInfo(){
    return 'name: ' + this.name + ', age: ' + this.age + ', dateOfBirth: ' + this.dateOfBirth;
  }
}


class Employee extends Human {
  constructor(name, age, dateOfBirth, salary, department){
    super(name, age, dateOfBirth);
    
    if(typeof salary === 'number')
      this.salary = salary;
    
    if(typeof department === 'string')
      this.department = department;
  }
  
  displayInfo(){
    let info = super.displayInfo();
    info += ', salary: ' + this.salary + ', department: ' + this.department;
    return info;
  }  
}

class Developer extends Employee{
  constructor(name, age, dateOfBirth, salary, department, manager){
    super(name, age, dateOfBirth, salary, department);
    if(!(manager instanceof Manager))
      manager = null;
    this.manager = manager;
  }
  
  changeManager(manager){
    if(manager instanceof Manager){
      manager.removeDevelopers(this);
      this.manager = manager;
    }
  }
  
  clearManager() {
    this.manager = null;
  }
  
  displayInfo(){
    let info = super.displayInfo();
    if(this.manager)
      info += ', manager: ' + this.manager.name;
    return info;
  }  
}

class Manager extends Employee{
  constructor(name, age, dateOfBirth, salary, department, ...developers){
    super(name, age, dateOfBirth, salary, department);
    this.developers = developers;
  }
  
  addDevelopers(...developers){
    for(let i = 0; i < developers.length; i++){
      if(developers[i] instanceof Developer){
        this.developers.push(developers[i]);
        developers[i].manager = this;
      }
    }
  }
  
  removeDevelopers(...developers){
    for(let i = 0; i < developers.length; i++){
      var index = this.developers.indexOf(developers[i]);
      if(developers[i] instanceof Developer && index !== -1){
        this.developers.splice(index, 1);
        developers[i].clearManager();
      }
    }
  }  
  
  displayInfo() {
    let info = super.displayInfo();
    var names = [];
    this.developers.forEach(item => names.push(item.name));
    if(names.length > 0)
      info += ', developers: ' + names.join(', ');
    return info;
  }
  
  displayDevelopers(){
    let developersInfo = [];
    this.developers.forEach(
      item => developersInfo.push(item.displayInfo()));
    return developersInfo.join('\n');
  }
      
}

let manager = new Manager('Max', 25, '3.12.1993', 25000, 'DevOps');
console.log('Manager:\n' + manager.displayInfo());

let developerDen = new Developer('Den', 20, '2 ноября 1998', 24000, 'DevOps');
console.log('Developer:\n' + developerDen.displayInfo());

let developerAlex = new Developer('Alex', 22, new Date(12, 5, 1996), 23000, 'DevOps');
console.log('Developer:\n' + developerAlex.displayInfo());

manager.addDevelopers(developerDen, developerAlex);
console.log('Manager with developers:\n' + manager.displayInfo());
console.log(manager.name + '\'s developers:\n' + manager.displayDevelopers());
manager.removeDevelopers(developerDen, developerAlex);
console.log('Manager without developers:\n' + manager.displayInfo());

console.log('Den without developer:\n' + developerDen.displayInfo());
developerDen.changeManager(manager);
console.log('Den with developer:\n' + developerDen.displayInfo());
developerAlex.changeManager(123);
console.log('Alex without developer:\n' + developerAlex.displayInfo());