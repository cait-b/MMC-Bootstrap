var alphabet = [
    {
        letter: "A", 
        heading: "A is for Accommodation",
        definition: "The currently recommended MINIMUM accommodation size is 6 x 2 x 2 ft with an attached run of at least the same size. The word minimum is one of the key words here; rabbits in the wild cover a huge area – something in the region of 30 tennis courts! Anything less than the biggest possible size you can offer (assuming it is bigger than the above size) is too small!"
    },
    {
        letter: "B", 
        heading: "B is for Bedding",
        definition: "We don’t recommend wood shavings for bedding – it can be dusty, irritate the skin and respiratory system and is not as absorbent as other products available. Aim for straw based or virgin pulp based products for softness and absorbency."
    },
    {
        letter: "C",
        heading: "C is for Cleaning",
        definition: "Litter trays should be kept clean daily with the environment cleaned several times a week too."
    },
    {
        letter: "D",
        heading: "D is for Disinfectants",
        definition: "Many pet safe disinfectants are available, and more powerful disinfectants, such as those containing benzalkonium chloride (quaternary ammonium compounds or QACs) are reported to be effective against Encephalitozoon cuniculi (EC)."
    },
    {
        letter: "E",
        heading: "E is for Eating",
        definition: "Rabbits love to eat – they spend much of their waking hours eating hay and other fun things! Feeding a portion controlled, balenced diet will ensure your rabbits eat right. Feed pellets (not muesli – this can promote selective feeding), and ensure you feed a small selection of rabbit safe vegetables daily."
    },
    {
        letter: "F",
        heading: "F is for Foraging",
        definition: "Rabbits spend something in the region of 80% of their waking time foraging for food; it’s part of they do and is important for domestic rabbits to do too. You can pick wild safe herbs and mix with their hay to encourage foraging, or provide supervised time in a bunny-proof and bunny-safe garden where they’ll enjoy foraging too."
    },
    {
        letter: "G",
        heading: "G is for Guinea Pigs",
        definition: "Guinea Pigs are not suitable companions for rabbits. They speak a different language, have different dietary requirements and can be easily injured by a rabbit – even if unintentionally. Plus there is the possibility of disease transfer. Rabbits need a companion – and that companion needs to be a fellow rabbit."
    },
    {
        letter: "H",
        heading: "H is for Hay",
        definition: "Hay is a vital part of your rabbits diet – they should consume around 80% of their food intake as hay daily. A good guide is a pile of hay about the same size as the rabbit – each and every day. Hay is also important to encourage foraging, an activity also good for emotional wellbeing."
    },
    {
        letter: "I"
        heading: "I is for Ileus",
        definition: "Ileus is another name for Gastrointestinal (GI) stasis, and is when the intestines slow down or stop moving. The rabbits system is designed to cope with a high fibre, low nutrition food source (grasses and hay), and a diet rich in hay is necessary to prevent ileus."
    },
    {
        letter: "J", 
        heading: "J is for Jaw",
        definition: "Rabbits have 28 teeth within their jaw. These are four incisors, two auxiliary incisors, six upper premolars, four lower premolars, six upper molars, and six lower molars. And they grow at an amazingly fast rate of between 1-3mm per WEEK! A lot of hay is needed to keep this growth worn down."
    },
    {
        letter: "K",
        heading: "K is for Knowledgeable Vet"
        definition: "Make sure you use a vet that has much experience with rabbits – which are classed as ‘exotic’ pets (!). Ask how many rabbits they see each week and about their neutering advice. If they don’t see many rabbits very often or only suggest male neutering, they may not be fully up to speed with current best practice, so you may want to speak to another veterinary practice first."
    },
    {
        letter: "L",
        heading: "L is for Love",
        definition: "Rabbits are social creatures, and as a prey species are programmed to live with another. A solo bunny may well be lonely unless provided with much human contact, and even then our advice would be to find a partner if at all possible. The ideal partnership is a neutered male and a neutered female; why not visit your local reputable rabbit rescue to find your bunny some love and get some sound advice and help about bunny bonding – just like humans, their relationship can’t be hurried and needs experienced hands to oversee the bonding process."
    },
    {
        letter: "M",
        heading: "M is for Myxomatosis",
        definition: "Sadly this man-made disease is rife and still kills many thousands of rabbits in the wild and domestic environments annually. It killed around 99% of rabbits when it was introduced into the UK in 1953. Once infected, a rabbit will develop lumps and swellings around the face and genitals, with secondary respiratory issues developing later. Death is slow and painful. Transmitted by biting insects such as fleas and mosquitoes. An annual vaccine is available to help prevent this dreadful disease, and this vaccine is a must for any domestic rabbit. Prevention is the only cure."
    },
    {
        letter: "N",
        heading: "N is for Neutering",
        definition: "Both males and females should be neutered, for the prevention of pregnancy (there are more than enough rabbits in rescue!), behavioral and also for health reasons too. For example, around 80% of females will develop uterine cancer by the age of 4 unless neutered. There’s a very high risk of testicular cancer amongst males too. Both sexes can be very territorial if un-neutered, and this can manifest itself as fighting, area defending (even attacking a human if thought to be entering a defended area) and urine spraying being the most common. As rabbits need a fellow rabbit companion, neutering is essential for relationship harmony too."
    },
    {
        letter: "O",
        heading: "O is for Operation",
        definition: "Should your rabbit need an operation you should not starve it prior to surgery as you would a cat, dog or other species. In fact it would be better to actually encourage greater hay consumption before an operation so the gut is full of fibre whilst the rabbit recovers. Rabbits are unable to vomit so the concern of choking during surgery is simply not present. Speak with your rabbit specialist vet prior to any surgery if you have any concerns on the right pre-surgical preparation."
    },
    {
        letter: "P",
        heading: "P is for Portion Control",
        definition: "To ensure the right daily hay intake (about 80% of the daily food intake), the amount of other foods fed, such as vegetables, treats and commercial rabbit feeds should be fed sparingly to ensure hay consumption is maintained – rabbits will happily fill up on pellets or veg rather than hay if they can; adopting portion control will help to ensure a high hay consumption is maintained. The ideal portion controlled diet contains around 80% hay, 15% vegetables and around 5% pellets."
    },
    {
        letter: "Q",
        heading: "Q is for Quantity",
        definition: "Of hay, of course! It’s often difficult to visualise a diet of 80% hay, so imagine a tightly packed pile of hay the same size as your rabbit. That’s about the right amount of hay they need to consume every day."
    },
    {
        letter: "R",
        heading: "R is for Run",
        definition: "Current recommendations for outside rabbits is for an attached run to be accessible to the rabbits for exercise whatever the weather is doing. Therefore the run needs to be suitably sized (minimum 8ft), and have areas for shelter (think both run and sun), and be completely predator proof. Remember rabbits can dig out, foxes can dig in (or break weak wood or metal) and thieves can unbolt doors (see S for security below – this cannot be stressed enough!)."
    },
    {
        letter: "S",
        heading: "S is for Security",
        definition: "If your rabbits are housed outside they need to be housed in a secure enclosure. That enclosure must prevent them from being able to escape (remember rabbits can dig and jump!), prevent them from being attacked (from the ground and air – and remember foxes can also dig), and prevent them from being stolen too. Strong weld mesh (not chicken wire..this doesn’t even keep chickens safe), locking bolts or padlocks, run on hard standing and a fully enclosed hutch and run constructed out of strong wood is required."
    },
    {
        letter: "T",
        heading: "T is for Tunneling",
        definition: "Rabbits love tunnels – they are designed to live in burrows in the wild, so a tunnel can make a rabbit fee safe and secure. Plus they are great fun to play with too! Tunnels can be used for both indoor and outside play; use plastic tunnels for the outside and cardboard tunnels inside, as these can make a great chew toy too."
    },
    {
        letter: "U",
        heading: "U is for Uterine Cancer",
        definition: "A staggering 85% of female rabbits can develop uterine cancer by the age of 4 if left un-neutered, so neutering is a must. And don’t forget the males need neutering too – testicular cancer is a major risk of un-neutered males too."
    },
    {
        letter: "V",
        heading: "V is for Viral Hemorrhagic Disease (VHD)",
        definition: "Also called Rabbit Haemorrhagic Disease (RHD) and Rabbit Calicivirus Disease (RCD). Firt pinpointed in China in 1983 and in 1992 in the UK, this is a dreadful disease, killing rapidly, often without any external symptoms before death occurs, which is often as little as 12 to 36 hours after infection. Transmission is via the eyes, nose or mouth, and secretions (urine, mucus etc) can transmit the virus in addition to biting insects such as fleas or mosquitoes. As with Myxomatosis, a vaccine is available (recently combined with Myxomatosis for a single annual dual protection vaccine), which all domestic rabbits should receive. Again,prevention against this dreadful disease is the only cure."
    },
    {
        letter: "W",
        heading: "W is for Wire",
        definition: "If you’ve indoor rabbits then beware! Rabbits will seek out and chew through any wires they can find…telephone, lamp, television, computer! Apart from the plastic being bad for their digestion, their wire eating habits means they run a great risk of being electrocuted, which can – of course – be fatal. All wires should be encased in non-chewable trunking and kept well away from inquisitive mouths."
    },
    {
        letter: "X",
        heading: "X is for Xray",
        definition: "If you’re interested in rabbit anatomy, then check out MediRabbit (http://www.medirabbit.com/Radiography/Radioscan_main.htm) – there are some excellent Xrays of various parts of the rabbit for you to examine."
    },
    {
        letter: "Y",
        heading: "Y is for Years and Years!",
        definition: "Rabbit medicine, although still way behind that of cats and dogs, has improved significantly in recent years, and will only continue to improve. This has had significant impact on the longevity of our domestic rabbits, with the lifespan now reaching 10 years or more in some breeds. This is wonderful for the rabbit and it’s human family, but endorses the need for a greater consideration of the long term commitment at the point of acquisition."
    },
    {
        letter: "Z",
        heading: "Z is for Zoonoses",
        definition: "A disease transmittable between species – i.e cat to dog, horse to human. Fortunately zoonoses between rabbits and humans are rare, and mainly include parasites (fleas, mites), and fungal infections (ringworm). Some bacterial infections such as Pasteurella and Salmonella  are transmittable, but it is worth remembering that although a rabbit disease may not be a zoonoses, us humans can easily transmit rabbit diseases (such as EC) form one rabbit to another. Cleanliness and good housekeeping is essential."
    }
]