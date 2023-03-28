class Vehicle {
    constructor(name, manufacturer, id) {
      this.name = name;
      this.manufacturer = manufacturer;
      this.id = id;
    }
  }
  
  class Car extends Vehicle {
    constructor(name, manufacturer, id, type) {
      super(name, manufacturer, id);
      this.type = type;
    }
  }
  
  class Airplane extends Vehicle {
    constructor(name, manufacturer, id, type) {
      super(name, manufacturer, id);
      this.type = type;
    }
  }
  
  class Employee {
    constructor(name, id, dob) {
      this.name = name;
      this.id = id;
      this.dob = dob;
    }
  }
  
  class Driver extends Employee {
    constructor(name, id, dob, licenseID) {
      super(name, id, dob);
      this.licenseID = licenseID;
    }
  }
  
  class Pilot extends Employee {
    constructor(name, id, dob, licenseID) {
      super(name, id, dob);
      this.licenseID = licenseID;
    }
  }
  
  class Reservation {
    constructor(reservationDate, employeeId, vehicleId, reservationID) {
      this.reservationDate = reservationDate;
      this.employeeId = employeeId;
      this.vehicleId = vehicleId;
      this.reservationID = reservationID;
    }
  }
  
  let car1 = new Car("Model S", "Tesla", 1, "Electric");
  let car2 = new Car("Corolla", "Toyota", 2, "Gas");
  let car3 = new Car("Civic", "Honda", 3, "Gas");
  
  let airplane1 = new Airplane("Boeing 747", "Boeing", 4, "Commercial");
  let airplane2 = new Airplane("Cessna 172", "Cessna", 5, "Private");
  
  let reservations = [];
  
  function assignVehicleToEmployee(employeeId, vehicleId) {
    let employee = null;
    let vehicle = null;
  
    for (let i = 0; i < employees.length; i++) {
      if (employees[i].id === employeeId && employees[i] instanceof Pilot) {
        employee = employees[i];
        break;
      }
    }
  
    for (let i = 0; i < vehicles.length; i++) {
      if (
        vehicles[i].id === vehicleId &&
        ((vehicles[i] instanceof Car && employee instanceof Driver) ||
          (vehicles[i] instanceof Airplane && employee instanceof Pilot))
      ) {
        vehicle = vehicles[i];
        break;
      }
    }
  
    if (employee !== null && vehicle !== null) {
      let reservation = new Reservation(new Date(), employee.id, vehicle.id, reservations.length + 1);
      reservations.push(reservation);
      console.log("Reservation successfully created!");
    } else {
      console.log("Employee and vehicle are not compatible!");
    }
  }
  
  assignVehicleToEmployee(1, 1); // Should print "Reservation successfully created!"
  assignVehicleToEmployee(2, 1); // Should print "Employee and vehicle are not compatible!"
  
  console.log(reservations.map(reservation => reservation.reservationID)); // Should print [1]