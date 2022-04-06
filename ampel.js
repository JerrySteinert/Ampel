// 4 Variablen ( Appeln ) jede variablen haben 3 werte ( Rot Gelb Grün)
// 4 wege  oben/unten unten/oben Rechts/links links/rechts

// if unten oben grün else links rechts rot

// if links rechts grün else oben unten rot

let richtung = ["vertikal", "horizontal"];
let ampelPhase = ["Grün", "Rot"];

const schalteAmpeln = (schaltRichtung, aktuellePhase) => {
  console.log(`${schaltRichtung} ist ${aktuellePhase}!`);

  console.log(`${schaltRichtung} wird Gelb`);
  if (aktuellePhase == ampelPhase[0]) {
    console.log(`${schaltRichtung} wird ${ampelPhase[1]}`);
  } else {
    console.log(`${schaltRichtung} wird ${ampelPhase[0]}`);
  }
};

for (i = 0; i < 1; i++) {
  schalteAmpeln(richtung[0], ampelPhase[0]);
  schalteAmpeln(richtung[1], ampelPhase[1]);
  schalteAmpeln(richtung[1], ampelPhase[0]);
  schalteAmpeln(richtung[0], ampelPhase[1]);
}

// funtion ( string ) => loop  counts vowels ( string )

const vowelCounter = (str) => {
  let count = 0;
  const vowel = "AEIOIaeiou";
  for (let i = 0; i < str.length; i++) {
    if (vowel.includes(str[i])) {
      count++;
    }
  }

  return console.log(count);
};
vowelCounter("This is Fun");
