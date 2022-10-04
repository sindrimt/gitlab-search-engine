# IT2810 - Prosjekt 2

## Introduksjon

GitLab Search Engine er en single page application (SPA), der brukeren kan søke opp offentlige repos fra NTNU IDI sin Gitlab og kunne få presentert grunnleggende informasjon om repoet. Dette gjennomføres ved å søke opp repoets unike ID.

Vi har valgt å plukke ut antall commits, issues, forks og stars. Disse presenteres under søkebaren. Standard git-repo for dette prosjektet er vårt eget. Det når man ved Det gir oss mulighet til å hente ut standard info, samt egne info som krever access tokens. Midt på siden har vi et pie-chart som viser prosentvis fordeling på antall commits.

Nettsiden er publisert og tilgjengelig på linken om man er koblet på skolens nettverk eller VPN: http://it2810-40.idi.ntnu.no/project2/

## Teknologi

<<<<<<< HEAD
### React

Vi har benyttet oss av REACT-rammeverket. REACT er et JavaScript-bibliotek for utvikling av dynamiske brukergrensesnitt, som har vært og fortsatt er svært populært. Spesielt brukt for SPA (Single-page application) og mobilapplikasjoner. Applikasjonen benytter React med hovedsakelig bruk av funksjonelle komponenter, som har blitt implementert i Typescript JSX.

#### Styled-components

Vi valgte å bruke styled-components, som er et svært populært CSS-bibliotek for applikasjoner lagd med React. Biblioteket gir oss muligheten til å skrive vanlig CSS i Javascript. En stor fordel med styled-components er at det løser problemer knyttet til CSS spesifitet - man slipper f.eks bryet med at klassenavn er i strid med hverandre.

### Node.js

Runtime-systemet Node.js blir brukt som utviklingsmiljø med kjøring av kode på klient-siden. Det blir også brukt for oppsett og pakking av prosjektet.

### AJAX (Asynchronous Javascript)

Ved hjelp av den innebygde fetch()-funksjonen i Javascript...

## Mappestruktur

Vi har i utgangspunktet laget en mappestruktur for hovedkomponentene på siden. I.e. searchbar, stats, footer, charts osv. Inne i disse mappene finner man de ulike elementene og evt. styles for disse elementene.

## HTML Web Storage

Vi har benyttet oss av localStorage for å gi applikasjonen mulighet til å husk hva som var det åpne repoet. Dette gir mulighet for å refershe siden, samt krysse ut siden for så å komme tilbake til det forrige repoet man kikket på.

## Responsiv Web Design

Nettsiden har et responsivt webdesign ved

## Testing
### Testing av responsiv design
Testing av brukergrensesnitt og responsiv design ble hovedsakelig gjennomført i Firefox og Chrome. Nettsiden ble testet for både vertikal og horisontal orientering, samt skalering og interaksjon. Følgende enheter ble testet på:

#### Mobil

- Samsung Galaxy A52s 5G
- iPhone 11

#### Tablets

- iPad Air (Gen 4th) 10.9"

#### Desktops

- HP Pavilion 15.6"
- ASUS ROG FLOW X 13"

### Testing med Jest
Vi har benyttet oss av automatiske tester i Jest for å teste prosjektet. 

NOE OM HVILKE KOMPONENTER SOM VI HAR TESTA (SNAPSHOT ETC.)

## Bruk av Git og GitLab

Gruppen har aktivt brukt Git gjennom hele utviklingen av nettsiden. Vi bestemte oss tidlig å bruke en _development_-branch som "hoved-branch" gjennom utviklingsperioden, og ta utgangspunkt i denne ved oppretting og merging av andre branches. Merging av _development_ med _main_ skulle kun skje, dersom vi visste med sikkerhet at koden fungerte som den skulle. Arbeidsoppgaver ble uttrykt i form av beskrivende issues på GitLab. Vi fant ut at oppretting av en branch til hvert issue var god konvensjon, da man tydelig kunne se hvilke endringer som hadde blitt gjort ved å se på navnet til issue(t)/branch(en).