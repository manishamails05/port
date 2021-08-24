/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 4
   Tutorial Case

   Author:    Manisha Kapoor
   Date:      02/15/2020

   Filename:  menus.js

   -------------------------------------------------------------
   */


window.onload = init;
var activeMenu = null;
var clipHgt = 0;
var timeID;
function init()
{
  var menus = new Array();
  var allElems = document.getElementsByTagName("*");
  for (var i = 0; i < allElems.length; i++) 
  {
    if (allElems[i].className == "ul") menus.push(allElems[i]);
  }
  for (var i = 0; i < menus.length; i++)
  {
    menus[i].onclick = changeMenu;
    menus[i].onmouseover = moveMenu;
  }
}
function moveMenu() 
{
 if (activeMenu) 
 {
    closeOldMenu();
    menuID = this.id + "ul";
    activeMenu = document.getElementById(menuID);
    activeMenu.style.clip = "rect(0px, 150px, 0px, 0px)";
    activeMenu.style.display = "block";
    timeID = setInterval("rollDown()", 1);
  }
}
function changeMenu() 
{
 closeOldMenu();
  menuID = this.id + "List";
  activeMenu = document.getElementById(menuID);
  activeMenu.style.clip = "rect(0px, 150px, 0px, 0px)";
  activeMenu.style.display = "block";
  timeID = setInterval("rollDown()", 1);
}
function closeOldMenu()
{
  if (activeMenu) 
  {
    clearInterval(timeID);
    activeMenu.style.display = "none";
    activeMenu = null;
  }
}
function rollDown() 
{
  clipHgt = clipHgt + 10;
  if (clipHgt < 400) {
    activeMenu.style.clip = "rect(0px, 150px," + clipHgt + "px, 0px)";
  } 
  else {
    clearInterval(timeID);
    clipHgt = 0;
  }
}
