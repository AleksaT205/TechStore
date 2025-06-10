# 🛒 Tech Store – Web prodavnica zasnovana na Astro + React tehnologiji

## 📌 Opis projekta

**Tech Store** je moderna web prodavnica izgrađena korišćenjem [Astro](https://astro.build) frameworka i [React](https://reactjs.org) biblioteke. Glavni cilj projekta jeste demonstracija **visokih performansi statičkog sajta** uz **dinamičke funkcionalnosti** koje omogućavaju interakciju korisnika – poput korpe i poručivanja.

Korišćenjem **Astro-a** kao osnovnog frameworka i uvođenjem **React komponenti samo kada su neophodne**, postignut je odličan balans između brzine, funkcionalnosti i jednostavnosti.

---

## 🧠 Cilj i ideja projekta

- Prikazati **moć Astro frameworka** u pravljenju brzih i optimizovanih sajtova
- Integrisati React komponente za kompleksnije funkcionalnosti (npr. korpa)
- Pokazati organizaciju projekta koja je laka za održavanje i proširivanje
- Demonstrirati statičko renderovanje + dinamičko ponašanje
- Kroz praktičan primer online prodavnice približiti koncept modernih fullstack alata

---

## 🚀 Tehnologije koje su korišćene

| Tehnologija    | Uloga u projektu                                           |
|----------------|------------------------------------------------------------|
| **Astro**      | Glavni framework, koristi se za generisanje statičkih stranica i routing |
| **React**      | Koristi se unutar Astro-a za reaktivne delove sajta (korpa, dugmad) |
| **Context API**| Deljenje globalnog stanja korpe među komponentama         |
| **LocalStorage** | Čuvanje podataka o korpi lokalno u browseru              |
| **CSS**        | Stilizovanje stranica i proizvoda                         |

---

## ⚙️ Funkcionalnosti aplikacije

- ✅ **Početna stranica (index.astro)**  
  Prikazuje listu svih proizvoda, svaka kartica ima dugme za dodavanje u korpu.

- ✅ **Stranica proizvoda ([id].astro)**  
  Detaljan prikaz pojedinačnog proizvoda, uvećana slika, opis i cena.

- ✅ **Korpa (cart.astro)**  
  Interaktivna React komponenta koja prikazuje proizvode dodate u korpu, omogućava poručivanje i uklanjanje stavki.

- ✅ **Poručivanje**  
  Simulacija procesa porudžbine sa obaveštenjem o uspešnosti.

- ✅ **Stanje aplikacije se čuva pomoću Context API-ja**  
  Sve komponente imaju pristup istom stanju bez potrebe za props-ovima.

- ✅ **Korišćenje LocalStorage-a**  
  Korpa ostaje sačuvana i nakon osvežavanja stranice.

- ✅ **Responsive dizajn i SEO optimizacija**  
  Zahvaljujući Astro renderovanju, stranice su prilagođene pretraživačima i brzo se učitavaju.

---

## 🧩 Organizacija koda (struktura)

src/
├── components/
│ ├── App.jsx # React komponenta za prikaz svih proizvoda
│ ├── CartApp.jsx # React komponenta za korpu
│ ├── CartContext.jsx # Globalno stanje korpe
│ ├── ProductCard.jsx # Pojedinačni proizvod
│ └── Header.astro # Navigacija i logo
│
├── layouts/
│ └── DefaultLayout.astro # Zajednički layout za sve stranice
│
├── pages/
│ ├── index.astro # Početna stranica
│ ├── cart.astro # Stranica korpe
│ └── [id].astro # Stranica pojedinačnog proizvoda
│
├── data/
│ └── products.js # Lista proizvoda (mock baza)
│
└── styles/
└── product.css # Stilizacija stranica proizvoda


---

## 🧠 Kako funkcioniše integracija React komponenti?

U Astro frameworku React komponente se uključuju samo kada je to potrebno – zahvaljujući direktivama poput `client:load`, `client:visible`, `client:only`.

Na primer:

```astro
---
// index.astro
import App from '../components/App.jsx';
---
<App client:load />

Ova direktiva govori Astro-u da se App.jsx komponenta učita na klijentskoj strani (u browseru) – samo kada se stranica učita.

To omogućava maksimalnu brzinu jer se JavaScript ne koristi tamo gde nije potreban.

▶️ Pokretanje projekta

1. Klonirnje repozitorijuma:
    git clone https://github.com/ime-projekta/tech-store.git

2. Instalirnje npm:
    npm install

3. Pokretanje razvojnog servera:
    http://localhost:4321


Detaljno objašnjenje rada aplikacije

1. Astro kao temelj
Astro generiše statičke HTML stranice tokom build faze. Ovo omogućava brzo učitavanje stranica, odličan SEO i smanjeno korišćenje JavaScript-a. Sve stranice kao što su index.astro, cart.astro i [id].astro renderuju se unapred i spremne su za prikaz.

2. React za dinamičke delove
Umesto da cela aplikacija koristi React, Astro koristi React samo tamo gde je to neophodno, čime se značajno poboljšavaju performanse. Korpa, dodavanje/brisanje proizvoda i poručivanje su omogućeni kroz React komponente koje se učitavaju pomoću client:load.

3. Context API za upravljanje stanjem
Korpa koristi Context API kako bi se omogućio pristup istom stanju iz različitih komponenti – bez prenosa kroz props-e. Korisnik može da doda proizvod sa jedne strane i vidi promenu stanja bilo gde u aplikaciji.

4. LocalStorage za trajnost podataka
Stanje korpe se čuva u localStorage, pa čak i ako korisnik osveži stranicu, podaci ostaju sačuvani.

5. DefaultLayout.astro
Layout fajl se koristi da se u sve stranice automatski uključe zajednički elementi kao što su Header i <main>. Sadrži i osnovnu HTML strukturu, meta tagove i globalne stilove.

Primer:
---
// layouts/DefaultLayout.astro
import Header from '../components/Header.astro';
---
<html lang="sr">
  <head>
    <meta charset="UTF-8" />
    <title>Tech Store</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body style="margin: 0; font-family: 'Segoe UI', sans-serif; background-color: #fff;">
    <Header />
    <main style="padding: 2rem;">
      <slot />
    </main>
  </body>
</html>


 Prednosti Astro + React kombinacije

🚀 Performanse – stranice se brzo učitavaju jer je većina sadržaja statička

🧠 Pametan loading – JavaScript se učitava samo za potrebne komponente

🧩 Modularnost – kod je jasno organizovan u komponente i stranice

🎯 SEO friendly – sadržaj je vidljiv pretraživačima bez dodatnih podešavanja

🛠️ Laka integracija – mogućnost korišćenja bilo koje frontend biblioteke (React, Vue, Svelte, itd.)

📦 Odličan DX – jednostavno razvijanje, brzo osvežavanje stranica, pregledna struktura

Primeri upotrebe direktiva u Astro:

<!-- Korpa na cart.astro strani -->
---
import CartApp from '../components/CartApp.jsx';
---
<CartApp client:load />

<!-- Navigacija (Header) u layout-u -->
<Header />

// Primer korišćenja Context API-ja
import { createContext, useContext, useState } from 'react';

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  // dodavanje i brisanje iz korpe...
  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

Zaključak
Tech Store je aplikacija za primer kako se može kreirati brz, efikasan i funkcionalan sajt korišćenjem savremenih tehnologija kao što su Astro i React.

    - Astro omogućava brzo renderovanje i lak SEO

    - React se koristi samo za delove koji zahtevaju interakciju

    - Organizacija koda je jednostavna, pregledna i prilagođena skaliranju

    - Performanse su superiorne u poređenju sa SPA aplikacijama

Kombinovanjem ovih alata, kreirana je aplikacija koja je:

    - Laka za korišćenje

    - Prilagodljiva

    - I brza za krajnjeg korisnika

