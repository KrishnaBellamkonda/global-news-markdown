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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Your Friday Briefing
--------------------

[Article here](https://www.nytimes.com/2021/08/05/briefing/iran-president-greek-fires-olympics.html)

[![](https://static01.nyt.com/images/2021/08/05/world/06am-briefing-iran/merlin_192793317_bd18e4f6-cea1-4912-8e61-89e17f72ef51-superJumbo.jpg)](https://www.nytimes.com/2021/08/05/briefing/iran-president-greek-fires-olympics.html)

Iran inaugurates a new president.

By Whet Moser

* * *

* * *

China says it will provide 2 billion vaccine doses to the world.
----------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/06/world/china-vaccine-donations-2-billion.html)

[![](https://static01.nyt.com/images/2021/08/06/world/06virus-briefing-china-donate/merlin_191663148_753aa699-6aee-4cb2-b65f-85402ff2b7a5-superJumbo.jpg)](https://www.nytimes.com/2021/08/06/world/china-vaccine-donations-2-billion.html)

The pledge, which included a $100 million donation to Covax, intensifies competition with the U.S. over leadership in ending the pandemic.

By Sui-Lee Wee

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
