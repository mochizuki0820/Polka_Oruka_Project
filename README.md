# Polka_Oruka_Project  
ユーザーの位置情報(緯度、経度)を取得し、天気情報APIのOpenWeatherMap(https://openweathermap.org/) から  
現在の気圧と6時間後の気圧を取得、評価してポルカがおるかどうか判定するアプリケーションです。  
(配信の予測などが出来るようなものではありません。ジョークアプリの類であることをご理解いただけているとありがたいです)  
  
# 出力パターン  
ポルカおる場合に3パターン、おらん場合に2パターン実装しました。  
判定条件は 
6時間での気圧変動が3hPaより大きくかつ約10%かつプレイ回数が3回以上⇒おらん(???)  
3hPaより大きい⇒おらん(低気圧敗北部の歌)  
3hPa以下でかつ現在の気圧が1013hPa以上かつ約10%⇒おるよ(ぽ)  
3hPa以下でかつ現在の気圧が1013hPa以上⇒おるよ(Pastel Tea Time)  
3hPa以下⇒おるよ(HOLOGRAM CIRCUS)  
です。

プレイ回数の評価はsessionStrageにcount変数を用意して  
index.htmlのポルカおるか？ボタンを押した回数をインクリメントさせて評価しています。  
polka.htmlにアクセスしてもらうと全出力パターンにリンクできるページに移動できます。
  
# 感謝  
私はコンピュータサイエンスを学習し始めて日が浅いです。それでもこのようなアプリを創ろうと思えたのは一重に尾丸ポルカ氏の影響でしょう。周囲の人間のクリエイティビティを促進する尾丸ポルカ氏の能力は唯一無二だと思います。完璧ではない何かでもとりあえず創って公開してみようという気持ちが湧いてくるのです。このアプリを創っている最中とても楽しかったです。これからも尾丸ポルカと共に歩んでいける人生を最大限に楽しみたいと思いつつ結びとさせていただきます。プロジェクトに目を通していただきありがとうございました。
  
  
## 【English】  
# Polka_Oruka_Project 
This application obtains the user's location information (latitude and longitude) and gets the current and six-hour air pressure from the weather API OpenWeatherMap(https://openweathermap.org/), evaluates them, and judges whether Polka Oruka.  
(It's not something that can predict streaming or anything like that. I would appreciate it if you understand that this is a joke app of sorts.)   
  
# Outputs pattern  
Three patterns have been implemented when Polka is present (Polka-Oruyo),   
and two patterns have been implemented when Polka is not present (Polka-Oran).  
The judgment conditions are  
If the pressure change in 6 hours is greater than 3 hPa, about 10%, and play times is more than 3 times => Polka-Oran (???)  
Greater than 3 hPa => Polka-Oran (low air pressure loser club song)  
Less than or equal to 3 hPa, current pressure greater than or equal to 1013 hPa, and about 10% => Polka-Oruyo (Po)  
Less than or equal to 3 hPa and current pressure is 1013 hPa or higher => Polka-Oruyo (Pastel Tea Time)  
3 hPa or less ⇒ Polka-Oruyo (HOLOGRAM CIRCUS)  
  
To evaluate the number of times you have played, set up a count variable in sessionStrage.  
The number of times you press the Polka-Oruka? button in index.html is incremented for evaluation.  
If you access polka.html, you will access to a page where you can link to all the output patterns.  
  
# Thanks  
I have only been studying computer science for a short time. Even so, I was inspired to create such an app by Polka . I believe that Polka's ability to promote the creativity of the people around her is unique. I feel that she has given me the courage to create and publish something, even if it is not perfect. I had a lot of fun while making this app. I conclude by saying that I would like to enjoy my life with Polka as much as possible. Thank you very much for taking the time to read through this project.
  

# References    
【JavaScript、Java】OpenWeatherMapを使って天気を取得、表示するサンプル(https://hiyo-code.com/openweathermap-api/)  
  
JavaScriptで位置情報を取得する方法(Geolocation API)(https://syncer.jp/how-to-use-geolocation-api)  
