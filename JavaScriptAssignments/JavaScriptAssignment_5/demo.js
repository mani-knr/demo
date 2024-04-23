let users = [
  {
    name: "Naruto Uzumaki",
    presence: 1,
    profilePicture: "./assets/naruto_uzumaki.jpg",
    statusMessage: "we bacame what we want",
    userId: "USR00001",
  },
  {
    name: "Nara Shikamaru",
    presence: 2,
    profilePicture: "./assets/shikamaru_nara.jpg",
    statusMessage: "What a Drag!",
    userId: "USR00002",
  },
  {
    name: "Uchiha Sasuke",
    presence: 3,
    profilePicture: "./assets/sasuke.jpg",
    statusMessage: "Hokage in the Dark",
    userId: "USR00003",
  },
  {
    name: "Uchiha Itachi",
    presence: 1,
    profilePicture: "./assets/itachi.jpg",
    statusMessage: "How much your Sharingan can see!",
    userId: "USR00004",
  },
  {
    name: "Uchiha Madara",
    presence: 4,
    profilePicture: "./assets/uchiha_madara.jpg",
    statusMessage: "This is not power of your Creation!",
    userId: "USR00005",
  },
];
localStorage.setItem("users", JSON.stringify(users));
