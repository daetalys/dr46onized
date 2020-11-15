#!/bin/sh
rm -rf ~/.config/alacritty
mv ~/.config/alacritty_themed ~/.config/alacritty

dbus-send --session --dest=org.kde.plasmashell --type=method_call /PlasmaShell org.kde.PlasmaShell.evaluateScript 'string:
var Desktops = desktops();                                                                                                                       
for (i=0;i<Desktops.length;i++) {
        d = Desktops[i];
        d.wallpaperPlugin = "org.kde.image";
        d.currentConfigGroup = Array("Wallpaper",
                                    "org.kde.image",
                                    "General");
        d.writeConfig("Image", "file:///usr/share/wallpapers/garuda-wallpapers/Ghosts.jpg");
}'

/usr/lib/plasma-changeicons BeautyLine
notify-send "Theming applied! 😊" --icon plasmashell -a "Garuda dr460nized setup"

rm -f ~/.config/autostart-scripts/alacritty-color.sh