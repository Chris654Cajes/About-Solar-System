var menuCam : GameObject;
var menu : GameObject;
var mercuryMenu : GameObject;
var select : AudioClip;

function OnMouseDown ()
{
	AudioSource.PlayClipAtPoint(select, new Vector3 (7, 7, 7));
	menu.gameObject.SetActive(true);
	mercuryMenu.gameObject.SetActive(false);
	menuCam.GetComponent.<Animation>().Play("MercuryOut");
}