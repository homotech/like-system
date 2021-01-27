//Getting the dom elements
const dropdown = document.querySelector("#dropdown");
const toggleone = document.querySelector("#toggleone");
const toggletwo = document.querySelector("#toggletwo");
const theydid = document.querySelector(".theydid");
const react = document.querySelector("#react");
const comment = document.querySelector("#comment");
const share = document.querySelector("#share");
const hidelikerspage = document.querySelector("#hidelikerspage");
const nameoflikers = document.querySelector(".nameofliker");
const commentsection = document.querySelector(".comment");
const commentbox = document.querySelector(".commentbox");
const addcomment = document.querySelector("#addcomment");
const addcommentbtn = document.querySelector("#addcommentbtn");
const actionsbtnone = document.querySelector("#whatsapp");
const actionsbtntwo = document.querySelector("#timeline");
const actionsbtnthree = document.querySelector("#instagram");
//   []
//   document.querySelector(".timeline"),
//   document.querySelector(".instagram"),
// ];
//the array containing the names of likers
var likers = ["Daniel", "Peace", "nicole", "lesley"];
var comments = ["Its boring in here no comments here yet"];
var t;
//A FUNCTION TO CREATE A A DIV AND ALSO SET ITS ATTRIBUTE TO A PARTICULAR CLASS AND CREATE ITS PARAGRAPH AND ALSO HANDLE THE APPENDINGS  AND BE CALLED AT ONCE
const setlikers = () => {
  nameoflikers.innerHTML = "";
  for (x in likers) {
    var name = document.createElement("div");
    name.setAttribute("class", "name");
    var p = document.createElement("p");
    p.setAttribute("class", "liker");
    p.innerHTML = `${likers[x]} Reacted on your photo`;
    name.appendChild(p);
    nameoflikers.appendChild(name);
  }
};
setlikers();

//this function checks and renders some text after checking the amount of COMMENTS
const commentscheck = () => {
  if (comments.length > 0) {
    comment.innerHTML = `${comments.length} comment`;
  } else {
    comment.innerHTML = `Comment`;
  }
  if (comments[0] === "Its boring in here no comments here yet") {
    comment.innerHTML = `Comment`;
  }
};
commentscheck();

//this function checks and renders some text after checking the amount of likers
const likerscheck = () => {
  if (likers.length > 2) {
    theydid.innerHTML = `${likers[0]}, ${likers[1]} and others liked your photo`;
  } else {
    theydid.innerHTML = `${likers[0]}, ${likers[1]} liked your photo`;
  }
};
likerscheck();

//this function removes the like on the photo
const removelike = () => {
  showconfirm("Removed Like");
  likers.pop();
  likerscheck();
  setlikers();
  react.classList.remove("reacted");
  react.addEventListener("click", addname);
  var i = document.createElement("i");
  react.appendChild(i);
  i.setAttribute("class", "fas fa-heart");
  react.innerHTML = "React";
  react.removeEventListener("click", removelike);
};
const showconfirm = (message) => {
  document.querySelector(".confirmed").style.top = "5%";
  document.querySelector(".confirm").innerHTML = message;
  t = setTimeout(() => {
    document.querySelector(".confirmed").style.top = "-100%";
  }, 1500);
};
//this function is going to add a name to the array list
const addname = () => {
  likers.push("Anita");
  likerscheck();
  setlikers();
  showconfirm("liked");
  react.classList.add("reacted");
  react.innerHTML = `${likers.length} Reactions`;
  react.removeEventListener("click", addname);
  react.addEventListener("click", removelike);
};

const hidemodal = () => {
  document.querySelector(".showlikers").classList.add("hidden");
  document.querySelector(".showlikers").removeEventListener("click", hidemodal);
};

const hidemenu = () => {
  toggleone.style.display = "block";
  toggletwo.style.display = "none";
  dropdown.style.display = "none";
  document.body.removeEventListener("click", hidemenu);
};
const showmenu = (choice) => {
  switch (choice) {
    case 1:
      toggleone.style.display = "none";
      toggletwo.style.display = "block";
      dropdown.style.display = "block";
      var t = setTimeout(() => {
        if ((dropdown.style.display = "block")) {
          document.body.addEventListener("click", hidemenu);
        }
      }, 100);
      break;
    default:
      toggleone.style.display = "block";
      toggletwo.style.display = "none";
      dropdown.style.display = "none";
      break;
  }
};
const iterateps = () => {
  for (x in comments) {
    var p = document.createElement("p");
    p.innerHTML = comments[x];
    commentbox.appendChild(p);
  }
};
iterateps();
const addcommentfunc = () => {
  if (addcomment.value !== "") {
    if (comments[0] === "Its boring in here no comments here yet") {
      comments = [];
      comments.push(addcomment.value);
      showconfirm("Added comments");
    } else {
      comments.push(addcomment.value);
      showconfirm("Added comments");
    }
  }
  var haych = document.createElement("h1");
  commentbox.innerHTML = "";
  haych.innerHTML = "Comments";
  commentbox.appendChild(haych);
  iterateps();

  // var p = document.createElement("p");
  // p.innerHTML = addcomment.value;
  // commentbox.appendChild(p);

  commentscheck();
  addcomment.value = "";
};

// for (i = 0; i < actionsbtn.length; i++) {
//   actionsbtn[x].addEventListener("click", () => {
//     showconfirm(`Shared to ${event.target.id}`);
//   });
// }
// ADDING EVENT LISTENERS

toggleone.addEventListener("click", () => showmenu(1));
toggletwo.addEventListener("click", () => showmenu(2));
react.addEventListener("click", addname);
theydid.addEventListener("click", () => {
  // document.querySelector(".showlikers").addEventListener("click", hidemodal);
  document.querySelector(".showlikers").classList.remove("hidden");
  nameoflikers.style.display = "block";
  document.querySelector(".comment").style.display = "none";
  document.querySelector(".share").style.display = "none";
});
share.addEventListener("click", () => {
  // document.querySelector(".showlikers").addEventListener("click", hidemodal);
  document.querySelector(".showlikers").classList.remove("hidden");
  document.querySelector(".share").style.display = "block";
  document.querySelector(".comment").style.display = "none";
  nameoflikers.style.display = "none";
});
comment.addEventListener("click", () => {
  // document.querySelector(".showlikers").addEventListener("click", hidemodal);
  document.querySelector(".showlikers").classList.remove("hidden");
  document.querySelector(".comment").style.display = "flex";
  document.querySelector(".share").style.display = "none";
  nameoflikers.style.display = "none";
});
hidelikerspage.addEventListener("click", () => {
  document.querySelector(".showlikers").classList.add("hidden");
});

// document
//   .querySelector(".showlikers")
//   .addEventListener("click", hidemodal, false);
addcommentbtn.addEventListener("click", addcommentfunc);
actionsbtnone.addEventListener("click", () =>
  showconfirm(`Shared to ${event.target.id}`)
);
actionsbtntwo.addEventListener("click", () =>
  showconfirm(`Shared to ${event.target.id}`)
);
actionsbtnthree.addEventListener("click", () =>
  showconfirm(`Shared to ${event.target.id}`)
);
