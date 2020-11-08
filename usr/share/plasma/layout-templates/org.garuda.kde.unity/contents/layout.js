var plasma = getApiVersion(1)

var activityId = activityIds[0]

var activity = desktopById(activityId)
//Remove desktop toolbox
activity.currentConfigGroup = ["General"]
activity.writeConfig("showToolbox", false)

//Create top panel

var panel = new Panel
var panelScreen = panel.screen
var freeEdges = {"bottom": true, "top": true, "left": true, "right": true}

for (i = 0; i < panelIds.length; ++i) {
    var tmpPanel = panelById(panelIds[i])
    if (tmpPanel.screen == panelScreen) {
        // Ignore the new panel
        if (tmpPanel.id != panel.id) {
            freeEdges[tmpPanel.location] = false;
        }
    }
}

panel.location = "top";
panel.alignment = "left"
if (Math.round(gridUnit / 18 * 28) >= 28) {
    panel.height = Math.round(gridUnit / 18 * 28);
} else {
    panel.height = 28;
}


//Add widgets to the top panel
var winbutton= panel.addWidget("org.kde.windowbuttons")
winbutton.currentConfigGroup = ["General"]
winbutton.writeConfig("disabledMaximizedBorders", "NoBorders")

panel.addWidget("org.kde.windowtitle")
panel.addWidget("org.kde.windowappmenu")
panel.addWidget("org.kde.plasma.panelspacer")

/* Next up is determining whether to add the Input Method Panel
 * widget to the panel or not. This is done based on whether
 * the system locale's language id is a member of the following
 * white list of languages which are known to pull in one of
 * our supported IME backends when chosen during installation
 * of common distributions. */

var langIds = ["as",    // Assamese
               "bn",    // Bengali
               "bo",    // Tibetan
               "brx",   // Bodo
               "doi",   // Dogri
               "gu",    // Gujarati
               "hi",    // Hindi
               "ja",    // Japanese
               "kn",    // Kannada
               "ko",    // Korean
               "kok",   // Konkani
               "ks",    // Kashmiri
               "lep",   // Lepcha
               "mai",   // Maithili
               "ml",    // Malayalam
               "mni",   // Manipuri
               "mr",    // Marathi
               "ne",    // Nepali
               "or",    // Odia
               "pa",    // Punjabi
               "sa",    // Sanskrit
               "sat",   // Santali
               "sd",    // Sindhi
               "si",    // Sinhala
               "ta",    // Tamil
               "te",    // Telugu
               "th",    // Thai
               "ur",    // Urdu
               "vi",    // Vietnamese
               "zh_CN", // Simplified Chinese
               "zh_TW"] // Traditional Chinese

if (langIds.indexOf(languageId) != -1) {
    panel.addWidget("org.kde.plasma.kimpanel");
}
panel.addWidget("org.kde.netspeedWidget")
panel.addWidget("org.kde.plasma.systemtray")
panel.addWidget("org.kde.plasma.notifications")
panel.addWidget("org.kde.milou")
var eventcalendar = panel.addWidget("org.kde.plasma.eventcalendar")
eventcalendar.currentConfigGroup = ["General"]
eventcalendar.writeConfig("clock_timeformat", "h:mm AP")

//USwitch https://store.kde.org/p/1194339/
var uswitcher= panel.addWidget("org.kde.plasma.userswitcher")
uswitcher.currentConfigGroup = ["Configuration", "General"]
uswitcher.writeConfig("showFullName", false)
uswitcher.writeConfig("showTechnicalInfo", true)
uswitcher.writeConfig("icon", "system-shutdown")



//Create left panel
 
var leftpanel = new Panel
leftpanel.location = "left"
leftpanel.height = gridUnit * 3.2
leftpanel.offset=panel.height

//Add widgets to the left panel
var menu = leftpanel.addWidget("org.kde.plasma.kickerdash")
//Add default shortcut to the kickerdash menu
menu.currentConfigGroup = ["Shortcuts"]
menu.writeConfig("global", "Alt+F1")
menu.writeConfig("useCustomButtonImage", "true")
menu.writeConfig("customButtonImage", "/usr/share/icons/garuda/garuda-white.png")

//Icontasks

var tasks = leftpanel.addWidget("org.kde.plasma.icontasks")
tasks.currentConfigGroup = ["General"]
tasks.writeConfig("launchers", "applications:firefox.desktop,applications:org.kde.dolphin.desktop,applications:org.kde.konsole.desktop,applications:org.kde.kate.desktop,applications:systemsettings.desktop")
//Present Windows Button https://store.kde.org/p/1181039/
//var windows = leftpanel.addWidget("com.github.zren.presentwindows")
//Toggle desktop grid
//windows.currentConfigGroup = ["Configuration", "General"]
//windows.writeConfig("clickCommand","ShowDesktopGrid")
leftpanel.addWidget("org.kde.latte.separator")
//Trash
leftpanel.addWidget("org.kde.plasma.trash")
