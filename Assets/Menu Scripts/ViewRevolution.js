var menu : GameObject;
var viewRevolution : GameObject;
var revMercury : GameObject;
var revVenus : GameObject;
var revEarth : GameObject;
var revMars : GameObject;
var revJupiter : GameObject;
var revSaturn : GameObject;
var revUranus : GameObject;
var revNeptune : GameObject;
var select : AudioClip;

function OnMouseDown ()
{
	AudioSource.PlayClipAtPoint(select, new Vector3 (7, 7, 7));
	revMercury.GetComponent( Rotation ).enabled = true;
	revVenus.GetComponent( Rotation ).enabled = true;
	revEarth.GetComponent( Rotation ).enabled = true;
	revMars.GetComponent( Rotation ).enabled = true;
	revJupiter.GetComponent( Rotation ).enabled = true;
	revSaturn.GetComponent( Rotation ).enabled = true;
	revUranus.GetComponent( Rotation ).enabled = true;
	revNeptune.GetComponent( Rotation ).enabled = true;
	menu.gameObject.SetActive(false);
	viewRevolution.gameObject.SetActive(true);
}