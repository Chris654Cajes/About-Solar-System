var myRotationSpeed  : float = 20.0;

var posOrNeg : int = 1;

function Update()
{
		transform.Rotate(0, myRotationSpeed * Time.deltaTime * posOrNeg, 0);
}