import { title } from "process";
import * as yup from "yup";

export const recipeSchema = yup.object().shape({
    title: yup.string().required("O titulo é obrigatório"),
    category: yup.string().required("O categoria é obrigatório"),
    description: yup.string().required("A descrição é obrigatória"),
    imageURL: yup.string().url().required("A URL da imagem é obrigatória"),
    prepTime: yup.string().required("O tempo de preparo é obrigatório"),
    cookTime: yup.string().required("O tempo de cozimento é obrigatório"),
    servings: yup
        .number()
        .typeError("Porções deve ser um número")
        .positive("Porções deve ser um número positivo")
        .integer("Porções deve ser um número inteiro")
        .min(1, "Porções deve ser pelo menos 1")
        .required("O número de porções é obrigatório"),
    ingredients: yup
        .array()
        .of(
            yup.object({
                value: yup.string().required("O ingrediente não pode ser vazio")
            })
        )
        .min(1, "Adicione pelo menos 1 ingrediente")
        .required("Os ingredientes são obrigatórios"),
    instructions: yup
        .array()
        .of(
            yup.object({
                value: yup.string().required("A instrução não pode ser vazia")
            })
        )
        .min(1, "Adicione pelo menos 1 instrução")
        .required("As instruções são obrigatórias"),
})

export type RecipeFormData = yup.InferType<typeof recipeSchema>;