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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Haiti Quake Destroyed Many Churches, Shredding a Mainstay of Support
--------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/16/world/americas/haiti-earthquake-aid-grace.html)

[![](https://static01.nyt.com/images/2021/08/16/world/16HAITI-LEDE/16HAITI-LEDE-superJumbo.jpg)](https://www.nytimes.com/2021/08/16/world/americas/haiti-earthquake-aid-grace.html)

“We are the only thing here,” said a cleric in Les Cayes, one of the cities worst hit by the quake. In some towns, not a church was left standing.

By Maria Abi-Habib and Andre Paultre

* * *

* * *

What a U.K. Staycation Looks Like in a Pandemic
-----------------------------------------------

[Article here](https://www.nytimes.com/2021/08/16/business/coronavirus-uk-summer-holiday.html)

[![](https://static01.nyt.com/images/2021/08/11/business/00UK-HOLIDAY-STAFFSHORTAGES-1/00UK-HOLIDAY-STAFFSHORTAGES-1-superJumbo.jpg)](https://www.nytimes.com/2021/08/16/business/coronavirus-uk-summer-holiday.html)

The classic summer holiday to Europe has been replaced by a trip to the shores of England, where business is good but owners struggle with worker shortages and Covid restrictions.

By Eshe Nelson and Alex Ingram

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
