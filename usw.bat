@echo off
call npm i -g --save-dev forever
call /WAIT npm i
npm start