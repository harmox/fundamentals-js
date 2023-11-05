function companyUsers(arr) {
    let companyEmployees = {}
    for (let companyEmployee of arr) {
        let [company, employeId] = companyEmployee.split(' -> ')

        if (company in companyEmployees) {

            if (!companyEmployees[company].includes(employeId)) {
                companyEmployees[company].push(employeId)
            }
        } else {
            companyEmployees[company] = [employeId]
        }
    }
let entry=Object.entries(companyEmployees).sort((a,b)=>a[0].localeCompare(b[0]))

for(let [name,employeId] of entry){
    console.log(name)
    employeId.forEach(id=>console.log(`-- ${id}`))
}
}companyUsers([ 'SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345' ])