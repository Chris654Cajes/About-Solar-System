var menuCam : GameObject;
var menu : GameObject;
var marsMenu : GameObject;
var select : AudioClip;

function OnMouseDown ()
{
	AudioSource.PlayClipAtPoint(select, new Vector3 (7, 7, 7));
	menu.gameObject.SetActive(true);
	marsMenu.gameObject.SetActive(false);
	menuCam.GetComponent.<Animation>().Play("MarsOut");
}