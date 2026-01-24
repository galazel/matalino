package com.example.user_service;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/")
class AuthController {

    @GetMapping
    public String auth() {
        return "Helllo";
    }

}
