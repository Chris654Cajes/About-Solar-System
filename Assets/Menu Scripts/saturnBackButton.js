var menuCam : GameObject;
var menu : GameObject;
var saturnMenu : GameObject;
var select : AudioClip;

function OnMouseDown ()
{
	AudioSource.PlayClipAtPoint(select, new Vector3 (7, 7, 7));
	menu.gameObject.SetActive(true);
	saturnMenu.gameObject.SetActive(false);
	menuCam.GetComponent.<Animation>().Play("SaturnOut");
}