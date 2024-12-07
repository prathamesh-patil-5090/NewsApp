import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = [
    {
    "source": {
    "id": null,
    "name": "Yahoo Entertainment"
    },
    "author": "Quartz",
    "title": "Bitcoin booms, Trump Media stock slumps, and Hawk Tuah's memecoin melts down: Markets news roundup  Yahoo Finance",
    "description": "Buying a car costs more than just the MSRP. If you want to keep your car in good condition, you’ll need to maintain it over time. But maintenance costs can...",
    "url": "https://finance.yahoo.com/news/bitcoinboomstrumpmediastock140000786.html",
    "urlToImage": "https://media.zenfs.com/en/quartz.com/9eec58439fa9ab1a419d31b9c32ed901",
    "publishedAt": "20241207T14:00:00Z",
    "content": "Photo: RJ Sangosti/MediaNews Group/The Denver Post via Getty Images / Contributor (Getty Images), Brandon Bell (Getty Images), Spencer Platt (Getty Images), Taiyou Nomachi (Getty Images), NATALIA KOL… [+3402 chars]"
    },
    {
    "source": {
    "id": "theverge",
    "name": "The Verge"
    },
    "author": "Justine Calma",
    "title": "Google’s AI weather prediction model is pretty darn good  The Verge",
    "description": "Is AI better at predicting the weather? Google’s AI model outperformed a leading forecast system in one study.",
    "url": "https://www.theverge.com/2024/12/7/24314064/aiweatherforecastmodelgoogledeepmindgencast",
    "urlToImage": "https://cdn.voxcdn.com/thumbor/_d6CQ0REf8H09mKT4F6ofkuv_4=/0x0:4243x2828/1200x628/filters:focal(2242x1144:2243x1145)/cdn.voxcdn.com/uploads/chorus_asset/file/25777241/1175363196.jpg",
    "publishedAt": "20241207T13:00:00Z",
    "content": "Googles AI weather prediction model is pretty darn good\r\nGoogles AI weather prediction model is pretty darn good\r\n / The company says its AI model outperformed a traditional forecasting system.\r\nGenC… [+5946 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "David Wainer",
    "title": "UnitedHealth Backlash Signals Possible Shift in Washington and on Wall Street  The Wall Street Journal",
    "description": "Investors have been counting on a deregulatory surge in the health insurance business, but it might not be so simple",
    "url": "https://www.wsj.com/health/healthcare/unitedhealthinsurancenegativepublicsentiment53d111d7",
    "urlToImage": "https://images.wsj.net/im21845915/social",
    "publishedAt": "20241207T12:00:00Z",
    "content": null
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "The Wall Street Journal",
    "title": "Dividend Stocks Are Primed for a Comeback in 2025  The Wall Street Journal",
    "description": null,
    "url": "https://www.wsj.com/finance/stocks/dividendstocks2025payoff1d0a4521",
    "urlToImage": null,
    "publishedAt": "20241207T10:30:00Z",
    "content": null
    },
    {
    "source": {
    "id": null,
    "name": "Forbes"
    },
    "author": "Dave Winder",
    "title": "FBI Warns Smartphone Users—Hang Up And Create A Secret Word Now  Forbes",
    "description": "The FBI has issued a public warning for smartphone users to hang up immediately and create a secret word as new AI cyber attacks hit—here’s what you need to know and do.",
    "url": "https://www.forbes.com/sites/daveywinder/2024/12/07/fbiwarnssmartphoneusershangupandcreateasecretwordnow/",
    "urlToImage": "https://imageio.forbes.com/specialsimages/imageserve/666190ed69456135aca56580/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
    "publishedAt": "20241207T10:15:00Z",
    "content": "Hang up and create a secret word, FBI says\r\nNurPhoto via Getty Images\r\nUpdate, Dec. 07, 2024: This story, originally published Dec. 05, now includes details of innovative technological solutions for … [+6664 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "As.com"
    },
    "author": "Corina González, Gidget Alikpala",
    "title": "Social Security: What is the maximum retirement benefit in 2025?  AS USA",
    "description": "Social Security beneficiaries can expect bigger checks next year thanks to the cost of living adjustment. Here’s what the maximum benefit will be in 2025.",
    "url": "https://en.as.com/latest_news/socialsecuritywhatisthemaximumretirementbenefitin2025n/",
    "urlToImage": "https://img.asmedia.epimg.net/resizer/v2/WQC65C2UZZPZJPHYARVB2U4REI.jpg?auth=c60024675b0637fd0bf6ac179d7a96ab976dbc1d788009683b734f1916997800&width=1472&height=828&focal=548%2C322",
    "publishedAt": "20241207T03:14:21Z",
    "content": "Social Security payments will increase next year thanks to the costofliving adjustment or COLA. The Social Security Administration calculates the COLA each year based on changes in the Consumer Pri… [+2629 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "The Wall Street Journal",
    "title": "It’s Not Just Ken Griffin. Rich Chicago Residents Are Losing Their Shirts on Real Estate.  The Wall Street Journal",
    "description": null,
    "url": "https://www.wsj.com/realestate/luxuryhomes/itsnotjustkengriffinrichchicagoresidentsarelosingtheirshirtsonrealestate71fc4fe0",
    "urlToImage": null,
    "publishedAt": "20241207T02:00:00Z",
    "content": null
    },
    {
    "source": {
    "id": null,
    "name": "OregonLive"
    },
    "author": "Mike Rogoway | The Oregonian/OregonLive",
    "title": "Intel sputters, jeopardizing Oregon’s financial engine  OregonLive",
    "description": "Intel has no easy options as it tries to right its business. Whatever path it takes will have profound consequences for Oregon.",
    "url": "https://www.oregonlive.com/siliconforest/2024/12/intelsputtersjeopardizingoregonsfinancialengine.html",
    "urlToImage": "https://www.oregonlive.com/resizer/v2/DAZQX4BXAFF7TL3UYVNSCQLHJU.jpg?auth=3c177760c43b551e5c8404d61ac4c9fc1b827e459578855ae1fb715232ba9de3&width=1280&quality=90",
    "publishedAt": "20241207T01:52:00Z",
    "content": null
    },
    {
    "source": {
    "id": "reuters",
    "name": "Reuters"
    },
    "author": "Joey Roulette",
    "title": "Trump's NASA pick a boon for SpaceX, but will face political challenges  Reuters",
    "description": "U.S. Presidentelect Donald Trump's pick to helm NASA, a private astronaut and close ally of Elon Musk's SpaceX, is a central figure of a speedy, commercialfocused side of the space industry who would face unfamiliar political challenges as an administrator.",
    "url": "https://www.reuters.com/world/us/trumpsnasapickboonspacexwillfacepoliticalchallenges20241206/",
    "urlToImage": "https://www.reuters.com/resizer/v2/3HDQU5HY5RJR5E75L5FTGFLFBE.jpg?auth=5e82cc635c8a017342fab1f3336e5c08e1633c0435f2649ecb70dfa18d20c0f9&height=1005&width=1920&quality=80&smart=true",
    "publishedAt": "20241207T01:19:00Z",
    "content": null
    },
    {
    "source": {
    "id": null,
    "name": "WKRC TV Cincinnati"
    },
    "author": "WKRC",
    "title": "Honda recalls over 200,000 cars for possible fuel leak issue  WKRC TV Cincinnati",
    "description": "Honda recalled over 200,000 cars for an issue that could possibly cause fuel to leak.",
    "url": "https://local12.com/news/nationworld/recallrecalledrecallshondacarfuelleakcarsvehiclegasgasolineleakingpipepassportpilotcrashcollisionfireexplosioncombustcombustionlightinjurydeath200000200kthousandincompleteconnectionnecktubefiller",
    "urlToImage": "https://local12.com/resources/media2/16x9/4565/986/0x239/90/dc236750bdb34fcf8011b0d59cac0567AP24311277353779.jpg",
    "publishedAt": "20241207T00:48:59Z",
    "content": "CINCINNATI (WKRC)  Honda recalled over 200,000 cars for an issue that could possibly cause fuel to leak.\r\nHonda issued a recall on Nov. 27 regarding over 200,000 Honda Passports from 2023 through 20… [+830 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Common Dreams"
    },
    "author": "https://www.facebook.com/32109457015",
    "title": "'Dirty and Dumb!' Trump May Cancel Contracts to Electrify USPS Fleet  Common Dreams",
    "description": "Presidentelect Donald Trump may cancel contracts to electrify the U.S. Postal Service's fleet.",
    "url": "https://www.commondreams.org/news/uspselectricvehicles",
    "urlToImage": "https://www.commondreams.org/medialibrary/batterypoweredvehiclesatusps.jpg?id=55162846&width=1200&height=600&coordinates=0%2C74%2C0%2C75",
    "publishedAt": "20241207T00:45:05Z",
    "content": "As part of Presidentelect Donald Trump's mission to roll back the Biden administration's climate policies, the Republican may cancel contracts to electrify the U.S. Postal Service's fleet, Reutersre… [+4086 chars]"
    },
    {
    "source": {
    "id": "associatedpress",
    "name": "Associated Press"
    },
    "author": "LARRY NEUMEISTER",
    "title": "Stowaway on flight to Paris tried to sneak into secure areas of other US airports, prosecutor says  The Associated Press",
    "description": "A prosecutor says a woman who evaded security to be a stowaway on a New YorktoParis flight last month claims she had tried to sneak into secure areas of other U.S. airports. Assistant U.S. Attorney Brooke Theodora said Friday that Svetlana Dali told investi…",
    "url": "https://apnews.com/article/stowawaysvetlanadaliparis02dbffdf3f55362b484408e83e28cd09",
    "urlToImage": "https://dims.apnews.com/dims4/default/2a47a0f/2147483647/strip/true/crop/4750x2672+0+248/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F7f%2F80%2F99394beb4ef938d8ffb500e5dba5%2Fc7588e3d0b614a3d91d940b0d683d650",
    "publishedAt": "20241207T00:40:00Z",
    "content": "NEW YORK (AP) A woman who evaded security to be a stowaway on a New YorktoParis flight last month claims shed tried to sneak into secure areas of other U.S. airports before in a bid to travel witho… [+3343 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "KPTV.com"
    },
    "author": "Janae' Hancock, Akim Powell",
    "title": "FBI says iPhone, Android users should stop texting each other. Here’s why  Fox 12 Oregon",
    "description": "The FBI is warning iPhone and Android users against texting each other after a recent Chinese cyberattack.",
    "url": "https://www.kptv.com/2024/12/07/fbisaysiphoneandroidusersshouldstoptextingeachotherhereswhy/",
    "urlToImage": "https://graykptvprod.gtvcdn.com/resizer/v2/FAW4GHRXS5AYVEFQOULSY3O6BA.jpg?auth=c5bada977f23d30b88a7d0831578b3329ba8edc70ca0a7f3912fa11a6499dc95&width=1200&height=600&smart=true",
    "publishedAt": "20241207T00:19:00Z",
    "content": "KANSAS CITY, Mo. (KCTV/Gray News)  The FBI is warning iPhone and Android users against texting each other after a recent Chinese cyberattack.\r\nThe agency stated that the hacking campaign, Salt Typho… [+614 chars]"
    },
    {
    "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "Samantha Delouya",
    "title": "Google sues Consumer Financial Protection Bureau  CNN",
    "description": "Google sued the Consumer Financial Protection Bureau on Friday, challenging the agency’s decision to place Google’s payment division under federal supervision.",
    "url": "https://www.cnn.com/2024/12/06/business/googlepaylawsuitcfpb/index.html",
    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages215074658520241206230349714.jpg?c=16x9&q=w_800,c_fill",
    "publishedAt": "20241207T00:11:15Z",
    "content": "Google sued the Consumer Financial Protection Bureau on Friday, challenging the agencys decision to place Googles payment division under federal supervision.\r\nIn a copy of the lawsuit provided by Goo… [+2394 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "Connor Hart",
    "title": "Palantir, Anduril Partner to Advance AI for National Security  The Wall Street Journal",
    "description": "The companies said they wish to ultimately expand the partnership to other industry partners",
    "url": "https://www.wsj.com/tech/palantirandurilpartnertoadvanceaifornationalsecurity575c6d65",
    "urlToImage": "https://images.wsj.net/im921399/social",
    "publishedAt": "20241206T23:11:00Z",
    "content": null
    },
    {
    "source": {
    "id": null,
    "name": "Barron's"
    },
    "author": "Barron's",
    "title": "MicroStrategy Stock: Why You Should Avoid Its Shares  Barron's",
    "description": null,
    "url": "https://www.barrons.com/articles/microstrategystockbitcoincrypto6cd499cb",
    "urlToImage": null,
    "publishedAt": "20241206T22:50:00Z",
    "content": null
    },
    {
    "source": {
    "id": "usatoday",
    "name": "USA Today"
    },
    "author": "Anthony Robledo",
    "title": "'A shame': Unclaimed Mega Millions ticket worth almost $200 million to expire in California  USA TODAY",
    "description": "The California Lottery is warning whoever purchased the winning Mega Millions numbers in Los Angeles last year to claim $197,500,000 before Dec. 7",
    "url": "https://www.usatoday.com/story/money/lottery/2024/12/06/unclaimedlotteryticketincalifornia/76829300007/",
    "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoringimages/2024/12/06/USAT/768300040071585893318.jpg?crop=5340,3004,x0,y190&width=3200&height=1801&format=pjpg&auto=webp",
    "publishedAt": "20241206T22:47:18Z",
    "content": "<ul><li>A Mega Millions lottery ticket worth $197 million was sold in Los Angeles, but the winner has not yet come forward.</li><li>The winner must claim their prize in person at a California Lottery… [+2258 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "The Wall Street Journal",
    "title": "Super Micro Computer Granted Exceptional Extension to Publish Delayed Annual Report  The Wall Street Journal",
    "description": null,
    "url": "https://www.wsj.com/finance/stocks/supermicrocomputergrantedexceptionalextensiontopublishdelayedannualreportf9cbf0f5",
    "urlToImage": null,
    "publishedAt": "20241206T22:43:00Z",
    "content": null
    },
    {
    "source": {
    "id": null,
    "name": "Jasondeegan.com"
    },
    "author": "Disha Gupta",
    "title": "Is an ApplePeugeot Car on the Horizon? Apple CFO Luca Maestri Tipped to Lead Stellantis!  Jason Deegan",
    "description": "The unexpected resignation of Carlos Tavares as head of Stellantis has sparked intense speculation about who will follow in his footsteps. Among the potential successors, Luca ... Continue Reading →",
    "url": "https://jasondeegan.com/isanapplepeugeotcaronthehorizonapplecfolucamaestritippedtoleadstellantis/",
    "urlToImage": "https://jasondeegan.com/wpcontent/uploads/2024/12/IsanApplePeugeotCarontheHorizonAppleCFOLuca",
    "publishedAt": "20241206T22:42:59Z",
    "content": "The unexpected resignation of Carlos Tavares as head of Stellantis has sparked intense speculation about who will follow in his footsteps. Among the potential successors, Luca Maestri, the Chief Fina… [+2956 chars]"
    },
    {
    "source": {
    "id": "reuters",
    "name": "Reuters"
    },
    "author": "Lawrence Delevingne, Iain Withers",
    "title": "Wall Street adds to stock, rate cut bets after 'Thanksgiving buffet' jobs data  Reuters",
    "description": "Global stocks advanced as investors raised their bets on the prospect of a U.S. interest rate cut this month after payrolls data showed strong job growth in November, while the euro dipped against the dollar as political turmoil gripped France.",
    "url": "https://www.reuters.com/markets/globalmarketswrapup120241206/",
    "urlToImage": "https://www.reuters.com/resizer/v2/GY7OG4Z7LJLBXG3L4AUQBSBYWY.jpg?auth=74f624f423887d6238287e69964f054a7e2e6d924f4c18c3eaf41cd8a1d538ed&height=1005&width=1920&quality=80&smart=true",
    "publishedAt": "20241206T21:39:23Z",
    "content": null
    }
  ];

  constructor() {
    super();
    console.log("NewsItem Constructor");
    this.state = {
      articles: [],
      loading: false
    }
  }
  render() {
    return (
      <div className='container my3'>
        <h2>NewsMonkey  Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem title="Sample Title" description="This is an App." imageUrl="https://iinvdncom.investing.com/news/bitcoin_800x533_L_1411988633.jpg" />
          </div>
          <div className="col-md-4">
            <NewsItem title="Sample Title" description="This is an App."/>
          </div>
          <div className="col-md-4">
            <NewsItem title="Sample Title" description="This is an App."/>
          </div>
        </div>
        <div className="row my3">
          <div className="col-md-4">
            <NewsItem title="Sample Title" description="This is an App."/>
          </div>
          <div className="col-md-4">
            <NewsItem title="Sample Title" description="This is an App."/>
          </div>
          <div className="col-md-4">
            <NewsItem title="Sample Title" description="This is an App."/>
          </div>
        </div> 
      </div>
    );
  }
}

export default News;
