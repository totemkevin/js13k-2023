export function addListener(core) {
  document.getElementById('next').addEventListener('click', () => {
    console.log('next');
    core.next();
  });
  document.getElementById('attack').addEventListener('click', () => {
    console.log('attack');
    core.attack();
  });
  document.getElementById('detect').addEventListener('click', () => {
    console.log('detect');
    core.detect();
  });
  document.getElementById('addS').addEventListener('click', () => {
    console.log('addS');
    core.addArmy('s');
  });
  document.getElementById('addW').addEventListener('click', () => {
    core.addArmy('w');
  });
  document.getElementById('addA').addEventListener('click', () => {
    core.addArmy('a');
  });
  document.getElementById('addR').addEventListener('click', () => {
    core.addArmy('r');
  });
}

export function refreshUI(data = {}) {
  for (const item of Object.keys(data.info)) {
    document.getElementById(item).innerHTML = data.info[item];
  }
  for (const item of Object.keys(data.army)) {
    document.getElementById('army' + item).innerHTML = data.army[item];
  }
  for (const item of Object.keys(data.town)) {
    document.getElementById(item).innerHTML = data.town[item];
  }
  for (const item of Object.keys(data.guard)) {
    document.getElementById('guard' + item).innerHTML = data.guard[item];
  }
  let text = '';
  for (let message of data.log) {
    text += `<div cless="message">${message}</div>`;
  }
  document.getElementById('log').innerHTML = text;
}
