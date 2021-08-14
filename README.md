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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the 20 Years of Defense, Erased by the Taliban in a Few Months
----------------------------------------------------------

[Article here](https://www.nytimes.com/interactive/2021/08/14/world/asia/afghanistan-maps-taliban.html)

[![](https://static01.nyt.com/images/2021/08/14/us/afghanistan-maps-taliban-promo-1628964568896/afghanistan-maps-taliban-promo-1628964568896-superJumbo-v2.jpg)](https://www.nytimes.com/interactive/2021/08/14/world/asia/afghanistan-maps-taliban.html)

Maps show the stunning speed of Taliban advances after the United States began to withdraw.

By Scott Reinhard and David Zucchino

* * *

* * *

Latest U.K. Scandals Show a System Rife With Insider Ties
---------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/13/world/europe/uk-boris-johnson-cameron.html)

[![](https://static01.nyt.com/images/2021/08/11/world/11uk-donors1/merlin_165358419_4bf5b806-c94f-4d6c-8ed2-3754f9f14a6d-superJumbo.jpg)](https://www.nytimes.com/2021/08/13/world/europe/uk-boris-johnson-cameron.html)

For years, Britain relied on an informal code of gentlemen’s agreements to help prevent influence-peddling and cronyism in politics. Some say that no longer works.

By Stephen Castle

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
