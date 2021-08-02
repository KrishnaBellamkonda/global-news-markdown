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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the ‘X’ Marks the Spot: Officials Map a Route Out of the Pandemic
-------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/01/health/coronavirus-vaccination-maps-geospatial.html)

[![](https://static01.nyt.com/images/2021/08/01/science/01virus-mapping1/merlin_192097374_62a18f47-be24-4d58-823f-246d90ab75bd-superJumbo.jpg)](https://www.nytimes.com/2021/08/01/health/coronavirus-vaccination-maps-geospatial.html)

Governments and organizations around the world are using geospatial data and digital mapping tools to guide their vaccination campaigns.

By Emily Anthes

* * *

* * *

Even the Pope Has Prayed to Venezuela’s Beloved ‘Doctor of the Poor’
--------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/01/world/venezuela-saint-doctor-hernandez.html)

[![](https://static01.nyt.com/images/2021/08/01/world/00venezuela-saint-dispatch-top/00venezuela-saint-dispatch-top-superJumbo.jpg)](https://www.nytimes.com/2021/08/01/world/venezuela-saint-doctor-hernandez.html)

In a deeply polarized country, suffering an extreme health crisis, one of the few uniting beliefs is the admiration across the political spectrum for a doctor recently beatified by the Vatican.

By Meridith Kohut and Isayen Herrera

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
