var AboutSolarSystem : GameObject;
var Credits : GameObject;
var References : GameObject;
var select : AudioClip;

function OnMouseDown ()
{
	AudioSource.PlayClipAtPoint(select, new Vector3 (7, 7, 7));
	AboutSolarSystem.gameObject.SetActive(false);
	Credits.gameObject.SetActive(false);
	References.gameObject.SetActive(true);
	
}