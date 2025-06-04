#include <iostream>
#include <filesystem>
#include <algorithm>
#include "browser_launcher.h"
#include "server.h"
#include <thread>


using namespace std;

int main() {
    cout<<"Starting chess Application..." << endl;
    server sr;
    std::thread serverThread([&sr]() {
        sr.startserver(8080);
    });

    std::this_thread::sleep_for(std::chrono::milliseconds(5000));

    BrowserLauncher launcher;
    
    string url = "http://localhost:8080";
    
    cout << "Attempting to open: " << url << endl;
    
    if (launcher.launchBrowser(url)) {
        cout << "Browser launched successfully."<<endl;
    } else {
        cerr << "Failed to launch the browser." << endl;
    }
    
    serverThread.join();

    return 0;
}