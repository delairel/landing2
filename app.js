$('p').on('click',function()
{
	$(this).hide();
})

$('h1').on('click',function()
{
	$(this).slideUp();
})
$('h2').on('click',function()
{
	$(this).clone();
})
$('img').on('click',function()
{
	$('img').slideUp();
})