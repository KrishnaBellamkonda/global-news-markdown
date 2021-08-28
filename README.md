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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the A Doctor’s Tour de France, One ‘Medical Desert’ at a Time
---------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/28/world/europe/france-doctor-shortage-health-care-rural.html)

[![](https://static01.nyt.com/images/2021/08/25/world/xxfrance-doctor01/merlin_191117265_14e2dff9-157e-48f2-a5fa-9f5f6be253fc-superJumbo.jpg)](https://www.nytimes.com/2021/08/28/world/europe/france-doctor-shortage-health-care-rural.html)

Newly graduated from medical school, Martial Jardel set off on a five-month road trip to help out in areas of France suffering from a shortage of physicians.

By Gaëlle Fournier

* * *

* * *

How Canadian Leaders Campaign in a Pandemic
-------------------------------------------

[Article here](https://www.nytimes.com/2021/08/27/world/canada/canada-leaders-campaign-pandemic.html)

[![](https://static01.nyt.com/images/2021/08/27/world/27canadaletter-conservatives2/27canadaletter-conservatives2-superJumbo.jpg)](https://www.nytimes.com/2021/08/27/world/canada/canada-leaders-campaign-pandemic.html)

While the Conservative leader Erin O’Toole is still hitting the road, his party has also created a virtual method of reaching voters.

By Ian Austen

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
