import { Controls } from "./controls.js";
import { Timer } from "./timer.js";
import { elements } from "./elements.js";
import { Sound } from "./sounds.js";
import { Events } from "./events.js";

const { buttonPause, buttonPlay, buttonSet, buttonStop, minutesDisplay, secondsDisplay } = elements;

const controler = Controls({ buttonPause, buttonPlay, buttonSet, buttonStop });

const timer = Timer({ minutesDisplay, secondsDisplay, resetControls: controler.reset });

const sound = Sound();

Events({ controler, timer, sound });
