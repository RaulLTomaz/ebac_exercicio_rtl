import { fireEvent, render, screen } from '@testing-library/react'
import PostComment from '..'


describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>)
        expect(screen.getByText('Comentar')).toBeInTheDocument()
    })

    test("deve renderizar 2 comentarios", () => {
        render(<PostComment/>)
        const campo = screen.getByTestId("campo-comentario")
        const botaoComentar = screen.getByTestId("btn-comentar")
        fireEvent.change(campo, {target: {value: "Comentario 1"}})
        fireEvent.click(botaoComentar)
        expect(screen.getByText("Comentario 1")).toBeInTheDocument()
        fireEvent.change(campo, {target: {value: "Comentario 2"}})
        fireEvent.click(botaoComentar)
        expect(screen.getByText("Comentario 2")).toBeInTheDocument()
        expect(screen.getAllByTestId("comentario")).toHaveLength(2)
    })
})