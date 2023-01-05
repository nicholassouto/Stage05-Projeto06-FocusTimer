import { elements } from "./elements.js";

const { buttonPause, buttonPlay, buttonSet, buttonStop, buttonSoundOff, buttonSoundOn } = elements;

export function Events({ controler, timer, sound }) {
  buttonPlay.addEventListener("click", function () {
    controler.play();
    timer.countdown();
    sound.pressButton();
  });

  buttonPause.addEventListener("click", function () {
    controler.pause();
    timer.hold();
    sound.pressButton();
  });

  buttonStop.addEventListener("click", function () {
    controler.reset();
    timer.reset();
    sound.pressButton();
  });

  buttonSoundOn.addEventListener("click", function () {
    buttonSoundOff.classList.remove("hide");
    buttonSoundOn.classList.add("hide");
    sound.bgAudio.pause();
  });
  
  buttonSoundOff.addEventListener("click", function () {
    buttonSoundOff.classList.add("hide");
    buttonSoundOn.classList.remove("hide");
    sound.bgAudio.play();
  });

  buttonSet.addEventListener("click", function () {
    let newMinutes = controler.getMinutes();

    if (!newMinutes) {
      timer.reset();
      return;
    }
    timer.updateDisplay(newMinutes, 0);
    timer.updateMinutes(newMinutes);
  });

  return {};
}
