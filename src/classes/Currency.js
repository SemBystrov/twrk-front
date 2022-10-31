/*
    Тут спорный момент в создании класса, согласен, но решил попробовать
    Если что, я бы просто оценил, как в команде обрабатываются получаемые объекты,
    делал бы также...
 */

class Currency {
    constructor(data) {
        this.id = data["ID"]
        this.numCode = data["NumCode"]
        this.charCode = data["CharCode"]
        this.nominal = data["Nominal"]
        this.name = data["Name"]
        this.value = data["Value"]
        this.previous = data["Previous"]
    }
    toJSON () {
        return { ...this }
    }
}



export default Currency
