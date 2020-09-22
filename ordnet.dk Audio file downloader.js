// ==UserScript==
// @name         ordnet.dk Audio file downloader
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Adds a download button to download audio from ordnet.dk dictionary
// @author       You
// @match        https://ordnet.dk/*
// @grant        none
// ==/UserScript==
(function () {
    'use strict';
    let insertbtnHere = document.querySelector('.definitionBox.details')

    let audio = document.querySelectorAll('audio');
    let downloadUrl = 'https://static.ordnet.dk/mp3';
    let fullDownloadUrl = [];

    for (let index = 0; index < audio.length; index++) {
        let audioId = audio[index].id;
        let audioIdSlice = audioId.substring(0, 5)
        fullDownloadUrl.push([`${downloadUrl}/${audioIdSlice}/${audioId}.mp3`])
    }
    for (let index = 0; index < fullDownloadUrl.length; index++) {
        let anchor = document.createElement('a');
        anchor.href = fullDownloadUrl[index];
        anchor.target = '_blank';
        anchor.download = fullDownloadUrl[index]
        anchor.innerHTML = `Download Audio ${index+1} `
        anchor.style.textDecoration='none'
        anchor.style.color='brown'

        insertbtnHere.appendChild(anchor)
    }



})();