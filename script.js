// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*.discord.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
//TODO: find a better way to apply themes without constantly running this function and only running it once the items have loaded
let i = 0
    let intie = setInterval(run=>{document.querySelectorAll(".messages-3amgkR").forEach(instance=>{instance.style.backgroundColor = "#302848"})
document.querySelectorAll(".members-1998pB").forEach(instance=>{instance.style.backgroundColor = "#302848"})
document.querySelectorAll(".listContent-2_qb-y").forEach(instance=>{instance.style.backgroundColor = "#302848"})
document.querySelectorAll(".scroller-2wx7Hm").forEach(instance=>{instance.style.backgroundColor = "#302848"})
document.querySelectorAll(".channelNotice-1-XFjC").forEach(instance=>{instance.style.backgroundColor = "#282140"})
document.querySelectorAll(".quickswitcher-35bYg4").forEach(instance=>{instance.style.backgroundColor = "#282140"})
document.querySelectorAll(".header-2o-2hj").forEach(instance=>{instance.style.backgroundColor = "#342C4D"})
document.querySelectorAll(".title-3qD0b-").forEach(instance=>{instance.style.backgroundColor = "rgba(52,44,77,1)"})
document.querySelectorAll(".scroller-2TZvBN").forEach(instance=>{instance.style.backgroundColor = "#221E36"})
document.querySelectorAll(".childWrapper-anI2G9").forEach(instance=>{instance.style.backgroundColor = "#1C1A2D"})
document.querySelectorAll(".scrollableContainer-2NUZem").forEach(instance=>{instance.style.backgroundColor = "#302848"})
document.querySelectorAll(".form-2fGMdU").forEach(instance=>{instance.style.backgroundColor = "#302848"})
document.querySelectorAll(".container-3baos1").forEach(instance=>{instance.style.backgroundColor = "#302848"})
document.querySelectorAll(".searchBar-3dMhjb").forEach(instance=>{instance.style.backgroundColor = "#342C4D"})
document.querySelectorAll(".scroller-2FKFPG").forEach(instance=>{instance.style.backgroundColor = "#2821401"})
document.querySelectorAll(".searchBar-6Kv8R2").forEach(instance=>{instance.style.backgroundColor = "#342C4D"})
document.querySelectorAll(".privateChannels-1nO12o").forEach(instance=>{instance.style.backgroundColor = "#2821401"})
document.querySelectorAll(".container-16j22k").forEach(instance=>{instance.style.backgroundColor = "#302848"})

 if(i==200){
 clearInterval(intie)
}
                                 },500)

})();
