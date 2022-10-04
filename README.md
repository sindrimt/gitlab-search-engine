## Gruppe 40 - Prosjekt 2
Dette prosjektet er laget med REACT og skal vise grunnleggende bruk, sammen med blant annet REST API.
Vi har laget en GitLab Search Engine. Hensikten med denne applikasjonenen er å kunne søke opp nesten hvilket som helst repo fra GitLab og kunne få grunnleggende informasjon presenterert om repoet. 

Vi har valgt å plukke ut antall commits, issues, forks og stars. Disse presenteres under søkebaren. Midt på siden har vi et kakediagram som viser fordeling på antall commits på main-branchen.

Standard git-repo for dette prosjektet er vårt eget. Det gir oss mulighet til å hente ut standard info, samt egne info som krever access tokens. Dette gir oss muligheten til å kunne lage en pie-chart (og evt en liste over brnaches) over fordelingen på antall commits i main-brachen. 

I "utils.tsx" henter vi ut dataene vi ønsker basert på informasjoenen som blir fylt inn i søkefeltet. I dette feltet fyller man inn id på repoet. For alle andre repo enn vårt eget, så vil man få opp info på de fire små feltene. 

Vi har i utgangspunktet laget en mappestruktur for hovedkomponentene på siden. I.e. searchbar, stats, footer, charts osv. Inne i disse mappene finner man de ulike elementene og evt. styles for disse elementene.


## Hvordan har vi laget det
Vi har benyttet oss av REACT-rammeverket. REACT er et JavaScript-bibliotek for utvikling av dynasimske brukergrensesnitt, som har vært og forstatt er svært populært. Spesielt brukt for SPA (Single-page application) og mobilapplikasjoner. 






