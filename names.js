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



export const settlements = function () {
  let list = []
  let adjectiveMasculine = [
    "Babi",
    "Barani",
    "Brzęczy",
    "Burczy",
    "Dolny",
    "Dudni",
    "Jary",
    "Kozi",
    "Krasny",
    "Krężny",
    "Kruchy",
    "Łysy",
    "Mniejszy",
    "Mokry",
    "Pod–",
    "Polny",
    "Rady",
    "Rybi",
    "Skrzeczy",
    "Suchy",
    "Szumi",
    "Wielki",
    "Wilczy",
  ]
  let nounMasculine = [
    "Siennik",
    "Bór",
    "Dół",
    "Gród",
    "Krzów",
    "Las",
    "Łęg",
    "Miech",
    "Ostrów",
    "Pień",
    "Potok",
    "Spichrz",
    "Staw",
    "Stóg",
    "Targ",
  ]
  let adjectiveFeminine = [
    "Babia",
    "Barania",
    "Brzęczy",
    "Burczy",
    "Dolna",
    "Dudni",
    "Jara",
    "Kozia",
    "Krasna",
    "Krężna",
    "Krucha",
    "Łysa",
    "Mniejsza",
    "Mokra",
    "Pod–",
    "Polna",
    "Rada",
    "Rybia",
    "Skrzeczy",
    "Sucha",
    "Szumi",
    "Wielka",
    "Wilcza",
  ]
  let nounFeminine = [
    "Gałąź",
    "Góra",
    "Kosa",
    "Łąka",
    "Norka",
    "Ruda",
    "Wola",
  ]

  let nounPlural = [
    "Sienniki",
    "Bory",
    "Doły",
    "Drapy",
    "Gałęzie",
    "Góry",

    "Kosy",

    "Lasy",
    "Łąki",
    "Łęgi",
    "Miechy",
    "Norki",

    "Pieńki",
    "Pola",
    "Potoki",
    "Spichrze",
    "Stawy",
    "Stogi",
    "Targi",
  ]

  let adjectivePlural = [
    "Babie",
    "Baranie",

    "Dolne",
    "Dudnią",
    "Jare",
    "Kozie",
    "Krasne",
    "Krężne",
    "Kruche",
    "Łyse",
    "Mniejsze",
    "Mokre",
    "Pod–",
    "Polne",
    "Rade",
    "Rybie",
    "Suche",

    "Wielkie",
    "Wilcze",
  ]



  list.push(randomizeFromArray(adjectiveMasculine) + " " + randomizeFromArray(nounMasculine))
  list.push(randomizeFromArray(adjectivePlural) + " " + randomizeFromArray(nounPlural))
  list.push(randomizeFromArray(adjectiveFeminine) + " " + randomizeFromArray(nounFeminine))

  return {
    type: "pickerRoller",
    list
  }
}



export const mouseNames = {
  // VOTE Veins of the Earth Noble Names
  type: "mixerSpaced",
  prefix: [
    "Bartłomiej",
    "Zofia",
    "Abraham",
    "Aleksy",
    "Augustyn",
    "Bartosz",
    "Bernard",
    "Bogusz",
    "Dobek",
    "liasz",
    "Florian",
    "Gniewosz",
    "Gotard",
    "Grot",
    "Grzymek",
    "Hektor",
    "Hilary",
    "Jakusz",
    "Janusz",
    "Klemens",
    "Kretka",
    "Kuba",
    "Leonard",
    "Lutek",
    "Maciej",
    "Marcisz",
    "Marek",
    "Mateusz",
    "Maurycy",
    "Miklasz",
    "Mirż",
    "Miszko",
    "Nawój",
    "Ostasz",
    "Otto",
    "Pakosz",
    "Pecz",
    "Pełka",
    "Pieszyk",
    "Prandota",
    "Prokop",
    "Prot",
    "Sieciej",
    "Skarbek",
    "Spytko",
    "Szymon",
    "Tomek",
    "Warsz",
    "Więch",
    "Wincenty",
    "Wojciech",
    "Agata",
    "Agnieszka",
    "Alicja",
    "Anna",
    "Barbara",
    "Beata",
    "Boguchna",
    "Ćwikła",
    "Dalia",
    "Dorota",
    "Dzichna",
    "Dzierżka",
    "Elżbieta",
    "Felicja",
    "Flora",
    "Gabriela",
    "Gertruda",
    "Gierka",
    "Gretka",
    "Hanna",
    "Helena",
    "Hiacynta",
    "Jachna",
    "Jadwiga",
    "Jagoda",
    "Kalina",
    "Katarzyna",
    "Kinga",
    "Klara",
    "Krystyna",
    "Krzechna",
    "Laura",
    "Liliana",
    "Łucja",
    "Magda",
    "Malwina",
    "Małgorzata",
    "Marta",
    "Marusza",
    "Niemierza",
    "Ofka",
    "Petronela",
    "Piechna",
    "Piotrusza",
    "Przechna",
    "Róża",
    "Ruta",
    "Świętka",
    "Urszula",
  ],
  sufix: [
    "Buczek",
    "Bylina",
    "Cebulka",
    "Dworzaczek",
    "Forstek",
    "Jasica",
    "Kania",
    "Płacz",
    "Prasół",
    "Pszonka",
    "Rarog",
    "Smarz",
    "Sokolec",
    "Strączka",
    "Syrek",
    "Szopa",
    "Szyszka",
    "Ślęczek",
    "Wróbel",
    "Żegota",
  ],
};
// export const something = {
//   type: "picker",
//   list: [
//   ],
// };
