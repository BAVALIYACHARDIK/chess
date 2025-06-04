#include <iostream>
#include <string>
#include <mutex>
#include "httplib.h"
#include "current_game.h"
#include "server.h"

using namespace std;

    void server::startserver(int port){

        httplib::Server sr;
        chessgame game;

        sr.set_mount_point("/", "./html");

        sr.Get("/api/position", [&](const httplib::Request& req,httplib::Response& res) {
            string fen = game.get_current_fen();
            cout<< "Current FEN: " << fen << endl;
            res.set_content(fen, "text/plain");
        });

        sr.Post("/api/position", [&](const httplib::Request& req, httplib::Response& res) {
            string newFEN = req.body;
            if (game.setfen(newFEN)) {
                res.set_content("FEN updated successfully", "text/plain");
            } else {
                res.status = 400;
                res.set_content("Invalid FEN", "text/plain");
            }
        });

        sr.listen("localhost",port);
    }

