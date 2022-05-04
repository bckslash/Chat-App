# Next.js Chat Aplikacia s Tailwind CSS a Firebase Databazou

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

## 📝 Obsah

-   [O aplikácií ](#about)
-   [Diagram nasadenia aplikácie](#diagram)
-   [Popis UI aplikácie](#ui)
-   [Štruktúra Firebase databázy](#database)
-   [Spustenie aplikácie lokálne](#localhost)
-   [Deployment](#deployment)
-   [Použité technológie](#built_using)
-   [Autori](#authors)

## 🧐 O aplikácií <a name = "about"></a>

Aplikacia slúži ako chatovací systém s využitím [Firebase](https://firebase.google.com/) backendu spolu s využitím firebase authentication a firebase database. Celý web je napokon deploynutý na [Vercel](https://vercel.com/) hosting.

Aplikácia podporuje real-time chatovaciu kominukáciu medzi dvoma klientami. Klienti su prihlásený pomocou firebase authentication a ich správy su ulozené v firebase databaze.

Celá aplikácia je postavnena na [Next.js](https://nextjs.org/) frameworku s využitím [Tailwind CSS](https://tailwindcss.com/) pre štylizáciu aplikácie.

Aplikácia využíva server-side rendering, technológiu pre rýche vykreslenie stránok. Funguje tak že stránka je na serveri načítaná už pred tým ako ju klien otvorí vo svojom vyhladávači. Viac informacii o Next.js je môžne nájst na [Next.js Dokumentácia](https://nextjs.org/docs/basic-features/pages)

### Diagram nasadenia aplikácie <a name = "diagram"></a>

![diagram nasadenia](/public//diagram.png)

## 💻 Popis UI aplikácie <a name = "ui"></a>

![chat page](/public//Chat%201.png)

1.  Vyhľadávnaie medzi chatmi

2.  Zobrazenie vytvorených chatov s možnosťou pridanie nového chatu

3.  Chatovacie okno so vsetkými spravámi od oboch uživatelov

4.  Možnosť poslať správu

![mobile users](/public//Phone%20users.png)

5.  Prepnutie medzi svojimi chatmi a jednotlivým chatom s daným užívateľom a odhlasenie pomocóu kliknutia na svojho avatara

![mobile chat](/public//Phone%20chat.png)

6.  Tlačidlo na pridávanie emotikonov

![login screen](/public//Login%20screen.png)

7.  Prihlásenie do aplikácie pomocou google konta

## 🔥 Štruktúra Firebase databázy <a name = "database"></a>

![mobile chat](/public///data_users.png)
![mobile chat](/public///data_chats.png)
![mobile chat](/public///data_messages.png)

## 🧑🏽‍💻 Spustenie aplikácie lokálne <a name = "localhost"></a>

Po stiahnutí a nainštalovaní aplikácie je možné aplikáciu spustiť lokálne.

```bash
git clone git@github.com:bckslash/Chat-App.git
yarn install
yarn dev
```

Po úspešnéj instalacií budete vedieť otvoriť aplikáciu na http://localhost:3000.

## 🚀 Deployment <a name = "deployment"></a>

Live aplikáciu si môžete otvorit tu:

-   [Live](https://zct-chat.vercel.app/) - ZCT Chat

## ⛏️ Použité technológie <a name = "built_using"></a>

-   [Firebase](https://firebase.google.com/) - Database and Authentication
-   [Next.js](https://nextjs.org/) - Web Framework
-   [Tailwind.css](https://tailwindcss.com/) - CSS Framework

## ✍️ Autori <a name = "authors"></a>

-   [@robertsmrek](https://github.com/bckslash) - Počiatočný nápad a implementacia frontendu a backendu
-   [@robertbartos](https://github.com/bhartosh) - Design aplikácie, Implementacia firebase databazy a authentication
-   [@radoslavsunai](https://github.com/bhartosh) - Spracovanie dokumentácie a pomoc s frontendom
