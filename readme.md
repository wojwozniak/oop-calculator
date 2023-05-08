# Kalkulator (Projekt końcowy z przedmiotu Programowanie Obiektowe)

## Opis
Kalkulator pozwalający wykonać wszystkie podstawowe operacje arytmetyczne. Projekt końcowy z przedmiotu Programowanie Obiektowe.


## Jak skompilować i uruchomić
- Sklonuj to repozytorium
- Wejdź do repozytorium w terminalu za pomocą `cd`
- Wywołaj komendę `npm install`
- Wywołaj `npm run start` by uruchomić aplikację. Można użyć też `npm run dev` by wejść w tryb developerski (automatyczne przeładowanie po zmianach, więcej ostrzerzeń przed potecjalnymi błędami)
Strona będzie dostępna pod adresem `localhost:5173`

Po pierwszym uruchomieniu, by ponownie uruchomić aplikację wystarczy wywołać `npm run start` w folderze z projektem.

Niezależnie od powyższej metody strona dostępna również za pośrednictwem Github Pages (pod adresem #TODO wpisać adres strony)


## Technologie
Strona została stworzona przy użyciu vite (`npm create vite@latest`)
Głównym językiem użytym do stworzenia strony był Typescript (biblioteka React)
Do wygenerowania diagramu klas użyto strony [draw.io](https://draw.io/)
Wykorzystaliśmy również generator siatki CSS [CSS Grid Generator](https://cssgrid-generator.netlify.app/)


## Uproszczona struktura projektu
Aby zrozumieć działanie aplikacji można podzielić ją na trzy części:
- Kod kalkulatora (folder src/calculator)
- Kod reszty strony (folder src/components,  pliki src/main.tsx i index.html)
- Pliki konfiguracyjne (wszystkie pliki poza powyższymi)


## Struktura kalkulatora
#TODO streścimy tutaj diagram klas


## Struktura repozytorium
Poniżej znajduje się rozpiska wszystkich folderów i plików w repozytorium (poza tymi bezpośrednio związanymi z kalkulatorem - te zostały opisane powyżej)

- node_modules - folder z zależnościami deweloperskimi - generuje się po wywołaniu npm install (nic tu nie zmieniamy)
- Folder src:
    - calculator - folder z kodem źródłowym kalkulatora
    - components - folder z komponentami strony (wszystko "wokół" kalkulatora)
    - index.css - plik ze stylami strony
    - main.tsx - plik "wyjściowy", react używa go do wyrenderowania strony
    - vite-env.d.ts - plik konfiguracyjny vite
- .gitignore - plik konfiguracyjny gita
- .eslintrc.js - plik konfiguracyjny eslint
- index.html - plik html strony (react używa elementu <div id="root" /> do wyrenderowania strony)
- package.json - plik konfiguracyjny npm
- package-lock.json - plik konfiguracyjny npm
- README.md - plik z opisem projektu
- tsconfig.json - plik konfiguracyjny typescript
- tsconfig.node.json - plik konfiguracyjny typescript
- vite.config.ts - plik konfiguracyjny vite

Repozytorium zawiera również diagram klas kalkulatora [z tej strony](https://draw.io/)