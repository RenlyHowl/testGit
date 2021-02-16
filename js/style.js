class People {
  publicProperty = '公共属性';
  constructor(alias, age) {
    this.data = {alias,age};
    this.show = function() {
      console.log(this.name)
    }
  }
  static HOST = 'http://www.houdunren.com'
  action() {
    console.log(`${this.name}的年龄是${this.age}`);
  }
  get name() {
    return this.data.alias;
  }
  set name(value) {
    this.data.alias = value + '123';
  }
}

function User(name, age) {
  this.name = name;
  this.age = age;
}
User.prototype.action = function() {
  console.log(`${this.name}的年龄是${this.age}`);
};
User.prototype.HOST = 'http://www.houdunren.com';
let hd1 = new People('renly', 24);
hd1.name = 'renlyHowl'
let hd2 = new User('mike', 18);
console.log(hd1);
console.log(People.HOST);
console.log(hd2.HOST);
console.dir(People);
console.dir(User);
console.log(publicProperty)