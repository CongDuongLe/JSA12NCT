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

  const [forecast, setForecast] = useState([])



  const getWeatherInfo = async () => {
    const res = await axios.get(baseUrl)
    // console.log('res', res)
    const data = res.data
    const {resolvedAddress, timezone, tzoffset,description, latitude, longitude, currentConditions , days} = data  
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

    setForecast(days)


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

            {
                forecast.map((item, index) => {
                   return(
                    <div
                      className="bg-white w-[250px] rounded-xl shadow flex flex-1"
                      aria-label="card-overlay-v3"
                    >
                      <div className="w-full rounded-xl h-[250px] flex-shrink-0 flex">
                        <img
                          src="https://bit.ly/3zzCTUT"
                          alt=""
                          className="object-cover w-full h-full rounded-xl"
                        />
                      </div>
                      <div className="flex flex-col flex-1 p-5">
                        <div className="pb-5 mb-5 border-b border-gray-200">
                        <h3 className="text-base font-bold">{item.conditions}</h3>
                        <h3 className="text-base font-bold">{item.description}</h3>
                          <h3 className="mb-1 text-lg font-bold">{item.datetime}</h3>
                          <span className="text-sm">{item.temp}</span>
                        </div>
                        <div className="flex items-center justify-between w-full ml-auto">
                          <div className="text-sm text-slate-400">{item.humidity}</div>
                          <div className="flex items-center gap-x-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5 text-yellow-500"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="text-sm font-bold">{item.windspeed}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                   )
                })
            }


        </div>



    </div>
  )
}

export default Product
