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
});