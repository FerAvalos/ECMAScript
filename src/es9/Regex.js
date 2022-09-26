const regex = /(\d{4})-(\d{2})-(\d{2})/; //Manejo de fechas, 4 caracteres para año, 2 para mes y 2 para día
const matchers = regex.exec("2022-01-01");
console.table(matchers);
