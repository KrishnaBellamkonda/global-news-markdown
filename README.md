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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Behind the Haiti Assassination, Colombia’s Growing Mercenary Industry
---------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/07/world/americas/haiti-assassination-colombia-mercenaries.html)

[![](https://static01.nyt.com/images/2021/08/07/world/07colombia-mercenaries-HP/07colombia-mercenaries-HP-superJumbo-v3.jpg)](https://www.nytimes.com/2021/08/07/world/americas/haiti-assassination-colombia-mercenaries.html)

Exporting soldiers has become a vast industry in Colombia, fueled by the country’s long U.S.-backed war, limited opportunity at home and growing demand abroad.

By Julie Turkewitz and Anatoly Kurmanaev

* * *

* * *

Taliban Take Second Afghan City in Two Days
-------------------------------------------

[Article here](https://www.nytimes.com/2021/08/07/world/asia/taliban-afghanistan.html)

[![](https://static01.nyt.com/images/2021/08/07/world/07afghanistan1/merlin_187641231_07b18785-0ebe-4601-b867-c2dd143b5dc4-superJumbo.jpg)](https://www.nytimes.com/2021/08/07/world/asia/taliban-afghanistan.html)

Sheberghan, in Jowzjan Province, collapsed less than 24 hours after a provincial capital in southwestern Afghanistan had fallen to the Taliban.

By Thomas Gibbons-Neff, Fahim Abed and Sharif Hassan

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
