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
                "/General": {
                    "ToolBoxButtonState": "topcenter",
                    "ToolBoxButtonX": "429",
                    "ToolBoxButtonY": "28"
                },
                "/Wallpaper/com.github.zren.inactiveblur/General": {
                    "FillMode": "2",
                    "Image": "file:///usr/share/wallpapers/garuda-wallpapers/Ghosts.jpg"
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
                        "/Configuration": {
                            "PreloadWeight": "100"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/General": {
                            "favoritesPortedToKAstats": "true",
                            "icon": "garuda-welcome",
                            "menuItems": "application:t,bookmark:t,computer:t,leave:t,oftenUsed:f,used:f",
                            "systemApplications": "systemsettings.desktop,org.kde.kinfocenter.desktop"
                        },
                        "/Shortcuts": {
                            "global": "Alt+F1"
                        }
                    },
                    "plugin": "org.kde.plasma.kickoff"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/Configuration/Configuration/General": {
                            "buttonSizePercentage": "45",
                            "containmentType": "Plasma",
                            "disabledMaximizedBorders": "NoBorders",
                            "inactiveStateEnabled": "true",
                            "lengthFirstMargin": "5",
                            "lengthLastMargin": "5",
                            "selectedPlugin": "",
                            "spacing": "6",
                            "useDecorationMetrics": "false",
                            "visibility": "ActiveMaximizedWindow"
                        },
                        "/Configuration/Configuration/General": {
                            "buttonSizePercentage": "45",
                            "containmentType": "Plasma",
                            "disabledMaximizedBorders": "ShowBorders",
                            "inactiveStateEnabled": "true",
                            "lengthFirstMargin": "5",
                            "lengthLastMargin": "5",
                            "selectedPlugin": "",
                            "spacing": "6",
                            "useDecorationMetrics": "false"
                        },
                        "/Configuration/General": {
                            "buttonSizePercentage": "45",
                            "containmentType": "Plasma",
                            "inactiveStateEnabled": "true",
                            "lengthFirstMargin": "5",
                            "lengthLastMargin": "5",
                            "selectedPlugin": "",
                            "spacing": "6",
                            "useDecorationMetrics": "false",
                            "visibility": "ActiveMaximizedWindow"
                        }
                    },
                    "plugin": "org.kde.windowbuttons"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/Configuration/Configuration/General": {
                            "containmentType": "Plasma",
                            "filterActivityInfo": "false",
                            "lengthFirstMargin": "4",
                            "lengthLastMargin": "4",
                            "placeHolder": "KDE Plasma - Garuda Linux 🐲",
                            "showIcon": "false"
                        },
                        "/Configuration/Configuration/General": {
                            "containmentType": "Plasma",
                            "filterActivityInfo": "false",
                            "lengthFirstMargin": "4",
                            "lengthLastMargin": "4",
                            "placeHolder": "KDE Plasma - Garuda Linux 🐲",
                            "showIcon": "false"
                        },
                        "/Configuration/General": {
                            "containmentType": "Plasma",
                            "filterActivityInfo": "false",
                            "lengthFirstMargin": "4",
                            "lengthLastMargin": "4",
                            "placeHolder": "KDE Plasma - Garuda Linux 🐲",
                            "showIcon": "false"
                        }
                    },
                    "plugin": "org.kde.windowtitle"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/Configuration/Configuration/General": {
                            "containmentType": "Plasma",
                            "fillWidth": "true",
                            "toggleMaximizedOnDoubleClick": "true",
                            "toggleMaximizedOnMouseWheel": "true"
                        },
                        "/Configuration/Configuration/General": {
                            "containmentType": "Plasma",
                            "fillWidth": "true",
                            "toggleMaximizedOnDoubleClick": "true",
                            "toggleMaximizedOnMouseWheel": "true"
                        },
                        "/Configuration/General": {
                            "containmentType": "Plasma",
                            "fillWidth": "true",
                            "toggleMaximizedOnDoubleClick": "true",
                            "toggleMaximizedOnMouseWheel": "true"
                        }
                    },
                    "plugin": "org.kde.windowappmenu"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "100",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "55",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "100"
                        }
                    },
                    "plugin": "org.kde.plasma.systemtray"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "60",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "100"
                        },
                        "/Configuration/Configuration/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        }
                    },
                    "plugin": "org.kde.plasma.digitalclock"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/Configuration/Configuration/General": {
                            "show_lockScreen": "false"
                        },
                        "/Configuration/Configuration/General": {
                            "show_lockScreen": "false"
                        },
                        "/Configuration/General": {
                            "show_lockScreen": "false"
                        }
                    },
                    "plugin": "org.kde.plasma.lock_logout"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "83",
                    "DialogWidth": "1600"
                }
            },
            "height": 1.5555555555555556,
            "hiding": "normal",
            "location": "top",
            "maximumLength": 88.88888888888889,
            "minimumLength": 88.88888888888889,
            "offset": 0
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
