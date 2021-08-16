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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the In an Overrun Kabul, Many Have No Place to Run
----------------------------------------------

[Article here](https://www.nytimes.com/2021/08/15/world/asia/kabul-afghanistan.html)

[![](https://static01.nyt.com/images/2021/08/15/world/15kabul-scene1/15kabul-scene1-superJumbo-v3.jpg)](https://www.nytimes.com/2021/08/15/world/asia/kabul-afghanistan.html)

Afghanistan’s capital fell to the Taliban far faster than many had imagined it would, leaving most Afghans with no way out.

By Carlotta Gall, Christina Goldbaum, Thomas Gibbons-Neff and Ruhullah Khapalwak

* * *

* * *

Evacuation from Kabul falters as chaos at airport reigns.
---------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/15/world/asia/us-evacuation-kabul.html)

[![](https://static01.nyt.com/images/2021/08/15/world/15afghanistan-briefing-US-evacuation/merlin_193303338_ee7c86d1-efb7-40e8-bb8c-bbf87a1f833a-superJumbo.jpg)](https://www.nytimes.com/2021/08/15/world/asia/us-evacuation-kabul.html)

The U.S. embassy warned citizens to not head to the airport after reports of gunfire and said the situation is “changing quickly.”

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
