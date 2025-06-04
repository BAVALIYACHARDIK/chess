# Browser UI Application

This project is a simple desktop application that launches a web browser to display a user interface built with HTML, CSS, and JavaScript. The application is designed to be easy to set up and use without requiring a web server.

## Project Structure

```
browser-ui-app
├── src
│   ├── main.cpp               # Entry point of the application
│   ├── browser_launcher.cpp    # Implementation of the BrowserLauncher class
│   ├── browser_launcher.h      # Header file for the BrowserLauncher class
│   └── html
│       ├── index.html         # Main HTML page for the user interface
│       ├── styles.css         # CSS styles for the HTML page
│       └── scripts.js         # JavaScript for client-side interactivity
├── include
│   └── external_libs.h        # Declarations for external libraries
├── CMakeLists.txt             # CMake configuration file
└── README.md                  # Documentation for the project
```

## Setup Instructions

1. **Clone the Repository**: 
   Clone this repository to your local machine using the following command:
   ```
   git clone <repository-url>
   ```

2. **Install Dependencies**: 
   Ensure you have CMake installed on your system. You may also need a C++ compiler compatible with CMake.

3. **Build the Application**: 
   Navigate to the project directory and create a build directory:
   ```
   cd browser-ui-app
   mkdir build
   cd build
   ```
   Run CMake to configure the project:
   ```
   cmake ..
   ```
   Then build the application:
   ```
   cmake --build .
   ```

4. **Run the Application**: 
   After building, you can run the application. It will automatically open the default web browser and display the user interface.

## Usage Guidelines

- The application is designed to open the `index.html` file located in the `src/html` directory.
- You can modify the HTML, CSS, and JavaScript files to customize the user interface and functionality as needed.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.