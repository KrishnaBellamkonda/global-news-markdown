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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the A study confirms a small risk of blood clots after vaccines, but not as high as the risk Covid brings.
------------------------------------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/27/health/blood-clots-coronavirus.html)

[![](https://static01.nyt.com/images/2021/08/27/lens/27virus-briefing-blood-clots-01/merlin_193326705_c8a12ee7-574c-4b03-8701-0b46e15eefc7-superJumbo.jpg)](https://www.nytimes.com/2021/08/27/health/blood-clots-coronavirus.html)

The study adds to the growing evidence that though the coronavirus vaccines are associated with certain rare side effects, those risks are dwarfed by the risks from Covid-19.

By Benjamin Mueller

* * *

* * *

The Latest From Afghanistan
---------------------------

[Article here](https://www.nytimes.com/2021/08/27/briefing/afghanistan-attack.html)

[![](https://static01.nyt.com/images/2021/08/27/multimedia/27AMBriefing-Kabul-02-promo/27AMBriefing-Kabul-02-superJumbo-v2.jpg)](https://www.nytimes.com/2021/08/27/briefing/afghanistan-attack.html)

We’ll start with the bombing in Kabul — and then look at the air-quality crisis in the Western U.S.

By David Leonhardt

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
