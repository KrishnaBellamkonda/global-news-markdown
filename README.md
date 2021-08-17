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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Malaysia’s prime minister resigns over anger about his handling of the virus.
-----------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/16/world/asia/Muhyiddin-Yassin-resigns.html)

[![](https://static01.nyt.com/images/2021/08/16/world/16virus-briefing-malaysia-prime-minister-sub/merlin_193326297_fccec237-1dcb-41e0-886c-7a75128ca64a-superJumbo.jpg)](https://www.nytimes.com/2021/08/16/world/asia/Muhyiddin-Yassin-resigns.html)

Prime Minister Muhyiddin Yassin will stay on until a successor is appointed, continuing to steer the Southeast Asian country through its worst wave of the virus yet.

By Daniel Victor

* * *

* * *

The Taliban take over the presidential palace.
----------------------------------------------

[Article here](https://www.nytimes.com/2021/08/16/world/asia/taliban-presidential-palace-afghanistan.html)

[![](https://static01.nyt.com/images/2021/08/16/world/16afghanistan-palace/16afghanistan-palace-superJumbo.jpg)](https://www.nytimes.com/2021/08/16/world/asia/taliban-presidential-palace-afghanistan.html)

After a peaceful overtaking of the palace in Kabul, the insurgents said they would use the building to announce the restoration of an Islamic emirate.

By Carlotta Gall, Daniel Victor and Ruhullah Khapalwak

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
