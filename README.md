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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Tony Blair, who led the U.K. into Afghanistan, criticizes the pullout.
----------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/22/world/tony-blair-afghanistan-pullout.html)

[![](https://static01.nyt.com/images/2021/08/22/world/22afghanistanbriefing-tony-blair/merlin_15962709_4ea881df-c327-4bc9-a11d-3ff741bcd066-superJumbo.jpg)](https://www.nytimes.com/2021/08/22/world/tony-blair-afghanistan-pullout.html)

The former prime minister of Britain called the withdrawal ‘an imbecilic political slogan about ending ‘the forever wars.’

By Austin Ramzy

* * *

* * *

The Struggle to Save a House of Music, and Its Legacy
-----------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/21/world/africa/morocco-dar-gnawa.html)

[![](https://static01.nyt.com/images/2021/08/11/world/00Morocco-Music01/merlin_192780219_066f822d-cce3-40e1-b66c-2f082e4493e1-superJumbo.jpg)](https://www.nytimes.com/2021/08/21/world/africa/morocco-dar-gnawa.html)

For decades, the Tangier home of Abdellah El Gourd has been a wellspring of the Gnawa musical tradition and a place of pilgrimage for jazz performers. But it has fallen into deep disrepair.

By Aida Alami

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
