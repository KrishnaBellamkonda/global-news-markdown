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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the The World’s Last Samaritans, Straddling the Israeli-Palestinian Divide
----------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/22/world/middleeast/samaritans-israeli-palestinian.html)

[![](https://static01.nyt.com/images/2021/08/20/world/00Samaritans-Dispatch1/merlin_187062468_adb496cf-28f4-4a8d-8214-4f7960fae35c-superJumbo.jpg)](https://www.nytimes.com/2021/08/22/world/middleeast/samaritans-israeli-palestinian.html)

Up a mountain in the West Bank, several hundred villagers practice an ancient Israelite religion while maintaining an ambiguous national identity.

By Patrick Kingsley and Gabby Sobelman

* * *

* * *

They Were Protectors in Afghanistan. Now They Need Help.
--------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/23/world/asia/nepal-afghanistan-gurkha.html)

[![](https://static01.nyt.com/images/2021/08/23/world/00nepal-afghanistan-1/merlin_160127988_f0acefeb-9ae7-4b6c-9d83-b43a0f7026b4-superJumbo.jpg)](https://www.nytimes.com/2021/08/23/world/asia/nepal-afghanistan-gurkha.html)

Former soldiers from Nepal have long served as private security guards in war-torn Afghanistan. Amid the chaos, they worry that they can’t get home.

By Bhadra Sharma

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
