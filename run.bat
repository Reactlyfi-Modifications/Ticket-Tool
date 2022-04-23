@echo off
title Reactlyfi Web and Bots 
echo Starting the bot, Made by ReactlyFi Teamet
ping localhost 3 >nul
node index.js
cls
IF ERRORLEVEL 0 ECHO It seems the bot failed to start, try read the Readme.MD file first or please contact CPTRICO#5167 or join https://discord.gg/2PV55MzjzJ
ping localhost -n 20 >nul
exit