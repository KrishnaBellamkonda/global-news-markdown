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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Afghans storm Kabul’s airport in a desperate bid to escape.
-----------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/16/world/asia/kabul-airport-taliban-afghanistan.html)

[![](https://static01.nyt.com/images/2021/08/16/us/politics/16afghan-briefing-scene-sub/merlin_193332960_6ef836b3-e6e4-4e88-9464-0792d18b0e61-superJumbo.jpg)](https://www.nytimes.com/2021/08/16/world/asia/kabul-airport-taliban-afghanistan.html)

The U.S. military took charge of security over part of the airport’s civilian side as thousands rushed the tarmac. Some hung from jets even as they taxied down the runway.

By Austin Ramzy, Carlotta Gall and Marc Santora

* * *

* * *

Kabul’s Sudden Fall to Taliban Ends U.S. Era in Afghanistan
-----------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/15/world/asia/afghanistan-taliban-kabul-surrender.html)

[![](https://static01.nyt.com/images/2021/08/15/world/15afghanistan-promo/merlin_193304262_e05f3b6d-2960-4f33-81b9-8d5a99ab234d-superJumbo.jpg)](https://www.nytimes.com/2021/08/15/world/asia/afghanistan-taliban-kabul-surrender.html)

A takeover of the entire country was all but absolute as the Afghan government collapsed and the U.S. rushed through a frenzied evacuation.

By David Zucchino, Jim Huylebroek and Kiana Hayeri

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
