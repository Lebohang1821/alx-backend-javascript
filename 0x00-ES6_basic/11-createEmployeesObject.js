export default function createEmployeesObject(departmentName, employees) {
  const departmentEmployees = {};
  departmentEmployees[departmentName] = [...employees];
  return departmentEmployees;
}
