class Weather{
    constructor(city) {
        this.city = city
        this.key = '9f188c8987e25d0ea648592653f715c3'
    }

    async getWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`)
        const responseData = await response.json()
        return responseData
    }

    changeCity(city){
        this.city = city
    }
}

