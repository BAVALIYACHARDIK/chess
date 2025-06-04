cmake_minimum_required(VERSION 3.10)

project(BrowserUIApp)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

set(SRC_DIR ${CMAKE_CURRENT_SOURCE_DIR}/browser-ui-app/src)
# set(HTTP_DIR ${CMAKE_CURRENT_SOURCE_DIR}/browser-ui-app/httplib)

include_directories(${SRC_DIR})
# include_directories(${HTTP_DIR})


set(SOURCES
    ${SRC_DIR}/main.cpp
    ${SRC_DIR}/browser_launcher.cpp
    ${SRC_DIR}/current_game.cpp
    ${SRC_DIR}/server.cpp
)

set(HEADERS
    ${SRC_DIR}/current_game.h
    ${SRC_DIR}/server.h
    ${SRC_DIR}/browser_launcher.h
    ${SRC_DIR}/httplib.h
)

add_executable(BrowserUIApp ${SOURCES} ${HEADERS})

file(COPY ${SRC_DIR}/html DESTINATION ${CMAKE_BINARY_DIR}/Debug)
file(COPY ${SRC_DIR}/html DESTINATION ${CMAKE_BINARY_DIR}/Release)