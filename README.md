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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Mystery Attacks on Diplomats Leave Scores of Victims but Still Little Evidence
------------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/08/us/politics/havana-syndrome-attacks-mystery.html)

[![](https://static01.nyt.com/images/2021/08/08/lens/08dc-intel-photo1/08dc-intel-photo1-superJumbo.jpg)](https://www.nytimes.com/2021/08/08/us/politics/havana-syndrome-attacks-mystery.html)

While the leading theory in the “Havana syndrome” cases is directed microwave attacks, a classified session for senior government officials said months of investigation were inconclusive.

By David E. Sanger

* * *

* * *

‘There Is a Right and Wrong Way to Tickle a Rat’
------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/09/world/australia/lab-rats-tickle.html)

[![](https://static01.nyt.com/images/2021/08/09/world/09oz-tickle-rats/09oz-tickle-rats-superJumbo.jpg)](https://www.nytimes.com/2021/08/09/world/australia/lab-rats-tickle.html)

Researchers in Australia tickled the rodents every day for a month to see if it would improve their emotional well-being.

By Yan Zhuang

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
