# IT2810 - Prosjekt 2

## Introduksjon

GitLab Search Engine er en single page application (SPA), der brukeren kan søke opp nesten hvilket som helst repo fra GitLab og kunne få presentert grunnleggende informasjon om repoet.

Vi har valgt å plukke ut antall commits, issues, forks og stars. Disse presenteres under søkebaren. Standard git-repo for dette prosjektet er vårt eget. Det gir oss mulighet til å hente ut standard info, samt egne info som krever access tokens. Midt på siden har vi et pie-chart som viser fordeling på antall commits på main-branchen.

## Teknologi

### React

Vi har benyttet oss av REACT-rammeverket. REACT er et JavaScript-bibliotek for utvikling av dynamiske brukergrensesnitt, som har vært og fortsatt er svært populært. Spesielt brukt for SPA (Single-page application) og mobilapplikasjoner. Applikasjonen benytter React med hovedsakelig bruk av funksjonelle komponenter, som har blitt implementert i Typescript JSX.

### Node.js

Runtime-systemet Node.js blir brukt som utviklingsmiljø med kjøring av kode på klient-siden. Det blir også brukt for oppsett og pakking av prosjektet.

### AJAX (Asynchronous Javascript)


## HTML Web Storage

## Responsiv Web Design

## Testing

## Bruk av GIT
GitLab brukes til utvikling og repo. Vi har en main branch, development og brancher for issues. Vi lagde en utviklings-branch (development), som alle andre branches ble lagd 

## Hvordan har vi laget det

Vi har benyttet oss av REACT-rammeverket. REACT er et JavaScript-bibliotek for utvikling av dynasimske brukergrensesnitt, som har vært og forstatt er svært populært. Spesielt brukt for SPA (Single-page application) og mobilapplikasjoner.

I "utils.tsx" henter vi ut dataene vi ønsker basert på informasjoenen som blir fylt inn i søkefeltet. I dette feltet fyller man inn id på repoet. For alle andre repo enn vårt eget, så vil man få opp info på de fire små feltene.

Vi har i utgangspunktet laget en mappestruktur for hovedkomponentene på siden. I.e. searchbar, stats, footer, charts osv. Inne i disse mappene finner man de ulike elementene og evt. styles for disse elementene.
