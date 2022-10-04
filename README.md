# IT2810 - Prosjekt 2

## Introduksjon

GitLab Search Engine er en single page application (SPA), der brukeren kan søke opp repositories fra NTNU IDI sin Gitlab, og kunne få presentert grunnleggende . Dette gjennomføres ved å søke opp repoets unike ID og access token.

Vi har valgt å plukke ut antall commits, issues, forks og stars. Disse presenteres under søkebaren. Standard git-repo for dette prosjektet er vårt eget. Det når man ved Det gir oss mulighet til å hente ut standard info, samt egne info som krever access tokens. Midt på siden har vi et pie-chart som viser prosentvis fordeling på antall commits.

Nettsiden er publisert og tilgjengelig på linken om man er koblet på skolens nettverk eller VPN: http://it2810-40.idi.ntnu.no/project2/

## Teknologi

### React

Vi har benyttet oss av REACT-rammeverket. REACT er et JavaScript-bibliotek for utvikling av dynamiske brukergrensesnitt, som har vært og fortsatt er svært populært. Spesielt brukt for SPA (Single-page application) og mobilapplikasjoner. Applikasjonen benytter React med hovedsakelig bruk av funksjonelle komponenter, som har blitt implementert i Typescript JSX.

#### Styled-components

Vi valgte å bruke styled-components, som er et svært populært CSS-bibliotek for applikasjoner lagd med React. Biblioteket gir oss muligheten til å skrive vanlig CSS i Javascript. En stor fordel med styled-components er at det løser problemer knyttet til CSS spesifitet - man slipper f.eks bryet med at klassenavn er i strid med hverandre.

### Node.js

Runtime-systemet Node.js blir brukt som utviklingsmiljø med kjøring av kode på klient-siden. Det blir også brukt for oppsett og pakking av prosjektet.

### AJAX (Asynchronous Javascript)

Ajax er innebygd i JavaScript. Ved hjelp av den innebygde fetch()-funksjonen hentet vi inn data fra API-et.

## Mappestruktur

I rotmappen finner man src, public, build og node_modules. Det viktigste ligger i src-mappen. Der finnes components-mappen som inneholder alle komponentene i.e. searchbar, stats, footer, charts osv. Inne i disse mappene finner man også evt. styles for disse komponentene.

**LAGE BILDE AV MAPPESTRUKTUR**

## HTML Web Storage

LocalStorage lagrer data med ingen utløpsdato. Vi har benyttet oss av dette for å lagre hvilket repo brukeren var på ved siste besøk. Dette gjør også at brukeren kan oppdatere eller krysser ut av fanen, så vil det nyligste repoet bli vist på nettsiden.

SessionStorage lagrer data for en session - data slettes ved lukking av nettsiden, fanen eller lukking av nettleseren. Vi har forsøkt å bruke SessionStorage til å lage en dropdown som viser alle søkene man har gjort mens man har vært på nettsiden i denne sessionen. Alle tidligere søk dukker opp, men man kan ikke autofullføre teksten i søkebaren ved å klikke på de. Dette skulle vi sett videre på.

## Responsiv Web Design

Nettsiden har et responsivt webdesign ved at layouten endres i både portrait- og landscape-orientasjon. I portrait-orientasjon vil data ligge under hverandre, og til slutt finner man sektordiagrammet med fordeling av commits. I landscape-orientasjon vil dataen ligge ved siden av hverandre, og diagrammet vil ligge under. Komponentene endres ved justering av vindustørrelse. Grunnen til dette er for å ta i bruk mest mulig av skjermplassen, som er viktig for brukeropplevelsen. For å forsikre at tekst og alle komponentene på siden er i riktig størrelse ved endring av vindubredde har vi brukt viewport, media queries og fleksibelt layout (CSS Grid og Flexbox).

I designprosessen av nettsiden valgte vi å bruke "mobile-first design"-regelen, som går ut på at man i utgangspunktet designer for mobil-enheter og deretter for større skjermer som PC. Ved å fokusere på hvordan innholdet blir framstilt på mindre skjermer, blir designet som regel mer ryddig og praktisk. Det er et faktum at det er lettere å skalere opp og legge til funksjoner framfor å skalere ned og eventuelt fjerne.

Vi brukte hovedsakelig CSS-grid for å gjøre plassering av side-elementer i et to-dimensjonalt layout, mens CSS Flexbox brukes for en-dimensjonale layouts. 
Et eksempel på dette finnes i StatsStyles.tsx hvor CSS-grid er ansvarlig for plasseringen av elementene både vannrett og loddrett, mens CSS Flexbox blir brukt til enkle endringer i en retning. Det er mulig justere på plasseringen til elementene i 2D med flex også, men det er lettere med CSS-grid.

## Testing
### Testing av responsiv design
Testing av brukergrensesnitt og responsiv design ble hovedsakelig gjennomført i Firefox og Google Chrome. Nettsiden ble testet for både portrait- og landscape-orientering, samt skalering og interaksjon. Følgende enheter ble testet på:

#### Mobil

- Samsung Galaxy A52s 5G
- iPhone 11

#### Tablets

- iPad Air (Gen 4th) 10.9"

#### Desktops

- HP Pavilion 15.6"
- ASUS ROG FLOW X 13"

### Testing med Jest
Det har blitt benyttet automatiske tester i Jest for å teste prosjektet. 

Vi har teste footeren ved å sjekke om teksten "@ Made by group 40 - Marcus, Ragnar, Kelvin and Sindri" kommer opp. 

Videre har vi testet om navbaren dukker opp med forventet tekst. Denne teksten er "Welcome to GITLAB SEARCH ENGINE".

Det har også blitt laget en snapshot-test som sjekker om siden renderer som forventet. 

## Bruk av Git og GitLab

Gruppen har aktivt brukt Git gjennom hele utviklingen av nettsiden. Vi bestemte oss tidlig å bruke en _development_-branch som "hoved-branch" gjennom utviklingsperioden, og ta utgangspunkt i denne ved oppretting og merging av andre branches. Merging av _development_ med _main_ skulle kun skje, dersom vi visste med sikkerhet at koden fungerte som den skulle. Arbeidsoppgaver ble uttrykt i form av beskrivende issues på GitLab. Vi fant ut at oppretting av en branch til hvert issue var god konvensjon, da man tydelig kunne se hvilke endringer som hadde blitt gjort ved å se på navnet til issue(t)/branch(en).