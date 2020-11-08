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

if (freeEdges["bottom"] == true) {
    panel.location = "bottom";
} else if (freeEdges["top"] == true) {
    panel.location = "top";
} else if (freeEdges["left"] == true) {
    panel.location = "left";
} else if (freeEdges["right"] == true) {
    panel.location = "right";
} else {
    // There is no free edge, so leave the default value
    panel.location = "top";
}

panel.height = Math.round(gridUnit / 18 * 30)

var kickoff = panel.addWidget("org.kde.plasma.kicker")
kickoff.currentConfigGroup = ["Shortcuts"]
kickoff.writeConfig("global", "Alt+F1")
kickoff.writeConfig("useCustomButtonImage", "true")
kickoff.writeConfig("customButtonImage", "/usr/share/icons/garuda/garuda-white.png")
//panel.addWidget("org.kde.plasma.showActivityManager")
//panel.addWidget("org.kde.plasma.pager")
var launcher1 = panel.addWidget("org.kde.plasma.icon")
launcher1.writeConfig("url", "file:///usr/share/applications/firefox.desktop")
var launcher2 = panel.addWidget("org.kde.plasma.icon")
launcher2.writeConfig("url", "file:///usr/share/applications/org.kde.dolphin.desktop")
var launcher3 = panel.addWidget("org.kde.plasma.icon")
launcher3.writeConfig("url", "file:///usr/share/applications/org.kde.konsole.desktop")
var taskmanager = panel.addWidget("org.kde.plasma.taskmanager")
taskmanager.currentConfigGroup = ["General"]
taskmanager.writeConfig("launchers", "")
taskmanager.writeConfig("groupingStrategy", "0")
taskmanager.writeConfig("sortingStrategy", "1")

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
var eventcalendar = panel.addWidget("org.kde.plasma.eventcalendar")
eventcalendar.currentConfigGroup = ["General"]
eventcalendar.writeConfig("clock_line_2", "true")
eventcalendar.writeConfig("clock_timeformat", "h:mm AP")
eventcalendar.writeConfig("clock_timeformat_2", "d MMMM yyyy")
var win7sd = panel.addWidget("org.kde.plasma.win7showdesktop")
win7sd.currentConfigGroup = ["General"]
win7sd.writeConfig("click_action", "showdesktop")
