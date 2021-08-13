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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Afghanistan Collapse Accelerates as the Taliban Capture 3 Vital Cities
----------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/12/world/asia/kandahar-afghanistan-taliban.html)

[![](https://static01.nyt.com/images/2021/08/12/world/00AFGHANISTAN-KANDAHAR-HFO/merlin_192879501_c6a50e9e-c02e-4598-ba16-cf3514e4f789-superJumbo.jpg)](https://www.nytimes.com/2021/08/12/world/asia/kandahar-afghanistan-taliban.html)

Kandahar, Lashkar Gah and Herat have now fallen to the insurgents, who are racing to seize control of the entire country.

By Christina Goldbaum, Sharif Hassan and Fahim Abed

* * *

* * *

For a Crime at 14, He Faces Death in a Case Casting Doubt on Saudi Reforms
--------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/13/world/middleeast/saudi-arabia-execution.html)

[![](https://static01.nyt.com/images/2021/08/12/world/12saudi-execution/merlin_165667356_379a7b7d-0c70-4241-8729-b172ad0c9fca-superJumbo.jpg)](https://www.nytimes.com/2021/08/13/world/middleeast/saudi-arabia-execution.html)

The kingdom has announced changes to its justice system, but still sentenced a teenager to death for a robbery and the killing of a police officer, despite an alibi and claims of a forced confession.

By Asmaa al-Omar and Ben Hubbard

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
