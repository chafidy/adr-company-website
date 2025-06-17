# 🧳 ADR Company - Plateforme de Réservation en Ligne

Bienvenue sur le dépôt du projet **ADR Company**, une plateforme moderne de réservation de voyages, conçue pour offrir une expérience fluide, rapide et accessible aux voyageurs en quête d'aventure.  

> Ce projet a été développé avec une attention particulière portée à l’UX/UI, à la performance, et à la modularité grâce à une stack moderne.

---

## 🔗 Démo en ligne

➡️ [Lien de la démo (à insérer)](https://adr-company.vercel.app)

---

## 🚀 Stack Technique

| Outil / Framework     | Utilité principale                                     |
|----------------------|--------------------------------------------------------|
| ⚡ Vite               | Bundler ultrarapide pour le développement              |
| 🧠 TypeScript        | Typage statique pour plus de fiabilité                 |
| ⚛️ React             | Construction de l’interface utilisateur                |
| 🧩 shadcn/ui         | Composants UI accessibles et élégants                  |
| 🎨 Tailwind CSS      | Styling utilitaire et réactif                          |

---

## 🧰 Fonctionnalités principales

- 🔍 Recherche de voyages par destination, date et budget
- 📅 Réservation en ligne avec formulaire dynamique
- 👤 Gestion des utilisateurs (connexion, inscription)
- 🧾 Historique des réservations
- 📄 Affichage détaillé des offres (description, prix, images)
- 🌍 Interface responsive et rapide


---

## 📁 Structure du projet

```bash
adr-company/
├── public/               # Fichiers statiques
├── src/
│   ├── assets/           # Images, icônes, etc.
│   ├── components/       # Composants UI réutilisables (via shadcn/ui)
│   ├── pages/            # Pages principales (Accueil, Réservations, etc.)
│   ├── hooks/            # Custom hooks
│   ├── utils/            # Fonctions utilitaires
│   ├── types/            # Définition des types TypeScript
│   ├── App.tsx           # Point d'entrée de l'app React
│   └── main.tsx          # Entrée principale (Vite)
├── tailwind.config.ts    # Configuration Tailwind
├── shadcn.config.ts      # Configuration des composants UI
├── index.html
└── vite.config.ts
