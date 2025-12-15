// fr.js

window.FR = {
  menu: {
    play: "Jouer",
    options: "Options",
    resume: "Reprendre",
  },

  lose: {
    title: "Appuyer sur ESPACE pour continuer",
    text: "[Votre mémoire s'en est allée...]",
  },

  ui: {
    help: "ℹ Appuyez sur H pour obtenir de l'aide",

    enterBridgeCode: "Saisissez le code pour activer le pont.\n",
    leverHint: "E pour activer le levier !",
    rustySpring: "Le ressort est rouillé !",

    controls: [
      { action: "Se déplacer à gauche", key: "A" },
      { action: "Se déplacer à droite", key: "D" },
      { action: "Sauter", key: "Espace" },
      { action: "Inventaire", key: "I" },
      { action: "Fermer / Retour", key: "Échap" },
      { action: "Activer", key: "E" },
      { action: "Afficher l'aide", key: "H" },
    ],
  },

  intro: {
    lines: [
      "[Activation en cours . . .]",
      "[Sujet : Renne nommé Fenrir]",
      "[Vous n'avez plus aucun souvenir]",
      "[Votre mémoire est fracturée en 4 fragments]",
      "[Ces fragments sont dispersés dans votre environnement]",
      "[Retrouvez-les pour comprendre ce qui vous est arrivé]",
      "[Chargement du monde . . .]",
    ],
  },

  outro: {
    lines: [
      "[RAPPORT DU LABORATOIRE]",
      "[Le test — Instance n°5220 — s'est terminé avec succès]",
      "[Le sujet FENRIR démontre une progression cognitive stupéfiante]",
      "[Il a réussi à s'extraire par ses propres moyens]",
      "[> Fin d'exécution du programme]",
    ],
  },

  secret: {
    code: "TEST",
  },

  notifications: {
    key_missing: "Une clé est requise !",
    fragments: "Les 4 fragments sont requis",
    talk_freya: "Appuie sur E pour intéragir",
  },

  items: {
    memoryFragmentName: "Fragment de mémoire",
    memoryFragmentIcon: "fragment",

    keyDoorName: "Clé de porte",
    keyDoorIcon: "key",
    keyDoorDescription: "Une vieille clé",

    fuelName: "Fuel",
    fuelIcon: "small_fuel_red",
    fuelDescription: "Un jerrican d'huile à moitié plein.",
  },

  freya: {
    name: "Freya",
    greeting: "Salut Fenrir, tu es perdu ?",

    options: {
      giveThreeFragments: "[Donner les 3 fragments]",
      askPortal: "Comment ouvrir le portail ?",
      dontRemember: "Je ne me rapelle plus de rien.",
      fog: "Il y a du brouillard !",
      lost: "Je suis perdu !",
    },

    dialogues: {
      threeFragments: [
        { text: "Freya : Bravo ! Tu as récupéré les 3 fragments !", duration: 2 },
        { text: "Freya : J'ai conservé le 4ième fragment en sûreté dans le brouillard.", duration: 4 },
        { text: "Freya : Il est instable ! Et se déplace très rapidement.", duration: 3 },
      ],

      fourFragments: [
        { text: "Freya : A l'aide des 4 fragments tu peux dorénavant ouvrir le portail !", duration: 3 },
        { text: "Freya : Ce portail est protégé par un code composé de 4 lettres.", duration: 4 },
        { text: "Freya : Je te conseille de fouiller dans ton inventaire.", duration: 3 },
      ],

      dontRemember: [
        { text: "Freya : Je peux t'aider à retrouver la mémoire !", duration: 2 },
        { text: "Freya : 3 fragments de ta mémoire sont dispersés dans la neige.", duration: 4 },
        { text: "Freya : Dès que tu les auras en ta possession je t'aiderai à récupérer le 4ième.", duration: 4 },
        { text: "Freya : Chaque fragment récupéré contient un indice pour ouvrir un portail.", duration: 4 },
        { text: "Freya : Consulte ton inventaire en appuyant sur I pour les consulter.", duration: 4 },
      ],

      fog: [
        { text: "Freya : Fais bien attention au brouillard un peu plus loin !", duration: 3 },
        { text: "Freya : La barre en haut à gauche t'indique sa force.", duration: 3 },
        { text: "Freya : S'il devient trop épais reviens vers moi.", duration: 3 },
        { text: "Freya : Ne reste pas trop longtemps dans le brouillard !", duration: 3 },
        { text: "Freya : Tu risques de perdre la mémoire définitivement !", duration: 3 },
      ],

      lost: [
        { text: "Freya : Chaque fragment récupéré te permet d'avancer !", duration: 3 },
        { text: "Freya : Le chemin se dévoile au fur et à mesure.", duration: 3 },
      ],
    },

    randomThoughts: [
      "Ne crais rien, je chasse cette brume.",
      "Ton esprit est emmbrumé ! Laisse moi t'aider.",
      "Regarde ! Le brouillard s'estompe.",
    ],
  },
};
