import { fireEvent, render, screen } from "@testing-library/react";
import { FeedbackForm } from "./FeedBackForm";

describe("Feedback Form", () => {
  test("User is able to submit the form if the score is lower than 5 and additional feedback is provided", () => {
    const score = "3";
    const comment = "The pizza crust was too thick";
    const handleSubmit = jest.fn();

    render(<FeedbackForm onSubmit={handleSubmit} />);

    // Simular selección de puntuación
    const scoreInput = screen.getByLabelText(/score/i);
    fireEvent.change(scoreInput, { target: { value: score } });

    // Simular ingreso de comentario
    const commentInput = screen.getByLabelText(/comments:/i);
    fireEvent.change(commentInput, { target: { value: comment } });

    // Simular envío del formulario
    const submitButton = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(submitButton);

    // Verificar que el handleSubmit fue llamado con los datos correctos
    expect(handleSubmit).toHaveBeenCalledWith({
      score,
      comment,
    });
  });

  test("User is able to submit the form if the score is higher than 5, without additional feedback", () => {
    const score = "9";
    const handleSubmit = jest.fn();

    render(<FeedbackForm onSubmit={handleSubmit} />);

    // Simular selección de puntuación
    const scoreInput = screen.getByLabelText(/score/i);
    fireEvent.change(scoreInput, { target: { value: score } });

    // Simular que no se ingresa comentario adicional
    const commentInput = screen.getByLabelText(/comments:/i);
    fireEvent.change(commentInput, { target: { value: "" } });

    // Simular envío del formulario
    const submitButton = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(submitButton);

    // Verificar que el handleSubmit fue llamado con los datos correctos
    expect(handleSubmit).toHaveBeenCalledWith({
      score,
      comment: "",
    });
  });
});
