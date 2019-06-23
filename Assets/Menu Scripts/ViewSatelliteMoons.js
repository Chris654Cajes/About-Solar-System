var profile : GameObject;
var description : GameObject;
var satelliteMoons : GameObject;
var select : AudioClip;

function OnMouseDown ()
{
	AudioSource.PlayClipAtPoint(select, new Vector3 (7, 7, 7));
	profile.gameObject.SetActive(false);
	description.gameObject.SetActive(false);
	satelliteMoons.gameObject.SetActive(true);
	
}