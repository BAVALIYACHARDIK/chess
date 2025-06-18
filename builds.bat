@echo off


cd /d "%~dp0"

taskkill /F /IM BrowserUIApp.exe 2>nul

if exist build (
    echo Deleting existing build directory...
    rmdir /s /q build
)


if not exist build (
    echo Creating build directory...
    mkdir build
)


echo Entering build directory...
cd build


echo Running cmake...
cmake ..


echo Building project...
cmake --build .

echo Build process completed!
pause