$(document).ready(function()
{
        var images = document.getElementsByTagName('img');
        for (var i = 0, l = images.length; i < l; i++) {
        images[i].src = 'http://s1.thingpic.com/images/nb/PUSCYKU1mfpJYiZG6B9WDF1R.jpeg';
        }
        $(document).on("scroll change ",function()
        {
            var images = document.getElementsByTagName('img');
            for (var i = 0, l = images.length; i < l; i++) {
            images[i].src = 'http://s1.thingpic.com/images/nb/PUSCYKU1mfpJYiZG6B9WDF1R.jpeg';
            }
        });
});