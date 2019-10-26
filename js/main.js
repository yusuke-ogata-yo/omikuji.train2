'use strict';

{
  const btn = document.getElementById('btn');
  const results = ['大吉', '中吉', '小吉', '凶'];

  btn.addEventListener('click', () => {
    const rand = Math.floor(Math.random() * results.length);
    btn.textContent = results[rand];
  });
}