import React, { useState, useEffect } from 'react'
import axios from 'axios'

const baseUrl =
  'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/ha%20noi?unitGroup=metric&key=484DCQEQR8WZWTPM9GJLH7BH6&contentType=json'

function Product() {
  //state product include all product item
  const [weatherInfo, setWeatherInfo] = useState({
    resolvedAddress: 'Ha noi',
    timezone: 'Asia/Ho_Chi_Minh',
    latitude: 21.0278,
    longitude: 105.8342,
    description: 'Clear',
    tzoffset : 7
  })

  const [currentConditions, setCurrentConditions] = useState({
    windspeed: 15,
    humidity: 70,
    temp: 30,
    sunrise: '05:00:00',
    sunset: '18:14:20',
    feelslike: 40,
    datetime: '14:00:00',
  })



  const getWeatherInfo = async () => {
    const res = await axios.get(baseUrl)
    // console.log('res', res)
    const data = res.data
    const {resolvedAddress, timezone, tzoffset,description, latitude, longitude, currentConditions} = data  
    setWeatherInfo({
        ... weatherInfo,
        resolvedAddress : resolvedAddress,
        timezone : timezone,
        tzoffset : tzoffset,
        description : description,
        latitude : latitude,
        longitude : longitude
    })

    // console.log('currentConditions', currentConditions)
    const {
        feelslike,
        datetime,
        sunrise,
        sunset,
        temp,
        windspeed,
        humidity

    } = currentConditions

    setCurrentConditions({
        ... currentConditions,
        feelslike : feelslike,
        datetime : datetime,
        sunrise : sunrise,
        sunset : sunset,
        temp : temp,
        windspeed : windspeed,
        humidity : humidity
    })


  }

    useEffect(() => {
    getWeatherInfo()
    }, [])




  return (
    <div name="product" className="w-full h-screen bg-[#0a192f] flex flex-1 justify-center items-center">
      {/* category section */}
      {/* <div className="
         w-1/4 h-full items-center flex flex-col justify-center
       ">
            <h2 className='text-white text-xl'>
                    test
            </h2>             

       </div>

        <div className="
            w-3/4 h-full items-center flex flex-col justify-center
        ">
           

        </div> */}


        <div aria-label="card-overlay" className="relative w-[450px] h-[550px]">
          <img
            src="https://haiquanonline.com.vn/stores/news_dataimages/anhntp/072020/23/17/in_article/4219_12-_hn_st.jpg?rt=20200724092032"
            alt=""
            className="object-cover w-full h-full rounded-lg"
          />
          <div className="absolute flex flex-col p-2 bg-white rounded bottom-5 left-5 right-5 gap-y-1">
            <h3 className="text-base font-bold">Vị trí : {weatherInfo.resolvedAddress}</h3>
            <h3 className="text-base font-bold">Time-zone : {weatherInfo.timezone}</h3>
            <h3 className="text-base font-bold">Múi giờ : {weatherInfo.tzoffset}</h3>
            <span className="text-sm text-gray-400">Kinh độ : {weatherInfo.longitude}</span>
            <span className="text-sm text-gray-400">Vĩ độ : {weatherInfo.latitude}</span>
            <span className="text-sm text-gray-400">Thông tin : {weatherInfo.description}</span>
            <h3 className="text-base font-bold text-black">Nhiệt độ hiện tại : {currentConditions.temp} Celcius</h3>
            <h3 className="text-base font-bold text-black">Cảm nhận : {currentConditions.feelslike} Celcius</h3>
            <h3 className="text-base font-bold text-black">Tốc độ gió : {currentConditions.windspeed} m/s</h3>
            <h3 className="text-base font-bold text-black">Độ ẩm : {currentConditions.humidity}</h3>
            <span className="text-sm text-gray-400">Thời gian cập nhật : {currentConditions.datetime}</span>
            <span className="text-sm text-gray-400">Mặt trời mọc : {currentConditions.sunrise}</span>
            <span className="text-sm text-gray-400">Mặt trời lặn : {currentConditions.sunset}</span>




          </div>
        </div>



    </div>
  )
}

export default Product
