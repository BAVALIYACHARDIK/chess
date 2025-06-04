#include "browser_launcher.h"
#include <Windows.h>
#include <string>

bool BrowserLauncher::launchBrowser(const std::string& url) {
    std::string command = "start " + url;
    return system(command.c_str()) == 0;
}