#pragma once
#include <string>

class BrowserLauncher {
public:
    BrowserLauncher() = default;
    bool launchBrowser(const std::string& url);
};
