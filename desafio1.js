
function calculatSalary(hourValue,hoursWorked) {

    let grossSalary = hourValue * hoursWorked;
    let rate = 0;
    
    if (grossSalary <= 900) {
        rate = 0;
    } else if (grossSalary <= 1500) {
        rate = 5/100
    } else if (grossSalary <= 2500) {
        rate = 1/10
    } else if (grossSalary > 2500) {
        rate = 2/10
    } 

    const incomeTax = grossSalary*(rate);
    const syndicate = grossSalary*(3/100);
    const totalDiscount = incomeTax + syndicate;
    const netSalary = grossSalary - totalDiscount;
    const fgts = grossSalary*(11/100);

    console.log(`Gross Salary (${hourValue}*${hoursWorked}):  R$${grossSalary}`)
    console.log(`IR :  R$${incomeTax}`)
    console.log(`( - ) Syndicate :  3%`)
    console.log(`FGTS : 11%`)
    console.log(`Total Discount :  ${totalDiscount}`)
    console.log(`Net Salary : ${netSalary}`)

    return
}
    
calculatSalary(6.55,168)

