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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Lynn C. Franklin, Literary Agent and Memoirist on Adoption, Dies at 74
----------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/02/books/lynn-franklin-dead.html)

[![](https://static01.nyt.com/images/2021/08/03/obituaries/29Franklin1/29Franklin1-superJumbo.jpg)](https://www.nytimes.com/2021/08/02/books/lynn-franklin-dead.html)

She represented Desmond Tutu and Deepak Chopra, but the book closest to her was the one she wrote about giving up her baby and then reuniting with him.

By Katharine Q. Seelye

* * *

* * *

Your Monday Briefing
--------------------

[Article here](https://www.nytimes.com/2021/08/01/briefing/afghanistan-withdrawal-olympics-gymnastics-tunisia.html)

[![](https://static01.nyt.com/images/2021/07/31/world/02ambriefing-aus-nl-PROMO/02ambriefing-aus-nl-AFGHAN-superJumbo-v2.jpg)](https://www.nytimes.com/2021/08/01/briefing/afghanistan-withdrawal-olympics-gymnastics-tunisia.html)

Afghans are fleeing the Taliban advance.

By Melina Delkic

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
