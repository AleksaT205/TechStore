# Tech Store – Web prodavnica zasnovana na Astro + React tehnologiji

## Opis
Tech Store je moderna web prodavnica izgrađena korišćenjem [Astro](https://astro.build) frameworka i [React](https://reactjs.org) biblioteke. Glavni cilj projekta je prikazati kombinaciju statičkog sajta visokih performansi i reaktivnih komponenti za dinamičke funkcionalnosti kao što su korpa i poručivanje.

---

## Tehnologije koje smo koristili

- **Astro** – za statičko renderovanje i prikaz stranica
- **React** – za reaktivne delove kao što su korpa i poručivanje
- **Context API** – za globalno stanje korpe
- **LocalStorage** – za čuvanje podataka o proizvodima u korpi

---

## Funkcionalnosti

- Prikaz proizvoda
- Dodavanje i uklanjanje proizvoda iz korpe
- Prikaz ukupne cene
- Poručivanje (simulacija uz čišćenje korpe i poruku o uspešnosti)
- Brzo učitavanje i odlična SEO podrška zahvaljujući Astero-vom renderovanju

---

## Kako radi integracija?

React komponente su uključene samo tamo gde je potrebno preko direktiva:

# astro
<CartApp client:load />

## Pokretanje projekta
npm install
npm run dev

## Struktura projekta
src/
├── components/        # React komponente (korpa, dugmad, kontekst)
├── layouts/           # Astro layout fajlovi
├── pages/             # Astro stranice (cart.astro, index.astro...)
└── styles/            # Stilovi (opciono)

"# Tech-store" 
