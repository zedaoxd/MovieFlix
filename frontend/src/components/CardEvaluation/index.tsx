import "./styles.css";
import BaseButtom from "../BaseButtom";
import { useForm } from "react-hook-form";
import { requestBackend } from "../../utils/requests";
import { Review } from "../../types/review";
import { toast } from "react-toastify";

type FormData = {
  text: string;
};

type Props = {
  movieId: number;
  onInsert: (review: Review) => void;
};

export const CardEvaluation = ({ movieId, onInsert }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    requestBackend({
      url: "/reviews",
      withCredentials: true,
      data: { ...formData, movieId },
      method: "POST",
    })
      .then((response) => {
        onInsert(response.data);
        setValue("text", "");
        toast.success("Avaliação salva com sucesso");
      })
      .catch(() =>
        toast.error("Não é possivel salvar uma avaliação em branco")
      );
  };

  return (
    <div className="md-container-evaluation">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("text")}
          type="text"
          className="form-control"
          placeholder="Escreva sua avaliação aqui"
          name="text"
        />
        <div className="invalid-feedback d-block">{errors.text?.message}</div>
        <div className="md-btn-save-evaluation">
          <BaseButtom text="salvar avaliação" />
        </div>
      </form>
    </div>
  );
};
