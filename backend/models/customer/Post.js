const db = require('../../config/db')

class Post {
  constructor (first_name, last_name, email, phone_number, address, password){
    this.first_name = first_name,
    this.last_name = last_name, 
    this.email = email, 
    this.phone_number = phone_number, 
    this.address = address, 
    this.password = password
  }

  save() {
    let sql = `
    INSERT INTO Customer(
      first_name, 
      last_name, 
      email, 
      phone_number, 
      address, 
      password
    )
    VALUES(
      '${this.first_name}',
      '${this.last_name}',
      '${this.email}',
      '${this.phone_number}',
      '${this.address}',
      '${this.password}');`;

    return db.execute(sql);
  }

  static find() {
    let sql = `SELECT * FROM Customer;`;

    return db.execute(sql);
  }

  static findOneCustomer(email) {
    let sql = `SELECT email FROM Customer WHERE email = '${ email }';`;
    return db.execute(sql)
  }
  static findCustomerPassword(email, password) {
    let sql = `SELECT email,password FROM Customer WHERE email = '${ email }' AND password = '${ password }';`;
    return db.execute(sql)
  }
}

module.exports = Post;