const maleNames = ["слава", "лёша", "роман", "кир", "джефф", "генерал"];
const maleSurnames = [
  "кай",
  "вернике",
  "террорблейд",
  "шейд",
  "курседов",
  "джузо",
  "деседов",
  "манго",
  "соната",
  "рапсодия",
];

const femaleNames = [
  "eлена",
  "киза",
  "арина",
  "Алина",
  "алена",
  "джузо",
  "настя",
  "юля",
  "настя",
  "соня",
];
const femaleSurnames = [
  "шкиль",
  "неомрачённая",
  "кай",
  "джузо",
  "вернике",
  "холодова",
  "мадо",
  "кишо",
  "сакура",
];

document.getElementById("generate-btn").addEventListener("click", () => {
  const gender = document.getElementById("gender-select").value;
  let name, surname;
  if (gender == "male") {
    name = maleNames[Math.floor(Math.random() * maleNames.length)];
    surname = maleSurnames[Math.floor(Math.random() * maleSurnames.length)];
  } else {
    name = femaleNames[Math.floor(Math.random() * femaleNames.length)];
    surname = femaleSurnames[Math.floor(Math.random() * femaleSurnames.length)];
  }
  document.getElementById("result").innerHTML = `${name} ${surname}`;
});
