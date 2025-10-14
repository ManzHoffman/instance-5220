# 🦌 Instance 5220

**Instance 5220** est une **expérience vidéoludique narrative en 2D**, développée en JavaScript avec **Kaplay.js** (ex-Kaboom).  
Le joueur incarne **F**, une créature mi-humaine, mi-renne, qui s’éveille dans une toundra gelée, au milieu d’un monde fragmenté par la mémoire et le code.

À travers un univers glitché et une narration minimale, le joueur explore un territoire onirique à la recherche de **fragments de mémoire**.  
Ces indices, combinés, ouvrent un **pont laser** vers une porte verrouillée : la clé du passé de F… ou de son effacement.

Le jeu mêle **ambiance nordique**, **effets VHS/pixel glitch**, **interfaces diegétiques** et **puzzles environnementaux** pour une courte expérience introspective.

---

## Projet de cours

Ce projet a été réalisé dans le cadre du cours :  
**"Développement de jeu vidéo 2D"**  
Professeur : Isaac Pante
Université de Lausanne, [UNIL-DH](https://www.unil.ch/dh/home.html)  
[Voir la description complète du cours](https://gist.github.com/ipante/b75552f7430588fa790b712e5639ce6e)

---
## Aperçu

![instance-5520](https://github.com/user-attachments/assets/4b5ffc82-8c3b-4f2e-82b0-0a30848fabca)

## Installation & Lancement

1. **Cloner le dépôt :**
   ```bash
   git clone https://github.com/<votre_nom_utilisateur>/instance-5220.git
   cd instance-5220

## Commandes

| Action                     | Touche         |
|---------------------------|----------------|
| Se déplacer à gauche      | `A`            |
| Se déplacer à droite      | `D`            |
| Sauter                    | `Espace`       |
| Ouvrir l'inventaire       | `I`            |
| Fermer / Retour           | `Échap`        |
| Afficher les commandes    | `F1` (optionnel) |

---

## Contenu du jeu

- ❄️ **Effets visuels glitch / VHS / neige**
- 🧠 **Fragments de mémoire à collecter**
- 🔐 **Puzzles environnementaux simples**
- 🎧 **Ambiances sonores et dialogues intérieurs**
- 🔓 **Système d'inventaire et objets interactifs**

---

## Stack technique

- **Kaboom.js** – Moteur de jeu 2D JavaScript
- **Pixi.js / pixi-filters** – Pour certains effets visuels (glitch, shaders)
- **p5.js (expérimental)** – Pour overlays custom comme le glitchCanvas
- **Système de scènes, dialogues, modals, collisions, FX** entièrement custom
- **Audio** Splice(https://www.splice.com)  (boucles, FX, ambiances)

## Recours aux LLM (IA générative)

Le développement a partiellement fait appel à ChatGPT (GPT-5) pour :

- Brainstorming narratif (construction de la trame autour de F-27 et des fragments)
- Assistance technique (inventaire, collisions, modales, effets visuels)
- Rédaction et relecture (aide à la structuration du README et du code)

Prompts essentiels :

- « Peux-tu m’aider à créer une animation glitch pour Kaplay ? »
- « Crée un inventaire en grille cliquable avec Kaplay.js »
- « Écris une narration autour d’un renne nommé F, lié à un code F27 »
- « Rédige une base de README conforme aux exigences du cours d’Isaac Pante »

⚠️ Aucun assets (son, image, sprite) n'a été généré par IA.
---
