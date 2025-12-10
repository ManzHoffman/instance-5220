# 🦌 Instance 5220

**Instance 5220** est une **expérience vidéoludique narrative en 2D**, développée en JavaScript avec **Kaplay.js** (ex-Kaboom).  
Le joueur incarne **Fennir**, un renne, qui s’éveille dans une toundra gelée, sans aucun souvenir suite à une chute. il se retrouve au milieu d’un monde parsemé de fragements de mémoire qu'il va devoir récupéerer.

À travers un univers glitché et une narration minimale, le joueur explore un territoire onirique à la recherche de **fragments de mémoire**.  
Ces indices, combinés, ouvrent un **pont laser** vers une porte verrouillée : la clé du passé de F… ou de son effacement.

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

![instance-5520](https://github.com/user-attachments/assets/4b5ffc82-8c3b-4f2e-82b0-0a30848fabca)

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

### Corrections 10.12.2025

Aspects techniques
Taille de la fenêtre 
Adaptation avec un scale (0.7) et diminution de la width (1800 → 1500)

kaplay({
    width: 1500,
    height: 1024,
    scale:0.7,
})



L’inventaire s’ouvre lorsque le code prompt est affiché
Inventory.js

function showInventoryGrid() {
  if (isOpen || IS_CINEMATIC_MODE_ON) return

On ajoute une condition dans le fichier inventory.js qui permet d’interdire l’ouverture de l’inventaire si le mode cinématique est enclenché. La constante IS_CINEMATIC_MODE_ON est utilisée dans différente partie du jeu pour éviter que l’utilisateur interagisse avec certains composants lorsque des dialogues sont en cours par exemple.

Readme Github

Corrections
Le lien vers le site de l’unil non fonctionnel a été corrigé. 
La description du jeu a été adaptée en cohérence avec les nouveaux éléments du jeu.

Solitude du joueur


Ajout d’un NPC
Un retour fait état du fait que le joueur se sent seul et laissé à lui-même avec très peu d’informations. Afin de remédier à cela,  un NPC à été ajouté. Il s’agit de Freya, une renne avec laquelle le joueur doit interagir. Le joueur peut poser des questions à Freya; les réponses données clarifient les mécanismes de jeu et permettent au joueur de mieux comprendre ce qu’il doit faire. 

La thématique du souvenir


La question des “spikes” et de la barre de vie
Les spikes sont des troncs de bois aiguisés qui constituent un obstacle qui complique le déplacement du joueur. Lors d’un impact avec l’un de ces obstacles le joueur perd de la vie. La barre de vie quant à elle est un élément présent dans de nombreux jeux vidéo, dans ce cas-ci elle est intimement liée aux “spikes” car ce sont ces derniers qui peuvent la faire diminuer.


  /*
  spawnSpikes(700, 450, 0.6)


  spawnSpikes(990, 420, 0.8)


  spawnSpikes(1200, 450, 0.6)


spawnSpikes(2600, 450, 0.7)




spawnSpikes(2900, 420, 0.8)
*/

La présence de ces deux éléments n’étant pas très en raccord avec la thématique,  la décision a été prise de les retirer au profit d’un système de brouillard progressif. Cet élément est intéressant à plusieurs titres :

En premier lieu dans sa dimension ludique car il donne un temps limité au joueur pour retrouver ses souvenirs avant que le brouillard ne rende la tâche impossible.Le fait de revenir vers Freya permet de ramener le niveau de brume à 0 progressivement. La barre de vie est donc remplacée par une barre qui affiche l’intensité du brouillard présent dans le jeu.

Dans un deuxième temps, la symbolique du brouillard nous semble plus proche de la thématique du souvenir dans le sens ou le renne est désorienté et il cherche à retrouver la mémoire. Le brouillard représente donc en quelque sorte l’esprit brumeux du joueur qui est à la recherche de ses souvenirs. 

Mieux expliquer l'énigme qui ouvre portail laser
L’énigme a été simplifiée et mieux expliquée. Freya explique au joueur qu’il doit utiliser son inventaire pour trouver des indices sur l’énigme du portail, elle précise également que le code est composé de 4 lettres. 

Plus d’informations sont données par les écrans de début et de fin


Le jeu est trop court
Le jeu se termine en moins de deux minutes ce qui constitue un temps très court. Pour remédier à cela, le joueur doit dorénavant récupérer 4 fragments. Les 3 premiers sont assez aisé à récupérer mais le 4ième s’avère un peu plus complexe à attraper. Il bouge rapidement et disparaît. L’ajout du brouillard limite le temps que le joueur peut passer dans la zone où sont présents les fragments ce qui complexifie l’avancement. 


