const menu = {
  play: "Jouer",
  options: "Options",
  resume:"Reprendre",

};

const loose = {
title: "Appuyer sur ESPACE pour continuer",

};

  const CONTROLS = [
    { action: "Se déplacer à gauche", key: "A" },
    { action: "Se déplacer à droite", key: "D" },
    { action: "Sauter", key: "Espace" },
    { action: "Inventaire", key: "I" },
    { action: "Fermer / Retour", key: "Échap" },
    { action: "Activer", key: "E" },
    { action: "Afficher l'aide", key: "H" },
  ];


/*
const CONTROLS = {
leftAndRight: "Utilise A et D pour te déplacer à gauche et à droite\n\nAppuie sur ESPACE pour sauter",
jump: "Utilise la barre espace pour sauter",

};*/
const lines = [
  "[Réactivation en cours . . .]",
  "[Sujet : Renne nommé Fenrir]",
  "[Vous avez chuté violemment dans la neige]",
  "[Votre mémoire est fracturée en 3 fragments]",
  "[Ces fragments sont dispersés dans votre environnement]",
  "[Retrouvez-les pour comprendre ce qui vous est arrivé]",
  "[Chargement du monde . . .]",
];

    const end_lines = [
    "[Reconstruction Complete]",
    "[Subject F27 - Memory Index: 100%]",
    "[Emotive Trace: PRESERVED]",
    "[> Terminating simulation...]",
  ];

  // End  lines

const SECRET_CODE = "NORD";
  const NOTIF_ACTIONS = {
  key_missing: "Une clé est requise !",
};