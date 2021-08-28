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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the In Climate Coverage, Reporting the Grim Facts, but Also the Fight
-----------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/27/insider/united-nations-climate-report.html)

[![](https://static01.nyt.com/images/2021/08/27/pageoneplus/27a2_itt/merlin_165791109_1106c605-c251-49da-80f3-00a3dc530cfb-superJumbo.jpg)](https://www.nytimes.com/2021/08/27/insider/united-nations-climate-report.html)

A Times journalist distills the recent U.N. report and talks about how he treats a beat that can get more than a little gloomy.

By Katie Van Syckle

* * *

* * *

Fossils Seized in Police Raid Demystify a Prehistoric Flying Reptile
--------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/27/science/pterosaur-fossil.html)

[![](https://static01.nyt.com/images/2021/08/26/multimedia/26xp-fossil-2-promo/26xp-fossil-2-superJumbo.jpg)](https://www.nytimes.com/2021/08/27/science/pterosaur-fossil.html)

Among the 3,000 fossils seized at a Brazilian port in 2013 was an almost complete skeleton from the pterosaur species Tupandactylus navigans, preserved in six limestone slabs.

By Vimal Patel

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
