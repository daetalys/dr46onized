var lattelayout = ConfigFile('latte/garuda-Unity.layout.latte');
lattelayout.group = 'Containments';
var lattelayout1 = ConfigFile(lattelayout, '4');
var lattelayout2 = ConfigFile(lattelayout1, 'General');
if ((gridUnit / 18 * 28) >= 28) {
    var lattesize = Math.round(gridUnit / 18 * 28);
} else {
    var lattesize = 28;
}
lattelayout2.writeEntry('iconSize', lattesize);
var lattelayout3 = ConfigFile('latte/garuda-Unity.layout.latte');
lattelayout3.group = 'Containments';
var lattelayout4 = ConfigFile(lattelayout3, '1');
var lattelayout5 = ConfigFile(lattelayout4, 'General');
if ((gridUnit / 18 * 48) >= 48) {
    var lattewidth = Math.round(gridUnit / 18 * 48);
} else {
    var lattewidth = 48;
}
lattelayout5.writeEntry('iconSize', lattewidth);

var leftpanel = new Panel
leftpanel.location = "left"
leftpanel.height = lattewidth + 12;
leftpanel.minimumLength = 4
leftpanel.maximumLength = 4
leftpanel.hiding = "windowscover"
leftpanel.alignment = "left"

loadTemplate("org.garuda.kde.unity")

var desktopsArray = desktopsForActivity(currentActivity());
for( var j = 0; j < desktopsArray.length; j++) {
    desktopsArray[j].wallpaperPlugin = 'org.kde.slideshow';
}
