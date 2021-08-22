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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Donors Send Quake Aid to Haiti, but for How Long?
-------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/21/world/americas/haiti-earthquake-aid.html)

[![](https://static01.nyt.com/images/2021/08/20/world/20haiti-aid1/merlin_193414350_c0286e44-3b87-40b1-95b0-71252c5eb0e7-superJumbo.jpg)](https://www.nytimes.com/2021/08/21/world/americas/haiti-earthquake-aid.html)

Misuse of previous aid money, Haiti’s political convulsions, and competing humanitarian demands may signal less generosity this time.

By Rick Gladstone

* * *

* * *

Biden Defends Afghanistan Evacuation as Thousands Besiege Kabul Airport
-----------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/20/world/asia/biden-afghanistan-evacuation-kabul-airport.html)

[![](https://static01.nyt.com/images/2021/08/20/world/20AFGHANISTAN-LEDEALL1/merlin_193473240_ebccfda7-c7eb-463e-9b7b-741b575df6f9-superJumbo.jpg)](https://www.nytimes.com/2021/08/20/world/asia/biden-afghanistan-evacuation-kabul-airport.html)

The president cited “significant progress’’ in getting Americans out of Afghanistan. But Afghans linked to U.S. troops and other Western groups fear being left behind.

By Mark Landler

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
