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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Your Monday Briefing
--------------------

[Article here](https://www.nytimes.com/2021/08/30/briefing/afghanistan-ida-coronavirus.html)

[![](https://static01.nyt.com/images/2021/08/30/multimedia/30AM-Brf-Afghanistan-02-promo/merlin_193862055_c84f2cb7-754a-440a-8129-addeb775e52e-superJumbo.jpg)](https://www.nytimes.com/2021/08/30/briefing/afghanistan-ida-coronavirus.html)

A U.S. drone strike in Kabul.

By Natasha Frost

* * *

* * *

U.S. shoots down rockets aimed at Kabul’s airport.
--------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/30/world/us-rockets-kabul-airport.html)

[![](https://static01.nyt.com/images/2021/09/29/world/29afghanistan-briefing-lede-1sub/merlin_193889613_af471152-189d-4062-8ba8-a3c9b5129687-superJumbo.jpg)](https://www.nytimes.com/2021/08/30/world/us-rockets-kabul-airport.html)

The attacks came with just two days remaining before President Biden’s deadline to complete the withdrawal, capping 20 years of war in Afghanistan.

By Eric Schmitt and Dan Bilefsky

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
