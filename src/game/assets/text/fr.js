const menu = {
  play: "Jouer",
  options: "Options",
  resume:"Reprendre",

};
const level1 = {
  title: "Instance 5220",
  localisation: "69°42'N 147°12'E — Janvier 2022",
  date: "Juillet 2023",
  description:"Malgré les températures basses et le début de saison, le fjord n'est plus complétement gelé. Attention à la gléace parfois fragile.",
  start:"Appuyer sur ESPACE pour commencer",
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

const PLAYER_SPEECH = {
intro: "Bienvenue dans les terres glacées de l'Arctique !\nJ'ai besoin de ton aide. En effet, plus au sud, plusieurs de mes compagnons rennes sont en danger,\npiégés par la fonte des glaces. Je me dois de leur porter secours !",

};
/*
const CONTROLS = {
leftAndRight: "Utilise A et D pour te déplacer à gauche et à droite\n\nAppuie sur ESPACE pour sauter",
jump: "Utilise la barre espace pour sauter",

};*/
  const lines = [
    "[Initialisation . . .]",
    "[Instance: 5220]",
    "[69°42’N 147°12’E]",
    "[Janvier 2022]",
  ];

    const end_lines = [
    "[Reconstruction Complete]",
    "[Subject F27 - Memory Index: 100%]",
    "[Emotive Trace: PRESERVED]",
    "[> Terminating simulation...]",
  ];

  // Terminal lines (mysterious, non-spoiler)
  // 

  const NOTIF_ACTIONS = {
  key_missing: "Une clé est requise !",
};