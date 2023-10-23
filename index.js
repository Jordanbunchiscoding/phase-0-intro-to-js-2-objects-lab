// Write your solution in this file!
const employee = {
    name: "John Doe",
    age: 30,
  };
  
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "age", 31);
  console.log(updatedEmployee);
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = { ...employee }; // Create a clone of the original employee object
    updatedEmployee[key] = value; // Update the value of the provided key in the clone
    return updatedEmployee; // Return the updated clone
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; // Update the value of the provided key in the original employee object
    return employee; // Return the updated employee
  }
  
  function deleteFromEmployeeByKey(employee, key) {
    const updatedEmployee = { ...employee }; // Create a clone of the original employee object
    delete updatedEmployee[key]; // Delete the provided key from the clone
    return updatedEmployee; // Return the updated clone
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; // Delete the provided key from the original employee object
    return employee; // Return the updated employee
  }