var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "com.github.zren.inactiveblur"
                },
                "/ConfigDialog": {
                    "DialogHeight": "540",
                    "DialogWidth": "720"
                },
                "/Configuration": {
                    "PreloadWeight": "42"
                },
                "/General": {
                    "positions": "2,12,desktop:/Home.desktop,1,1,desktop:/trash.desktop,1,2",
                    "showToolbox": "false",
                    "sortMode": "-1"
                },
                "/Wallpaper/com.github.zren.inactiveblur/General": {
                    "FillMode": "2",
                    "Image": "file:///usr/share/wallpapers/garuda-wallpapers/Ghosts.jpg",
                    "SlidePaths": "/usr/share/wallpapers"
                },    
                "/Wallpaper/org.kde.image/General": {
                    "Image": "file:///usr/share/wallpapers/garuda-wallpapers/background.jpg"
                }
            },
            "wallpaperPlugin": "com.github.zren.inactiveblur"
        }
    ],
    "panels": [
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
