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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the All in or All Out? Biden Saw No Middle Ground in Afghanistan.
-------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/28/us/politics/trump-taliban-biden-afghanistan.html)

[![](https://static01.nyt.com/images/2021/08/28/us/28dc-trump-biden/28dc-trump-biden-superJumbo-v2.jpg)](https://www.nytimes.com/2021/08/28/us/politics/trump-taliban-biden-afghanistan.html)

President Biden’s reductionist formula has prompted a debate over whether the mayhem in Kabul was inevitable or the result of a failure to consider other options.

By Peter Baker

* * *

* * *

Houses of worship struggle with fear of Delta’s rise within their congregations.
--------------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/29/world/houses-of-worship-struggle-with-fear-of-deltas-rise-within-their-congregations.html)

[![](https://static01.nyt.com/images/2021/08/27/us/27virus-brief-churches-covid/merlin_193475325_b26cda1a-a89c-41f3-9d9e-03e0d637a5bc-superJumbo.jpg)](https://www.nytimes.com/2021/08/29/world/houses-of-worship-struggle-with-fear-of-deltas-rise-within-their-congregations.html)

The variant’s spread came just as churches began welcoming back faithful.

By Liam Stack

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
