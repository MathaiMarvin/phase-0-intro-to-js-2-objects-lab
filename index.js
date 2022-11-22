const employee ={
    name: "Sam",
    streetAddress : "44 Jump street",
};

function updateEmployeeWithKeyAndValue(employee, key, value){
    return {...employee,
    [key]: value,
    };
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value; //Why are we using bracket notation here?

  return employee;
}
function  deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee}
    delete newEmployee[key]
    return newEmployee;
}


function  destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee;
}
