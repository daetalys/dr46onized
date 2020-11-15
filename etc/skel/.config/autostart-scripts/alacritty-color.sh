#!/bin/sh
cp ~/.config/alacritty_themed/alacritty.yml ~/.config/alacritty/alacritty.yml && rm -rf ~/.config/alacritty_themed

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

/usr/lib/plasma-changeicons BeautyLine && notify-send "Theming applied! 😊" --icon plasmashell -a "Garuda dr460nized setup"

killall latte-dock && latte-dock

rm -f ~/.config/autostart-scripts/