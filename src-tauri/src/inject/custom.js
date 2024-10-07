/*
 * This file serves as a collection point for external JS and CSS dependencies.
 * It amalgamates these external resources for easier injection into the application.
 * Additionally, you can directly include any script files in this file
 * that you wish to attach to the application.
 */

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('ad_leftslot').remove();
  document.getElementById('ad_topslot').remove();
  document.getElementById('rightcol-above-sticky').remove();
  document.getElementById('rightcol-sticky').remove();
  document.getElementById('rightcol-sticky2').remove();
  let list = document.getElementsByClassName("topslot-container");
  for (const i of list) {
    i.remove();
  }
  list = document.getElementsByClassName("pr x lbb lb-cm");
  for (const i of list) {
    i.remove();
  }

  const input = document.getElementById('searchword');
  setTimeout(() => {
    input.blur();
  }, 10);


  const nav = document.querySelector("#header :first-child");
  nav.remove();

  const header = document.querySelector("#header");
  const main = document.querySelector("#header + div");
  main.style.paddingTop = (header.offsetHeight + 5) + 'px';
});

document.addEventListener('keydown', (event) => {
  window.scrollTo(0, 0);
  const input = document.getElementById('searchword');
  if (event.target == input) {
    console.log(event);
    return;
  }

  input.focus();
  input.value = '';
  console.log(event);
})