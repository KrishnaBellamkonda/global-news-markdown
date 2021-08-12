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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Your Daily Coffee Habit Is About to Get More Expensive
------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/12/business/coffee-prices-higher.html)

[![](https://static01.nyt.com/images/2021/08/10/business/00CoffeePrices-01/merlin_193101318_b5c45469-accc-4523-b77f-5d96f6708103-superJumbo.jpg)](https://www.nytimes.com/2021/08/12/business/coffee-prices-higher.html)

Climate shocks in Brazil and shipping bottlenecks have pushed the price of coffee beans sharply higher. Starbucks says it won’t be affected for more than a year, but small cafes can’t hold off that long.

By Coral Murphy Marcos

* * *

* * *

The University of Texas at San Antonio opts to start fall classes remotely.
---------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/12/world/university-of-texas-san-antonio-delta-remote.html)

[![](https://static01.nyt.com/images/2021/08/12/world/12virus-briefing-university-of-texas-2/merlin_177619578_b20a48a2-41dd-4eed-a1cc-879f02f979cd-superJumbo.jpg)](https://www.nytimes.com/2021/08/12/world/university-of-texas-san-antonio-delta-remote.html)

University leaders are hamstrung by Gov. Greg Abbott’s that bars schools, among many other entities, from requiring vaccines or masks.

By Stephanie Saul

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
