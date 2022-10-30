package com.devsuperior.movieflix.dtos;

import com.devsuperior.movieflix.entities.Genre;

import java.io.Serializable;
import java.util.Objects;

public class GenreDTO implements Serializable {

    private Long id;
    private String name;

    public GenreDTO() {
    }

    public GenreDTO(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public GenreDTO(Genre entity) {
        this(entity.getId(), entity.getName());
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        GenreDTO genreDTO = (GenreDTO) o;
        return id.equals(genreDTO.id) && name.equals(genreDTO.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name);
    }
}
