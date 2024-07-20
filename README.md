# [React Weather App](https://tzuhuangyen.github.io/React_openWeather_API/)

## 專案簡介

這是一個簡單的 React 應用程序，用於顯示天氣資訊。應用程式使用 OpenWeather API 來獲取天氣數據，並使用 Unsplash API 來設定背景圖片。使用者可以透過輸入城市名稱來獲取天氣數據，並根據使用者的地理位置自動顯示本地天氣資訊。

This is a simple React application that displays weather information. The app uses the OpenWeather API to fetch weather data and the Unsplash API to set a background image. Users can enter a city name to get weather details, and the app can automatically show the local weather based on the user's geolocation.

## 功能 Features

- 顯示目前天氣，包括溫度、天氣描述、濕度等
- 自動根據使用者地理位置顯示天氣
- 使用 Unsplash API 設定背景圖片
- 支援切換不同的城市來查看天氣

Displays current weather, including temperature, weather description, and humidity.
Automatically shows the local weather based on the user's geolocation.
Uses the Unsplash API to set a background image.
Allows users to search for weather information in different cities.

## 安裝步驟

1. 複製項目 Clone the Repository

`git clone https://github.com/tzuhuangyen/React-openWeather-API.git
cd react-weather-app`

2. 安裝套件 Install Dependencies

確保你已經安裝了 Node.js 和 npm 或 Yarn（可選）。然後執行以下命令安裝專案依賴：

`npm install` 或者 `yarn install`

3. 設定環境變數 Set Up Environment Variables
   在專案根目錄中建立一個 .env 文件，並新增以下內容：

```VITE_OPENWEATHER_API_KEY=your_openweather_api_key
VITE_UNSPLASH_API_KEY=your_unsplash_api_key
```

取代 your_openweather_api_key 和 your_unsplash_api_key 為你從 OpenWeather 和 Unsplash 取得的實際 API 金鑰。

4. 啟動開發伺服器 Start the Development Server
   執行以下命令啟動開發伺服器：

`npm run dev`或者`yarn dev` 然後，打開瀏覽器並訪問 http://localhost:5173 以查看應用程式。

## 使用說明 Usage Instructions

1. 輸入城市名稱 Enter a City Name

在輸入框中輸入城市名稱，然後點擊 "Search" 按鈕或按 Enter 鍵進行搜尋。
Type a city name in the input field and click the "Search" button or press Enter to search.

2. 查看天氣資訊 View Weather Information

搜尋結果會顯示城市的天氣訊息，包括溫度、天氣圖示、天氣描述、最大和最小溫度、濕度以及當地時間。
The search results will display the city's weather information, including temperature, weather icon, weather description, maximum and minimum temperatures, humidity, and local time.

3. 自動取得本地天氣 Automatic Local Weather

當你首次開啟應用程式時，它會嘗試取得你的地理位置，並自動顯示你所在位置的天氣資訊。
When you first open the application, it will attempt to get your geolocation and automatically display the weather for your current location.

4. 背景圖片 Background Image

根據你搜尋的城市，背景圖片會自動更新。如果沒有找到相關的背景圖片，則會顯示一個預設的背景圖片。
The background image will automatically update based on the searched city. If no relevant background image is found, a default background image will be displayed.

## 程式碼結構 Code Structure

- src/Weather.jsx：主要的 React 元件，用於展示天氣資訊和處理使用者輸入。The main React component displays weather information and handles user input.
- src/App.jsx：應用程式的入口檔案。The entry point of the application.
- src/main.jsx：應用程式的啟動檔。The startup file for the application.
- src/style.css：應用程式的樣式檔案。The stylesheet for the application.

## 常見問題

- API 金鑰無效：確保你在 .env 檔案中正確配置了 API 金鑰，並且沒有多餘的空格或引號。
- 瀏覽器不支援 Geolocation API：請使用現代瀏覽器，如 Google Chrome、Firefox 或 Edge。
- Invalid API Key: Ensure you have correctly configured the API keys in the .env file without extra spaces or quotes.
- Browser Does Not Support Geolocation API: Use a modern browser like Google Chrome, Firefox, or Edge.

## 許可證

該專案使用 MIT 許可證。有關詳細信息，請參閱 LICENSE 文件。This project is licensed under the MIT License. See the LICENSE file for details.
