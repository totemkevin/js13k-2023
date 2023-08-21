import { refreshUI, addListener } from './ui.js';
import Core from './core.js';

const core = new Core();
core.init();
refreshUI(core.getData());
addListener(core);
