/*
  Обычно я использую Composition Api, но можно реализовать и миксины, почему бы и нет?
  Опять же в реальной практике, я бы смотрел на то, какой стиль используется в команде...
 */
export const TIInputLabelMixin = {
    props: {
        label: String,
        id: String
    }
}
