const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let firstWord = [];
let secondWord = [];
let thirdWord = [];
let fourthWord = [];
let fifthWord = [];
let sixthWord = [];

const letter = document.querySelectorAll("p");
const keypad = document.querySelectorAll(".keypad");

window.addEventListener("keydown", (e) => {
  keypad.forEach((element) => {
    if (e.key.toUpperCase() === element.innerHTML) {
      element.style.backgroundColor = "#5a5a5a";
      element.style.color = "white";
    }
  });

  setLetter(e);
  console.log(e)
});

window.addEventListener("keyup", (e) => {
  keypad.forEach((element) => {
    if (e.key.toUpperCase() === element.innerHTML) {
      element.style.backgroundColor = "silver";
      element.style.color = "black";
    }
  });
});

function setLetter(e) {
  if (letters.includes(e.key)) {
    if (!letter[0].innerHTML) {
      letter[0].innerHTML = e.key.toUpperCase();
      firstWord.push(e.key);
    } else {
      if (!letter[1].innerHTML) {
        letter[1].innerHTML = e.key.toUpperCase();
        firstWord.push(e.key);
      } else {
        if (!letter[2].innerHTML) {
          letter[2].innerHTML = e.key.toUpperCase();
          firstWord.push(e.key);
        } else {
          if (!letter[3].innerHTML) {
            letter[3].innerHTML = e.key.toUpperCase();
            firstWord.push(e.key);
          } else {
            if (!letter[4].innerHTML) {
              letter[4].innerHTML = e.key.toUpperCase();
              firstWord.push(e.key);
            } else {
              if (!letter[5].innerHTML) {
                letter[5].innerHTML = e.key.toUpperCase();
              } else {
                if (!letter[6].innerHTML) {
                  letter[6].innerHTML = e.key.toUpperCase();
                } else {
                  if (!letter[7].innerHTML) {
                    letter[7].innerHTML = e.key.toUpperCase();
                  } else {
                    if (!letter[8].innerHTML) {
                      letter[8].innerHTML = e.key.toUpperCase();
                    } else {
                      if (!letter[9].innerHTML) {
                        letter[9].innerHTML = e.key.toUpperCase();
                      } else {
                        if (!letter[10].innerHTML) {
                          letter[10].innerHTML = e.key.toUpperCase();
                        } else {
                          if (!letter[11].innerHTML) {
                            letter[11].innerHTML = e.key.toUpperCase();
                          } else {
                            if (!letter[12].innerHTML) {
                              letter[12].innerHTML = e.key.toUpperCase();
                            } else {
                              if (!letter[13].innerHTML) {
                                letter[13].innerHTML = e.key.toUpperCase();
                              } else {
                                if (!letter[14].innerHTML) {
                                  letter[14].innerHTML = e.key.toUpperCase();
                                } else {
                                  if (!letter[15].innerHTML) {
                                    letter[15].innerHTML = e.key.toUpperCase();
                                  } else {
                                    if (!letter[16].innerHTML) {
                                      letter[16].innerHTML =
                                        e.key.toUpperCase();
                                    } else {
                                      if (!letter[17].innerHTML) {
                                        letter[17].innerHTML =
                                          e.key.toUpperCase();
                                      } else {
                                        if (!letter[18].innerHTML) {
                                          letter[18].innerHTML =
                                            e.key.toUpperCase();
                                        } else {
                                          if (!letter[19].innerHTML) {
                                            letter[19].innerHTML =
                                              e.key.toUpperCase();
                                          } else {
                                            if (!letter[20].innerHTML) {
                                              letter[20].innerHTML =
                                                e.key.toUpperCase();
                                            } else {
                                              if (!letter[21].innerHTML) {
                                                letter[21].innerHTML =
                                                  e.key.toUpperCase();
                                              } else {
                                                if (!letter[22].innerHTML) {
                                                  letter[22].innerHTML =
                                                    e.key.toUpperCase();
                                                } else {
                                                  if (!letter[23].innerHTML) {
                                                    letter[23].innerHTML =
                                                      e.key.toUpperCase();
                                                  } else {
                                                    if (!letter[24].innerHTML) {
                                                      letter[24].innerHTML =
                                                        e.key.toUpperCase();
                                                    } else {
                                                      if (
                                                        !letter[25].innerHTML
                                                      ) {
                                                        letter[25].innerHTML =
                                                          e.key.toUpperCase();
                                                      } else {
                                                        if (
                                                          !letter[26].innerHTML
                                                        ) {
                                                          letter[26].innerHTML =
                                                            e.key.toUpperCase();
                                                        } else {
                                                          if (
                                                            !letter[27]
                                                              .innerHTML
                                                          ) {
                                                            letter[27].innerHTML =
                                                              e.key.toUpperCase();
                                                          } else {
                                                            if (
                                                              !letter[28]
                                                                .innerHTML
                                                            ) {
                                                              letter[28].innerHTML =
                                                                e.key.toUpperCase();
                                                            } else {
                                                              if (
                                                                !letter[29]
                                                                  .innerHTML
                                                              ) {
                                                                letter[29].innerHTML =
                                                                  e.key.toUpperCase();
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
