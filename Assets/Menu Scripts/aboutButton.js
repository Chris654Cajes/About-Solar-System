﻿var menu : GameObject;
var aboutMenu : GameObject;
var select : AudioClip;

function OnMouseDown ()
{
	AudioSource.PlayClipAtPoint(select, new Vector3 (7, 7, 7));
	menu.gameObject.SetActive(false);
	aboutMenu.gameObject.SetActive(true);
}