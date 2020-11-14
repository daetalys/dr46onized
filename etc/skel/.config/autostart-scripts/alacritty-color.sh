#!/bin/sh
rm -rf ~/.config/alacritty
mv ~/.config/alacritty_themed ~/.config/alacritty

/usr/lib/plasma-changeicons BeautyLine
notify-send "Theming applied! 😊" --icon plasmashell -a "Garuda dr460nized setup"

rm -f ~/.config/autostart-scripts/alacritty-color.sh