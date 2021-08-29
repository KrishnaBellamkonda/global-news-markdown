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

Palestinians Finally Have Vaccines. But Will People Take Them?
--------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/29/world/middleeast/palestinians-covid-vaccines-hesitancy.html)

[![](https://static01.nyt.com/images/2021/08/29/world/29palestinians-vaccine6/merlin_193745322_f2df0b4f-b2fe-43b2-b5c2-e0d9ac7acb90-superJumbo.jpg)](https://www.nytimes.com/2021/08/29/world/middleeast/palestinians-covid-vaccines-hesitancy.html)

For months, the Palestinian authorities struggled to get doses. Now they have the shots, but disinformation and conspiracy theories have led to widespread hesitancy.

By Adam Rasgon

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
