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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Jacob Desvarieux, Guitarist Who Forged Zouk Style, Dies at 65
-------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/08/arts/music/jacob-desvarieux-dead.html)

[![](https://static01.nyt.com/images/2021/08/08/us/08desvarieux/08desvarieux-superJumbo.jpg)](https://www.nytimes.com/2021/08/08/arts/music/jacob-desvarieux-dead.html)

His band, Kassav’, found millions of listeners as it held on to Caribbean roots while reaching out to the world. He died of Covid-19.

By Jon Pareles

* * *

* * *

Olympics End as They Began: Strangely
-------------------------------------

[Article here](https://www.nytimes.com/2021/08/08/sports/olympics/tokyo-olympics-closing-ceremony.html)

[![](https://static01.nyt.com/images/2021/08/08/sports/08japan-olympics-closing-1/08japan-olympics-closing-1-superJumbo-v2.jpg)](https://www.nytimes.com/2021/08/08/sports/olympics/tokyo-olympics-closing-ceremony.html)

The 32nd Summer Olympics came to a close in Tokyo. “We did it — together!” the president of the International Olympic Committee said, to lukewarm applause.

By Motoko Rich

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
