// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var shows_list =[
  {
    name: "American Horror Story",
    network: "FX",
    description: "An anthology series that centers on different characters and locations, including a house with a murderous past, an insane asylum, a witch coven, a freak show, and an enigmatic hotel.",
    image: "http://www.viralpiranha.com/wp-content/uploads/2016/06/Story41.jpg"
  },
  {
    name: "Married At First Sight",
    network: "FYI",
    description: "The cart comes way before the horse in the reality series 'Married at First Sight.' Based on a hit Danish format, 'Married ...' features six people who agree to participate in an extreme experiment: Each covenants legal marriage with a complete stranger. Four specialists -- a sexologist, a spiritualist, a psychologist and a sociologist -- use scientific matchmaking methods to determine each couple, who will not have met or had contact with each other until the wedding day. The series then documents the relationships, including honeymoons and other relatable events of married life. After several weeks, each couple must decide whether to remain together or go their individual ways.",
    image: "http://17077-presscdn-0-94.pagely.netdna-cdn.com/wp-content/uploads/2016/07/married-at-first-sight-logo.jpg"
  },
  {
    name: "Bring It",
    network: "Lifetime",
    description: "When you're competing at the highest levels, hip-hop majorette competitions can be surprisingly intense. The Dancing Dolls of Jackson, Miss., is one of the top dance troupes in the country. The troupe was founded by Dianna Williams, aka Miss D, in 2001 and since then has earned more than 100 trophies and 15 grand champion titles. This docuseries shows what the Dolls go through to get to the top of their game and, they hope, the top of their competitions. Each episode follows the dancers and their mothers as they prepare for competitions, parades and showcases. The episodes culminate in nail-biting battles against their biggest rivals. As a mentor, Miss D doesn't teach the girls just about dance, she also teaches them about the importance of a good education, persistence and positive self-worth.",
    image: "https://lh3.googleusercontent.com/MLrbdJfhn56xfGSwG8pHMGx_yKB9-mnHoBzyKBSjRvDBrtjF4qosBSqgQnDk_OrGsEfD=w1264"
  },
  {
    name: "Greenleaf",
    network: "OWN",
    description: "The Greenleaf family, which runs sprawling Memphis megachurch Calvary Fellowship World Ministries, appears to be a loving and caring clan. Beneath the surface, though, exists scandalous secrets and lies. Greed, adultery and sibling rivalry are among the issues that threaten to test the family's faith and tear the group apart. The scandalous happenings are uncovered by Grace, the estranged daughter of church leader Bishop James Greenleaf, when she returns home after a 20-year absence. Oprah Winfrey has a regular role on the show as Mavis, Grace's aunt.",
    image: "http://s.sidereel.com/tv_shows/59284/giant_2x/TVLG_Greenleaf_3x4_1536x2048_TT.jpg"
  },
  {
    name: "Power",
    network: "Starz",
    description: "It appears James 'Ghost' St. Patrick has it all -- a drop-dead gorgeous wife, a stunning Manhattan penthouse, and the power and success that come with owning hot new nightclub Truth. But a closer look reveals a man living a double life. When Ghost isn't tending to his Fortune 500 business, he's catering to clients of another operation: a drug empire that serves only the rich and influential. While loyal sidekick Tommy protects the cash-cow narcotics venture at all costs, Ghost's new reality is using Truth as more than a front to launder money. It's a way out of the drug game and into a legitimate life with his family, even if everything he loves becomes unknowingly threatened.",
    image: "https://s-media-cache-ak0.pinimg.com/236x/18/c0/d4/18c0d4646a5f1ed65c2de7e356ddb3bd.jpg"
  },
  {
    name: "Hollywood Divas",
    network: "TVOne",
    description: "With stardom comes challenges that make celebrities face the reality of Tinseltown. The actresses profiled on 'Hollywood Divas' experience the dark side of fame, like being blackballed by the industry over a personal relationship or confronting image issues over what others say about them. Golden Brooks thinks reality stars usurp actresses' roles; Countess Vaughn, who believes her physique has limited her roles, gains a newfound confidence after losing weight; Paula Jai Parker feels shunned for marrying a production aide; and Lisa Wu strives for respect as an actress, although she puts her career on hold to care for her mother after she is diagnosed with cancer.",
    image: "http://straightfromthea.com/wp-content/uploads/2014/11/Hollywood-Divas-StraightFromTheA.png"
  },
  {
    name: "American Crime",
    network: "ABC",
    description: "When shocking photos of high-school student Taylor Blaine show up on social media after a party, the boy accuses two basketball players from the elite private school of posting the pictures after drugging and assaulting him. Taylor and his mother stand as the school's wealthy families attack them while the school's headmistress fights to maintain the school's reputation. At the same time, Taylor's girlfriend faces issues of racial tension at her own school, and while the two institutions are widely different in status, the lives of students and teachers at both become entangled.",
    image: "http://static.srcdn.com/wp-content/uploads/american-crime-season-2-premiere-reviews-spoilers.jpg"
  },
  {
    name: "American Horror Story",
    network: "FX",
    description: "An anthology series that centers on different characters and locations, including a house with a murderous past, an insane asylum, a witch coven, a freak show, and an enigmatic hotel.",
    image: "http://www.viralpiranha.com/wp-content/uploads/2016/06/Story41.jpg"
  },
  {
    name: "American Horror Story",
    network: "FX",
    description: "An anthology series that centers on different characters and locations, including a house with a murderous past, an insane asylum, a witch coven, a freak show, and an enigmatic hotel.",
    image: "http://www.viralpiranha.com/wp-content/uploads/2016/06/Story41.jpg"
  },
  {
    name: "American Horror Story",
    network: "FX",
    description: "An anthology series that centers on different characters and locations, including a house with a murderous past, an insane asylum, a witch coven, a freak show, and an enigmatic hotel.",
    image: "http://www.viralpiranha.com/wp-content/uploads/2016/06/Story41.jpg"
  }
];


db.Shows.remove({}, function(err, shows){
  if(err) {
    console.log("Error occurred in remove", err);
  } else {
    console.log("removed all books");

    db.Shows.create(shows_list, function(err, shows){
      if(err) {
      console.log("err", err);
    } console.log("created", shows.length, "shows");
    process.exit();
    });
  }
});
