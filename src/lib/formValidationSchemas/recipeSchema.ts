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
})

export type RecipeFormData = yup.InferType<typeof recipeSchema>;