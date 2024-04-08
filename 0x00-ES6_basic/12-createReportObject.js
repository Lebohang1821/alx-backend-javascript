export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments(employeesList) {
      // Return number of keys in employeesList object
      return Object.keys(employeesList).length;
    },
  };
}
