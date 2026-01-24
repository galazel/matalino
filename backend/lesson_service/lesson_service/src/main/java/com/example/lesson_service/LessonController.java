package com.example.lesson_service;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/")
class LessonController {

    @GetMapping
    public String index() {
        return "Hello World";
    }
}
