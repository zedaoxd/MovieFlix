import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Genre } from "../../../types/genre";
import { requestBackend } from "../../../utils/requests";
import Select from "react-select";
import "./styles.css";

export type MovieFilterData = {
  genre: Genre;
};

type Props = {
  onSubmitFilter: (data: MovieFilterData) => void;
};

export const Navbar = ({ onSubmitFilter }: Props) => {
  const { handleSubmit, setValue, control } = useForm<MovieFilterData>();
  const [genres, setGenre] = useState<Genre[]>([]);

  useEffect(() => {
    requestBackend({ url: "/genres", withCredentials: true })
      .then((response) => {
        setGenre(response.data);
      })
      .catch((e) => console.log("error", e));
  }, []);

  const handleOnChangeGenre = (genre: Genre) => {
    setValue("genre", genre);
    const obj: MovieFilterData = {
      genre: genre,
    };
    onSubmitFilter(obj);
  };

  const onSubmit = (formData: MovieFilterData) => {
    onSubmitFilter(formData);
  };

  return (
    <div className="nv-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="nv-select-container">
          <Controller
            control={control}
            name="genre"
            render={({ field }) => (
              <Select
                {...field}
                options={genres}
                isClearable
                onChange={(value) => handleOnChangeGenre(value as Genre)}
                classNamePrefix="nv-select-genre"
                getOptionLabel={(genre: Genre) => genre.name}
                getOptionValue={(genre: Genre) => genre.id.toString()}
                placeholder="Categoria"
              />
            )}
          />
        </div>
      </form>
    </div>
  );
};
