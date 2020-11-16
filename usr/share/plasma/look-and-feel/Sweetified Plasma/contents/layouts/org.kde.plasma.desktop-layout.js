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
                    "wallpaperplugin": "org.kde.image"
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
                "/Wallpaper/org.kde.image/General": {
                    "Image": "file:///usr/share/wallpapers/garuda-wallpapers/Ghosts.jpg",
                    "SlidePaths": "/usr/share/wallpapers"
                }
            },
            "wallpaperPlugin": "org.kde.image"
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
                            "PreloadWeight": "100",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "100"
                        },
                        "/Configuration/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/Configuration/General": {
                            "favoritesPortedToKAstats": "true",
                            "icon": "garuda-welcome",
                            "menuItems": "application:t,bookmark:t,computer:t,leave:t,oftenUsed:f,used:f",
                            "systemApplications": "systemsettings.desktop"
                        },
                        "/Configuration/Configuration/Shortcuts": {
                            "global": "Alt+F1"
                        },
                        "/Configuration/General": {
                            "favoritesPortedToKAstats": "true",
                            "icon": "garuda-welcome",
                            "menuItems": "application:t\\,bookmark:t\\,computer:t\\,leave:t\\,oftenUsed:f\\,used:f",
                            "systemApplications": "systemsettings.desktop"
                        },
                        "/Configuration/Shortcuts": {
                            "global": "Alt+F1"
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
                        "/Configuration/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/Configuration/General": {
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
                        "/Configuration/General": {
                            "buttonSizePercentage": "45",
                            "containmentType": "Plasma",
                            "disabledMaximizedBorders": "ShowBorders",
                            "inactiveStateEnabled": "true",
                            "lengthFirstMargin": "5",
                            "lengthLastMargin": "5",
                            "selectedPlugin": "",
                            "spacing": "6",
                            "useDecorationMetrics": "false"
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
                        "/Configuration/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
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
                        "/Configuration/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
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
                            "PreloadWeight": "55",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
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
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "100"
                        },
                        "/Configuration/Configuration/ConfigDialog": {
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
                        "/Configuration/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
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
