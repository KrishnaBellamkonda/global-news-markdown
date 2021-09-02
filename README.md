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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Short on Money, Legal and Otherwise, the Taliban Face a Crisis
--------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/09/02/business/economy/afghanistan-taliban-financial-crisis.html)

[![](https://static01.nyt.com/images/2021/09/01/business/00afghan-cash-sub/merlin_193817640_305e7e5d-2fff-4873-99cc-d3b171606c77-superJumbo.jpg)](https://www.nytimes.com/2021/09/02/business/economy/afghanistan-taliban-financial-crisis.html)

The group has long tapped underground banks and opium to fund Afghanistan’s insurgency. Fixing the nation’s problems will require a lot more than that.

By Alexandra Stevenson

* * *

* * *

When Will the Delta Surge End?
------------------------------

[Article here](https://www.nytimes.com/2021/09/01/health/covid-delta-us-britain.html)

[![](https://static01.nyt.com/images/2021/08/27/science/00virus-delta1/merlin_193525995_1d72a167-7f78-49f7-952e-1ce3e06f495f-superJumbo.jpg)](https://www.nytimes.com/2021/09/01/health/covid-delta-us-britain.html)

The variant retreated unexpectedly in Britain and India, but has begun to rebound. The United States may take an even bumpier path, scientists said.

By Apoorva Mandavilli, Benjamin Mueller and Shalini Venugopal Bhagat

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
