var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "ItemGeometriesHorizontal": "",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "com.github.zren.inactiveblur"
                },
                "/ConfigDialog": {
                    "DialogHeight": "836",
                    "DialogWidth": "1600"
                },
                "/General": {
                    "ToolBoxButtonState": "topcenter",
                    "ToolBoxButtonX": "429",
                    "ToolBoxButtonY": "24"
                },
                "/Wallpaper/com.github.zren.inactiveblur/General": {
                    "FillMode": "2",
                    "Image": "file:///usr/share/wallpapers/garuda-wallpapers/Ghosts.jpg",
                    "SlidePaths": "/usr/share/wallpapers"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "file:///usr/share/wallpapers/garuda-wallpapers/Ghosts.jpg",
                    "SlidePaths": "/usr/share/wallpapers"
                }
            },
            "wallpaperPlugin": "com.github.zren.inactiveblur"
        }
    ],
    "panels": [
        {
            "alignment": "left",
            "applets": [
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/General": {
                            "containmentType": "Plasma"
                        }
                    },
                    "plugin": "org.kde.windowappmenu"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                }
            },
            "height": 2,
            "hiding": "normal",
            "location": "bottom",
            "maximumLength": 88.88888888888889,
            "minimumLength": 88.88888888888889,
            "offset": 0
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
