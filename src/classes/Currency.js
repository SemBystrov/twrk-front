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
}

export default Currency
