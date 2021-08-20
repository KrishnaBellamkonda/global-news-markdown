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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the The U.S. wants a U.N. meeting scaled back to avoid a ‘superspreader event.’
---------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/19/world/un-event-superspreader.html)

[![](https://static01.nyt.com/images/2021/08/19/world/19virus-briefing-unga/merlin_177598353_e0da35bc-0637-40de-8e5c-393410f49d40-superJumbo.jpg)](https://www.nytimes.com/2021/08/19/world/un-event-superspreader.html)

The annual General Assembly meeting would ordinarily attract scores of heads of state and other top officials to New York. But American officials say it should be mainly virtual again this year for safety’s sake.

By Rick Gladstone

* * *

* * *

In Photos: Afghanistan Under the Taliban
----------------------------------------

[Article here](https://www.nytimes.com/2021/08/19/world/asia/Afghanistan-taliban-photos.html)

[![](https://static01.nyt.com/images/2021/08/19/world/00afghanistan-photos-1-promo/00afghanistan-photos-1-promo-superJumbo-v2.jpg)](https://www.nytimes.com/2021/08/19/world/asia/Afghanistan-taliban-photos.html)

As the U.S. was winding down its time in the country, the Taliban swiftly retook power, reviving fears of a brutal and violent reign.

By The New York Times

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
