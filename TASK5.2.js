let resume = {
    name:'HARI SUDHAN A C',
    age:24,
    phone_number:7639549340,
    email:'harisudhanchenniappan@gmail.com',
    educational_qualification:'B.E MECHANICAL ENGINEER',
    academics:'COLLEGE:COLLEGE OF ENGINEERING GUINDY - 81%'+'\n'+'HIGHER SECONDARY:BHARATHI VIDYA BHAVAN - 98%',
    specialskills:'good communication, multitasking abilities',
    languages_known:'english,tamil,hindi',
    softwareLanguages:'C,C++,PYTHON,JAVASCRIPT',
    workExperience:'1.5 years as a business associate in a textile manufacturing industry - "VELA TEXTILES"'
}
let c=Object.entries(resume)
let b=Object.entries(resume).length

for(let a=0;a<b;a++){
    console.log(c[a].join(': '))
}
console.log('\n')
for(let d in c)
console.log(c[d].join(': '))
console.log('\n')
for(let d of c)
console.log(d.join(':'))