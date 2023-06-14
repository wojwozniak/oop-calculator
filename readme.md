# Kalkulator (Projekt końcowy z przedmiotu Programowanie Obiektowe)

## Opis
Kalkulator pozwalający wykonać wszystkie podstawowe operacje arytmetyczne. Projekt końcowy - przedmiot Programowanie Obiektowe.


*Napisany przez nas kod znajduje się w folderze src*


## Jak skompilować i uruchomić
- Sklonuj to repozytorium
- Wejdź do repozytorium w terminalu za pomocą `cd`
- Wywołaj komendę `npm install`
- Wywołaj `npm run dev` by uruchomić aplikację.
Strona będzie dostępna pod adresem `localhost:5173`

Po pierwszym uruchomieniu, by ponownie uruchomić aplikację wystarczy wywołać `npm run dev` w folderze z projektem.

Niezależnie od powyższej metody strona dostępna również za pośrednictwem Github Pages [link](https://wojwozniak.github.io/oop-calculator/)


## Technologie
Strona została stworzona przy użyciu vite (`npm create vite@latest`)
Głównym językiem użytym do stworzenia strony był Typescript (biblioteka React)
Do wygenerowania diagramu klas użyto strony [draw.io](https://draw.io/)
Wykorzystaliśmy również generator siatki CSS [CSS Grid Generator](https://cssgrid-generator.netlify.app/)
Strona hostowana jest za pomocą Github Pages


## Uproszczona struktura projektu
Aby zrozumieć działanie aplikacji można podzielić ją na trzy części:
- Kod kalkulatora (folder src/calculator)
- Kod reszty strony (folder src/components,  pliki src/main.tsx i index.html)
- Pliki konfiguracyjne (wszystkie pliki poza powyższymi)


## Struktura klas

Trzeba zauważyć tutaj pewne rozróżnienie - klasami są i komponenty (chociaż od paru lat w reactcie już nie definiujemy ich słowem "class") i klasy będące bezpośrednią częścią kalkulatora. Na diagramie przedstawiliśmy te drugie klasy - tutaj rozpiszemy obie grupy.

### Komponenty

- main.tsx - punkt wyjściowy strony, w którym umieszczamy komponenty do wyrenderowania w przeglądarce
- Head i Foot - komponenty nagłówka i stopki strony, umieszczone wokół głównego komponentu Main
- Main - komponent będący główną częścią strony, odpowiedzialny za wygląd kalkulatora, znajdują się w nim kolejne komponenty
- Calculator - komponent kontrolujący działanie kalkulatora - przechowuje stan, przyjmuje żądania zmian z przycisków i aktualizuje wyświetlacz
- Screen - komponent wyświetlacza, wyświetla aktualny stan kalkulatora
- Buttons - komponent przycisków, odpowiedzialny za wyrenderowanie każdego przycisków z przypisanymi odpowiednimi funkcjami
    - Button - "wzorzec" przycisku wykorzystywany przez Buttons do wygenerowania każdego z przycisków


### Klasy kalkulatora

- Expression - ogólna, abstrakcyjna klasa wyrażenia arytmetycznego
- NumberExpression - klasa reprezentująca liczbę
- UnaryOperation - klasa reprezentująca operację jednoargumentową
   - UnaryMinusOperation - klasa reprezentująca operację unarnego minusa
- BinaryOperation - klasa reprezentująca operację dwuargumentową
   - AdditionOperation - klasa reprezentująca operację dodawania
   - SubtractionOperation - klasa reprezentująca operację odejmowania
   - MultiplicationOperation - klasa reprezentująca operację mnożenia
   - DivisionOperation - klasa reprezentująca operację dzielenia


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

Repozytorium zawiera również diagram klas kalkulatora w formacie .drawio oraz .png - folder diagrams