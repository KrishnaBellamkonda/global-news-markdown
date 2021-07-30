# global-news-markdown

### Description 
This is a self-updating news section that updates every hour.

### Set Up 
* Clone the repository
* Make a New York Times account and get a Key for top stories section. Save the section as 
 ```
 KEY = (key obtained from a NYtimes API)
 ```
*  Create a Personnal Access Token GitHub Token for allowing automatic commits and push of updated markdown. (Push and commit authorization is enough). Save this Token as 
```
TOKEN = (Personal Access Token)
```
* Done! You will have a self updating markdown in this respository!

### Curious?
Come back in a few hours and seeif the news section has changed! (Is it too long?)

### Note
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the As Covid Cases Hit Record High in Tokyo, Can the Olympic Bubble Hold?
---------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/07/29/world/asia/tokyo-olympics-covid.html)

[![](https://static01.nyt.com/images/2021/07/29/world/29olympics-covid-04/merlin_190795002_602f6479-d73d-4085-b8e3-26bda1dce4ec-superJumbo.jpg)](https://www.nytimes.com/2021/07/29/world/asia/tokyo-olympics-covid.html)

With the Games approaching their midway point, promises of a “safe and secure” event are being put to the test.

By Motoko Rich and Hikari Hida

* * *

* * *

Israeli Officials Say Iran Is Behind Deadly Attack on Oil Tanker
----------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/07/30/world/middleeast/tanker-attack-oman.html)

[![](https://static01.nyt.com/images/2021/07/30/world/30Israel-ship/merlin_192073275_eb7f04bd-5116-43a6-9091-86e3252855bf-superJumbo.jpg)](https://www.nytimes.com/2021/07/30/world/middleeast/tanker-attack-oman.html)

Drones carried out the attack on a tanker managed by an Israeli-led firm, killing two people, officials said — apparently the latest in a series of maritime clashes between Iran and Israel.

By Patrick Kingsley and Ronen Bergman

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
