# 🦌 Instance 5220

**Instance 5220** est une **expérience vidéoludique narrative en 2D**, développée en JavaScript avec **Kaplay.js** (ex-Kaboom).  
Le joueur incarne **Fennir**, un renne, qui s’éveille dans une toundra gelée, sans aucun souvenir. il se retrouve au milieu d’un monde parsemé de fragements de mémoire qu'il va devoir récupéerer.

À travers un univers glitché et une narration minimale, le joueur explore un territoire onirique à la recherche de **fragments de mémoire**.  
Ces indices, combinés, ouvrent un **pont laser** vers une porte verrouillée : la clé du passé de Fenrir.

Le jeu mêle **ambiance nordique**, **effets VHS/pixel glitch**, **interfaces diegétiques** et **puzzles environnementaux** pour une courte expérience introspective.

---
## Code non utilisé ou commenté

Ce projet est le fruit de multiples essais, certaines idées ont été testées puis modifées ou abandonnées. Par exemple, suite à plusieurs retours critiques l'idée d'avoie une "barre de vie" s'est avérée être peu utile et ne pas apporter de plus value au jeu. Il en va de même pour les "spikes", à savoir des bout de bois qui sortaient de la glace et qui constituaeint un obstacle pour le joueur. Ces derniers fonctionnaient bien mais n'avaient pas vraiment de rapport avec la thématique du jeu.

Par conséquent, il y a de nombreux commentaires dans le code du jeu ainsi que des fichiers inutilisés au sein du repository. La majorité d'entre-eux se trouvent dans le dossier unused, mais il est possible que certaines fonctions non utilisées soient présentes dans le code.

## Projet de cours

Ce projet a été réalisé dans le cadre du cours :  
- **Développement de jeu vidéo 2D**
- Thème : Mystères - Intelligences
- Professeur : Isaac Pante
- Université de Lausanne, [UNIL-DH](https://www.unil.ch/unil/fr/home.html)  
- [Voir la description complète du cours](https://gist.github.com/ipante/b75552f7430588fa790b712e5639ce6e)

---
## Aperçu

<img width="1152" height="716" alt="image" src="https://github.com/user-attachments/assets/ce1c1aee-5342-488c-8233-9867004b68f8" />


## Installation & Lancement

1. **Cloner le dépôt :**
   ```bash
   git clone https://github.com/<votre_nom_utilisateur>/instance-5220.git
   cd instance-5220

2. **Téléchargement et installation de VS Code et de l'extension LiveServer :**
   ```bash
   - https://code.visualstudio.com/
   - https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
     
4. **Lancement du jeu :**
   
   - Cliquer sur l'icône du LiveServer à droite en bas
   

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

- **Kaplay.js (Kaboom.js)** – Moteur de jeu 2D JavaScript
- **Pixi.js / pixi-filters** – Pour certains effets visuels (glitch, shaders)
- **p5.js (expérimental)** – Pour overlays custom comme le glitchCanvas
- **Audio** Splice(https://www.splice.com)  (boucles, FX, ambiances)
- **Sprites/ assets** https://www.gamedeveloperstudio.com/ 

## Recours aux LLM (IA générative)

Le développement a partiellement fait appel à ChatGPT (GPT-5) pour :

- Brainstorming narratif (construction de la trame autour de F-27 et des fragments)
- Assistance technique (inventaire, collisions, modales, effets visuels)
- Rédaction et relecture (aide à la structuration du README et du code)

Prompts essentiels :

- « Peux-tu m’aider à créer une animation glitch pour Kaplay ? »
- « Crée un inventaire en grille cliquable avec Kaplay.js »
- « Rédige une base de README conforme aux exigences du cours d’Isaac Pante »

⚠️ Aucun assets (son, image, sprite) n'a été généré par IA.
---

# 🦌 Mise à Jour Majeure : Refonte Thématique et Optimisation du Gameplay

Cette mise à jour apporte des changements fondamentaux, notamment l'alignement du gameplay sur la thématique du **souvenir** et des améliorations significatives de l'expérience utilisateur et de la durée de vie du jeu.

---

## ✨ Nouveautés et Améliorations Thématiques

### 🧠 Le Brouillard du Souvenir (Refonte du Système de Santé)

Le concept de "spikes" et de barre de vie a été jugé hors-sujet avec la thématique du souvenir et a été complètement remplacé.

* ❌ **Éléments Retirés :** Les obstacles de type *Spikes* et la Barre de Vie classique.
    ```javascript
    /* Anciennes lignes commentées :
    spawnSpikes(700, 450, 0.6)
    ...
    */
    ```
* ✅ **Nouveau Système : Brouillard Progressif**
    * **Symbolisme :** Le brouillard représente l'**esprit brumeux** du renne cherchant sa mémoire.
    * **Gameplay :** La Barre de Vie est remplacée par une **Barre d'Intensité du Brouillard**.
    * **Mécanique :** Le brouillard augmente progressivement, servant de **limite de temps**. S'il est trop dense, le joueur échoue à retrouver les souvenirs.
    * **Solution :** Interagir avec **Freya** permet de dissiper le brouillard (le ramener à 0) et de gagner du temps.

### ⏳ Durée de Vie et Progression

Le jeu, initialement trop court, a été étendu et complexifié.

* **Objectif Étendu :** Le joueur doit désormais récupérer **4 Fragments de Souvenir** (au lieu de 1).
* **Complexité :** Les 3 premiers fragments sont aisés ; le **4ème** est rapide, disparaît, et sa récupération est limitée par l'urgence du système de Brouillard.

### 🤝 Solitude du Joueur et Guidance

Un NPC a été ajouté pour enrichir l'expérience et guider les nouveaux joueurs.

* **Ajout : Freya la Renne**
    * **Rôle :** Dialogue avec Freya pour clarifier les **mécanismes de jeu** et les objectifs.
* **Amélioration de l'Énigme :**
    * L'énigme du portail a été simplifiée.
    * Freya guide le joueur, expliquant que les indices se trouvent dans l'inventaire et que le **code est composé de 4 lettres**.
* **Contexte Narratif :** Les écrans de début et de fin ont été étoffés pour fournir plus d'informations.

---

## ⚙️ Modifications Techniques et Interface

### 🖥️ Taille de la Fenêtre

Ajustements pour un meilleur rendu visuel et une meilleure expérience utilisateur.

* **Adaptation :** Scale ($0.7$) et diminution de la largeur ($1800 \to 1500$).
* **Configuration Kaplay :**
    ```javascript
    kaplay({
        width: 1500,
        height: 1024,
        scale: 0.7,
    })
    ```

### 🛑 Restrictions de l'Inventaire

Empêche l'interaction de l'utilisateur pendant les séquences narratives importantes.

* **Condition Ajoutée (dans `Inventory.js`) :** L'inventaire ne s'ouvre pas si le mode cinématique est actif.
    ```javascript
    function showInventoryGrid() {
        if (isOpen || IS_CINEMATIC_MODE_ON) return
        // ...
    }
    ```

### 📝 Mise à Jour du Readme

* Le lien vers le site de l'Unil non fonctionnel a été **corrigé**.
* La description du jeu a été **adaptée** en cohérence avec tous les nouveaux éléments.
* Ajout d'une section sur le code parfois non utilisé, présent dans le repository. 
