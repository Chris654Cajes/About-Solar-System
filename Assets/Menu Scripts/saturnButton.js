var menuCam : GameObject;
var menu : GameObject;
var saturnMenu : GameObject;
var select : AudioClip;

function OnMouseDown ()
{
	AudioSource.PlayClipAtPoint(select, new Vector3 (7, 7, 7));
	menu.gameObject.SetActive(false);
	saturnMenu.gameObject.SetActive(true);
	menuCam.GetComponent.<Animation>().Play("SaturnIn");
}