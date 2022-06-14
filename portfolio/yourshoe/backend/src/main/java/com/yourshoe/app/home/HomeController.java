package com.yourshoe.app.home;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

	@CrossOrigin
    @GetMapping("/")
    public ResponseEntity<?> home(){
    	
        return new ResponseEntity<>("홈으루", HttpStatus.OK);
    }
    
	@GetMapping("/test")
    public ResponseEntity<?> postmanTest(){
    	
        return new ResponseEntity<>("리액트의 접근!", HttpStatus.OK);
    }
}
