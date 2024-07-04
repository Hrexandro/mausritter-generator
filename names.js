export const sign = {
  type: "picker",
  list: [
    "Gwiazda - Odważna/brawurowa",
    "Koło - Robotna/bez wyobraźni",
    "Żołądź - Dociekliwa/uparta",
    "Burza - Szczodra/gniewna",
    "Księżyc - Mądra/nieprzenikniona",
    "Matka - Opiekuńcza/zamartwiająca się",
  ],
  
};

export const fur = function() {
  let color = [
     "Czekoladowy",
     "Czarny",
     "Biały",
     "Bury",
     "Szary",
     "Niebieski"
  ]
  let pattern = [
    "Jednolity",
    "Moręgowaty",
    "Łaciaty",
    "Pasiasty",
    "Marmurkowy",
    "Nakrapiany"
  ]
  let list = []

  list.push(`Kolor: ${randomizeFromArray(color)}`+`. Wzór: ${randomizeFromArray(pattern)}`)
  return {
    type: "pickerRoller",
    list
  }

};

export const physicalDetail = {
  type: "picker",
  list: [
    "Pobliźniona mysz",
    "Zadbane futerko",
    "Pulchna mysz",
    "Dredy",
    "Koścista mysz",
    "Farbowane futerko",
    "Smukła mysz",
    "Wygolone futerko",
    "Drobna mysz",
    "Wełnista sierść",
    "Masywna mysz",
    "Jedwabista sierść",
    "Barwy wojenne",
    "Czarne ślepia",
    "Obcy strój",
    "Opaska na oku",
    "Elegancki ubiór",
    "Czerwone ślepia",
    "Połatane ciuchy",
    "Mądre spojrzenie",
    "Modne ubranie",
    "Bystre spojrzenie",
    "Brudne ubranie",
    "Błysk w ślepiu",
    "Brak ucha",
    "Przycięty ogonek",
    "Gruzłowaty pyszczek",
    "Ruchliwy ogonek",
    "Piękne oblicze",
    "Spiczasty ogonek",
    "Okrągły pyszczek",
    "Gruby ogonek",
    "Delikatne rysy",
    "Chwytny ogonek",
    "Smukły pyszczek",
    "Spiralny ogonek"
  ]
}


function randomizeFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export const tavernNames = function () {
  let list = []
  let adjectiveMasculine = [
    "Biały",

    "Zielony",
    "Czarny",
    "Czerwony",
    "Srebrny",
    "Krzywy",
    "Gościnny",
    "Ukryty",
    "Chytry",
    "Szklany",
    "Ciernisty",
    "Złamany"
  ]
  let nounMasculine = [
    "Lis",
    "Rożek",
    "Ser",
    "Orzeł",
    "Robak",
    "Rycerz",
    "Szczur"
  ]
  let adjectiveFeminine = [
    "Biała",
    "Zielona",
    "Czarna",
    "Czerwona",
    "Srebrna",
    "Krzywa",
    "Gościnna",
    "Ukryta",
    "Chytra",
    "Szklana",
    "Ciernista",
    "Złamana"
  ]
  let nounFeminine = [
     "Pszczoła",
    "Pszczoła",
     "Latarnia",
     "Róża"
  ]

  let nounNeuter = [
    "Ziarno"
  ]

  let adjectiveNeuter = [
    "Białe",
    "Zielone",
    "Czarne",
    "Czerwone",
    "Srebrne",
    "Krzywe",
    "Gościnne",
    "Ukryte",
    "Chytre",
    "Szklane",
    "Cierniste",
    "Złamane"
  ]

  let specialty = [
    "Pieczona marchewka na ostro",
    "Rosół z dżdżownic",
    "Ciasto jeżynowe",
    "Stary ostry ser",
    "Jęczmienna polewka",
    "Dobrze wysmażony filet z rzecznej ryby",
    "Pieczone jabłko",
    "Smażone paluszki z owadzich nóg",
    "Świeży chleb z masłem",
    "Zrabowana landrynka",
    "Nasiona pieczone w miodzie",
    "Grzybowy gulasz"
  ]

  list.push(randomizeFromArray(adjectiveMasculine) + " " + randomizeFromArray(nounMasculine) + ". Specjalność: " + randomizeFromArray(specialty))
  list.push(randomizeFromArray(adjectiveMasculine) + " " + randomizeFromArray(nounMasculine) + ". Specjalność: " + randomizeFromArray(specialty))
  list.push(randomizeFromArray(adjectiveMasculine) + " " + randomizeFromArray(nounMasculine) + ". Specjalność: " + randomizeFromArray(specialty))
  list.push(randomizeFromArray(adjectiveMasculine) + " " + randomizeFromArray(nounMasculine) + ". Specjalność: " + randomizeFromArray(specialty))
  list.push(randomizeFromArray(adjectiveMasculine) + " " + randomizeFromArray(nounMasculine) + ". Specjalność: " + randomizeFromArray(specialty))
  list.push(randomizeFromArray(adjectiveMasculine) + " " + randomizeFromArray(nounMasculine) + ". Specjalność: " + randomizeFromArray(specialty))
  list.push(randomizeFromArray(adjectiveMasculine) + " " + randomizeFromArray(nounMasculine) + ". Specjalność: " + randomizeFromArray(specialty))
  list.push(randomizeFromArray(adjectiveNeuter) + " " + randomizeFromArray(nounNeuter) + ". Specjalność: " + randomizeFromArray(specialty))
  list.push(randomizeFromArray(adjectiveFeminine) + " " + randomizeFromArray(nounFeminine) + ". Specjalność: " + randomizeFromArray(specialty))
  list.push(randomizeFromArray(adjectiveFeminine) + " " + randomizeFromArray(nounFeminine) + ". Specjalność: " + randomizeFromArray(specialty))
  list.push(randomizeFromArray(adjectiveFeminine) + " " + randomizeFromArray(nounFeminine) + ". Specjalność: " + randomizeFromArray(specialty))
  list.push(randomizeFromArray(adjectiveFeminine) + " " + randomizeFromArray(nounFeminine) + ". Specjalność: " + randomizeFromArray(specialty))
  list.push(randomizeFromArray(adjectiveFeminine) + " " + randomizeFromArray(nounFeminine) + ". Specjalność: " + randomizeFromArray(specialty))
  return {
    type: "pickerRoller",
    list
  }
}

// export const something = {
//   type: "picker",
//   list: [
//   ],
// };
