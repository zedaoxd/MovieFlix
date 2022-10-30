package com.devsuperior.movieflix.resources;

import com.devsuperior.movieflix.dtos.UserDTO;
import com.devsuperior.movieflix.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "users")
public class UserResource {

    @Autowired
    private UserService service;

    @GetMapping(value = "/profile")
    public ResponseEntity<UserDTO> getCurrentUser() {
        UserDTO dto = service.getCurrentUser();
        return ResponseEntity.ok(dto);
    }
}
