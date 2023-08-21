export function create(level) {
  if (level === 1) {
    return { guard: { shield: 0, warrior: 5, archer: 0, rider: 0 } };
  } else if (level > 1 && level <= 5) {
    const arr = split(level, 2);
    const shield = 5 + arr[0];
    const warrior = 5 + arr[1];
    const archer = 0;
    const rider = 0;
    return { guard: { shield, warrior, archer, rider } };
  } else if (level > 5 && level <= 10) {
    const arr = split(level, 3);
    const shield = 5 + arr[0];
    const warrior = 5 + arr[1];
    const archer = 5 + arr[2];
    const rider = 0;
    return { guard: { shield, warrior, archer, rider } };
  } else {
    const arr = split(level, 4);
    const shield = 5 + arr[0];
    const warrior = 5 + arr[1];
    const archer = 5 + arr[2];
    const rider = 5 + arr[3];
    return { guard: { shield, warrior, archer, rider } };
  }
}

function split(level, splitNum) {
  const randomArr = [];
  const addArr = [];
  let total = 0;
  for (let i = 0; i < splitNum; i++) {
    const r = Math.random();
    randomArr.push(r);
    total += r;
  }
  for (const item of randomArr) {
    addArr.push(Math.ceil((level * item) / total));
  }
  console.log(addArr);
  return addArr;
}
