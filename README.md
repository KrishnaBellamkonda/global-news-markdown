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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Greek Island Is New Epicenter of Europe’s Summer of Calamity
------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/11/world/europe/greece-wildfires-evia-climate-change-europe.html)

[![](https://static01.nyt.com/images/2021/08/11/world/11greece-fires-promo/merlin_193154997_2b36b717-cf80-4e1c-bf4f-c71a275ff1c9-superJumbo.jpg)](https://www.nytimes.com/2021/08/11/world/europe/greece-wildfires-evia-climate-change-europe.html)

Evia was ravaged by wildfires this week, adding to the list of places that have fallen victim to extreme weather events made worse by climate change and scorching temperatures.

By Jason Horowitz

* * *

* * *

Russia Brings a New Criminal Charge Against Navalny
---------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/11/world/europe/navalny-russia-criminal-charges.html)

[![](https://static01.nyt.com/images/2021/08/11/world/11russia-navalny01/11russia-navalny01-superJumbo.jpg)](https://www.nytimes.com/2021/08/11/world/europe/navalny-russia-criminal-charges.html)

The jailed opposition leader faces three additional years in prison — enough to keep him locked away until after the presidential election in 2024.

By Anton Troianovski

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
