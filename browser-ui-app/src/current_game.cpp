#include <string>
#include <mutex>
#include <iostream>
#include "current_game.h"

using namespace std;

    string current_fen;
    std::mutex fenmutex;
    

    
    chessgame::chessgame() {
        
        current_fen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
    }
    std::string chessgame::get_current_fen() {
        std::lock_guard<std::mutex> lock(fenmutex);
        return current_fen;
    }
    bool chessgame::setfen(std::string newfen){

        std::lock_guard<std::mutex> lock(fenmutex);
        
        if (newfen.empty()) {
            std::cerr << "Invalid FEN: FEN string cannot be empty." << std::endl;
            return false;
        }
        
        current_fen = newfen;
        return true;
    }
