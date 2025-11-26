const menu = {
  play: "Jouer",
  options: "Options",
  resume:"Reprendre",

};

const loose = {
title: "Appuyer sur ESPACE pour continuer",
text:"[Votre mémoire s'en est allée...]",

};

const UI = {
help: "ℹ Appuyez sur H pour obtenir de l'aide",


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
  "[Activation en cours . . .]",
  "[Sujet : Renne nommé Fenrir]",
  "[Vous n'avez plus aucun souvenir]",
  "[Votre mémoire est fracturée en 4 fragments]",
  "[Ces fragments sont dispersés dans votre environnement]",
  "[Retrouvez-les pour comprendre ce qui vous est arrivé]",
  "[Chargement du monde . . .]",
];

const end_lines = [
  "[RAPPORT DU LABORATOIRE]",
  "[Le test — Instance n°5220 — s'est terminé avec succès]",
  "[Le sujet FENRIR démontre une progression cognitive stupéfiante]",
  "[Il a réussi à s'extraire par ses propres moyens]",
  "[> Fin d'exécution du programme]",
];
  // End  lines

const SECRET_CODE = "TEST";
  const NOTIF_ACTIONS = {
  key_missing: "Une clé est requise !",
  fragments:"Les 4 fragments sont requis",
};

function getRandomFreyaThought()
{
  const thoughts = ["Ne crais rien, je chasse cette brume.", "Ton esprit est emmbrumé ! Laisse moi t'aider.", "Regarde ! Le brouillard s'estompe."]
  const n = Math.floor(Math.random() * 3) ;

  return thoughts[n];

}