const hoje = new Date();
const natal = new Date(hoje.getFullYear(), 11, 25);
const umDia = 1000 * 60 * 60 * 24; // milliseconds

if (hoje.getMonth() == 11 && hoje.getDate() > 25) {
  natal.setFullYear(natal.getFullYear() + 1);
}

const dias = Math.ceil(natal.getTime() - hoje.getTime()) / umDia;

console.log(dias);
