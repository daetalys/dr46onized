#!/bin/sh
rm -rf ~/.config/alacritty
mv ~/.config/alacritty_themed ~/.config/alacritty

/usr/lib/plasma-changeicons BeautyLine

rm -f ~/.config/autostart-scripts/alacritty-color.sh