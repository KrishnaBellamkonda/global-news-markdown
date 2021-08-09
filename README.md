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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the With More Freedom, Young Women in Albania Shun Tradition of ‘Sworn Virgins’
---------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/08/world/europe/sworn-virgins-albania.html)

[![](https://static01.nyt.com/images/2021/08/04/world/04Albania-women1/merlin_191966205_a30a1970-4818-4c7c-a7ac-d720cb6a9a75-superJumbo.jpg)](https://www.nytimes.com/2021/08/08/world/europe/sworn-virgins-albania.html)

A centuries-old tradition in which women declared themselves men so they could enjoy male privilege is dying out as young women have more options available to them to live their own lives.

* * *

* * *

On Afghanistan’s Front Line, There Are No Good Choices
------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/09/world/asia/Afghanistan-taliban-kandahar.html)

[![](https://static01.nyt.com/images/2021/08/06/world/00afghanistan-kandahar-dispatch-top/00afghanistan-kandahar-dispatch-top-superJumbo.jpg)](https://www.nytimes.com/2021/08/09/world/asia/Afghanistan-taliban-kandahar.html)

For the past month, Kandahar, Afghanistan’s second-largest city, has been under siege by Taliban fighters. Families stuck between them and government forces have almost nowhere to go.

By Thomas Gibbons-Neff, Fahim Abed and Jim Huylebroek

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
