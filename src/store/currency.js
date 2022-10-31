import Currency from "~/classes/Currency";

export const state = () => ({
  currencies: null,
  date: null
})

export const getters = {
  getCurrency(state) {
    return state.currencies
  },
  getDate(state) {
    return state.date
  }
}

export const mutations = {
  setDate(state, date) {
    state.date = date
  },
  setCurrencies(state, currencies) {
    state.currencies = Object.keys(currencies).map(charCode => new Currency(currencies[charCode]))
  }
}

export const actions = {
  async fetchCurrency({ commit }) {
    const res = await this.$axios.get("https://www.cbr-xml-daily.ru/daily_json.js")
    if (res.status === 200) {
      commit("setDate", new Date(res.data["Date"]))
      commit("setCurrencies", res.data["Valute"])
    }
    /*
      А тут можно было бы обработать ошибки, вывести ошибку загрузки например
     */
  }
}
