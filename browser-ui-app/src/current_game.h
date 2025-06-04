#pragma once
#include <string>
#include <mutex>

class chessgame{
public:
    std::string current_fen;
    std::mutex fenmutex; 
    chessgame();
    std::string  get_current_fen();
    bool setfen(std::string newfen);
};