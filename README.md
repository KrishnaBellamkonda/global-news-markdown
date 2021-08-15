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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the A Possible Election Call as the Pandemic’s 4th Wave Gets Underway
-----------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/13/world/canada/canada-election-pandemic.html)

[![](https://static01.nyt.com/images/2021/08/13/world/13canadaletter-poll/13canadaletter-poll-superJumbo.jpg)](https://www.nytimes.com/2021/08/13/world/canada/canada-election-pandemic.html)

Prime Minister Justin Trudeau may call an early election as soon as Sunday despite rising Covid-19 cases. If so, it won’t be campaigning as usual.

By Ian Austen

* * *

* * *

Here is what to know about the Haiti earthquake.
------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/14/world/americas/haiti-earthquake-what-to-know.html)

[![](https://static01.nyt.com/images/2021/08/14/world/14haiti-earthquake-live-what-we-know1/14haiti-earthquake-live-what-we-know1-superJumbo.jpg)](https://www.nytimes.com/2021/08/14/world/americas/haiti-earthquake-what-to-know.html)

The quake hit early Saturday, as many residents slept or got ready for the day.

By Isabella Grullón Paz

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
