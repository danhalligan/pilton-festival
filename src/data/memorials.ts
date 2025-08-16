import { getAssetPath } from '@/lib/utils'

export interface Memorial {
  id: string
  name: string
  title: string
  image?: string
  years?: string
  shortDescription: string
  fullStory: string
  author?: string
  keyContributions: string[]
}

export const memorials: Memorial[] = [
  {
    id: 'margaret-reed',
    name: 'Margaret Reed',
    title: 'Well-known local historian',
    image: getAssetPath('/images/memorials/margaret-reed.jpg'),
    years: '1933-2023',
    shortDescription: 'Self-taught local historian and author of "Pilton – Its Past and Its People", Margaret was a life member of Pilton Arts Group and historical expert for The Pilton Story heritage archive.',
    fullStory: 'Margaret Anne Bonvoisin came to Devon as an evacuee and never went back. After studying at Barnstaple Girls Grammar School, she married Douglas Harold Reed of The Reform Inn in 1954. She was best known as a self-taught local historian, author of "Pilton – Its Past and Its People" first published in 1991. Using her book as a dissertation, she was awarded a BA and then an MA in Local History by the University of Exeter at age 70. Over the years she published many articles and booklets including "The Public Houses of Pilton", "The Turnpike Roads of Pilton" and "St Margaret\'s Leper Hospital". In her later years she was closely involved as a volunteer and historical expert for The Pilton Story heritage archive from its beginning in 2012.',
    author: 'Martin Haddrill',
    keyContributions: ['Local historian', 'Author of "Pilton – Its Past and Its People"', 'Pilton Arts Group life member', 'Heritage archive expert', 'University of Exeter MA at age 70']
  },
  {
    id: 'liz-eveleigh',
    name: 'Liz Eveleigh',
    title: 'A Special Friend to Many',
    image: getAssetPath('/images/memorials/liz-eveleigh.jpg'),
    shortDescription: 'Skilled seamstress who made hundreds of costumes for Festival and pantomime. Key contributor to Pilton community spirit, Festival Committee member for many years, and Church Hall Committee member.',
    fullStory: 'Liz was a skilled seamstress who made hundreds of costumes for the Festival and pantomime over 25 years. She was a key contributor to Pilton community spirit and was known and loved by everyone. She served on the Festival Committee for many years, helping to organise the Festival, and was also a Church Hall Committee member, heavily involved in the refurbishment of the Church Hall. Liz was always there to support and help with the running of community social events. Both Liz and Jim, her devoted late husband, were great fun to be with. Above all Liz was a good, kind, gentle, caring, wonderful person, and a special friend to many people.',
    author: 'Abi Winfield',
    keyContributions: ['Festival Committee member', 'Costume maker', 'Church Hall Committee', 'Community event organiser', 'Skilled seamstress']
  },
  {
    id: 'annie-featherstone',
    name: 'Annie Featherstone',
    title: 'A Beautiful Soul',
    image: getAssetPath('/images/memorials/annie-featherstone.jpg'),
    shortDescription: 'Physiotherapist and healer who brought wholesome care to hundreds of patients. Known for her remarkable gift of having time for everyone equally and her love of nature and feeding people.',
    fullStory: 'Annie was truly a child of the universe. The amount of good that she brought to the world, the number of broken bodies she fixed, and the countless minds she put at ease are astonishing. She had the remarkable gift of having all the time in the world for everyone equally. She gave that time to encourage, to inspire and to heal. With each patient, it was less about the physiotherapy and more about helping to heal the emotional and psychological wounds that can come with long term injuries. She wove her love of nature into her every day, and could often be found by an open window at 4am in summer, cup of tea in hand, listening to the dawn chorus. She was not only a strong woman, but also a woman whose mind was at peace with the world.',
    author: 'Mike Featherstone',
    keyContributions: ['Physiotherapist', 'Holistic healer', 'Nature lover', 'Community supporter', 'Peaceful counselor']
  },
  {
    id: 'tracy-grant',
    name: 'Tracy Grant',
    title: 'Made Our Lives Brighter',
    image: getAssetPath('/images/memorials/tracy-rick-midge.jpg'),
    shortDescription: 'Hard worker at Saunton Golf Club who was loved by all. Always willing to be involved in community activities, she ran the temporary Hall bar and made crafts for charity markets.',
    fullStory: 'Tracy was one of those people that made life brighter to be in her company, a kind and considerate person who always looked out for others. In 20 years, she never said anything unkind about anyone and always looked for the good and positive in people. She lived with her husband Rick and their Jack Russell, Mitch. Tracy was a hard-worker and thrived on being busy. She worked for several years at Saunton Golf Club and was so loved by them that when she became poorly, they organised a rota to drive her to Exeter for treatment. Tracy was always willing to be involved in anything community-orientated and took on the temporary Hall bar, raising much needed money. Even when she had to leave work she started making greetings cards, Christmas cakes and chocolates to sell at craft markets – all profits went to charity.',
    author: 'Pip Cartmell',
    keyContributions: ['Saunton Golf Club worker', 'Community volunteer', 'Hall bar manager', 'Charity fundraiser', 'Craft maker']
  },
  {
    id: 'carol-haddrill',
    name: 'Carol Haddrill',
    title: 'Community Organiser',
    image: getAssetPath('/images/memorials/carol-haddrill.jpg'),
    years: '1947-2019',
    shortDescription: 'Active in St Mary\'s Church and wider Pilton community. Helped re-start Friends of Pilton Church, instigated The Big Pilton Quiz, and organised various village displays and events.',
    fullStory: 'Born in Cheshire, Carol came to live in Pilton with her husband Martin, and was active in both St Mary\'s Church and in the wider Pilton community as well as being involved in Pilton Festival. She helped re-start the Friends of Pilton Church, organising wonderful summer and winter concerts in St Mary\'s Church to raise money for its maintenance. She was the instigator of The Big Pilton Quiz which reached its ninth year in 2019. She organised the Decorate your Door, Scarecrows, Pirates, Shepherds and Wellies displays around the village in July each year. More recently she ran one half of the ticket office for the revived Pilton Panto and the annual walking Treasure Hunt and Tea, a quiet Sunday afternoon antidote to the previous noisy Green Man Day.',
    keyContributions: ['Friends of Pilton Church organiser', 'Big Pilton Quiz creator', 'Village displays coordinator', 'Panto ticket office', 'Church fundraiser']
  },
  {
    id: 'tom-evans',
    name: 'Tom Evans',
    title: 'Town Crier',
    image: getAssetPath('/images/memorials/tom-evans.jpg'),
    years: '1953-2019',
    shortDescription: 'Barnstaple Town Crier who led the popular annual Green Man procession from Barnstaple Museum to Pilton for over 20 years. One of Barnstaple\'s most recognisable characters.',
    fullStory: 'Tom was one of Barnstaple\'s most recognisable characters in his role as a guide and tourist information officer. In Pilton he was best known for leading the popular, annual Green Man procession from Barnstaple Museum to Pilton which he had done for upwards of 20 years. His proclamation of the appearance of the Green Man and the start of the market was an important part of the magic of the day. He was a difficult act to follow and will be much missed.',
    keyContributions: ['Town Crier', 'Procession leader', 'Tourist guide', 'Festival announcer', 'Community figurehead']
  },
  {
    id: 'noel-harley',
    name: 'Noel Harley',
    title: 'Community Stalwart',
    image: getAssetPath('/images/memorials/noel-harley-canterbury.jpg'),
    years: 'Died 2009',
    shortDescription: 'Founder member of the re-incarnation of Pilton Festival. Inspiration behind many community activities, known for his enormous sense of fun and generosity of spirit.',
    fullStory: 'Along with his wife Pet, Noel was a stalwart of community life in Pilton and was a founder member of the re-incarnation of Pilton Festival. Noel was the inspiration behind many community activities, all fueled by his enormous sense of fun and touched by his generosity of spirit. He appeared in the brilliant Canterbury Tales performance in the garden of The Chichester Arms in 2004, showcasing his theatrical talents and community involvement.',
    keyContributions: ['Festival founder member', 'Community inspiration', 'Canterbury Tales performer', 'Community stalwart', 'Generous spirit']
  },
  {
    id: 'hamish-patrick',
    name: 'Hamish Patrick',
    title: 'Pilton Leading Light',
    image: getAssetPath('/images/memorials/hamish-patrick.jpg'),
    years: 'Died 2014',
    shortDescription: 'Founding member of Pilton Festival who directed the Green Man Pageant and organised Rotary Gardens. Former actor who appeared in TV series including Crossroads in 1978.',
    fullStory: 'Born in London, educated in the USA, trained as an actor and did theatre work and several TV series most notably Crossroads in 1978. He moved to North Devon in 1981 and was a huge influence on community events in Pilton. His dream was to turn the tide of fracturing communities when children grew up and left. He rightly believed that a strong community bond would bring them back and 25 years later some of those children are on the Festival Committee. He directed the Green Man Pageant and organised the family-friendly haven of Rotary Gardens. Over the years he adapted, directed and acted in some 20 local pantomimes and was a staunch supporter of local charities. The Rotary Club of Barnstaple acknowledged his enormous contribution to Pilton life by posthumously making him their Citizen of the Year.',
    keyContributions: ['Festival founding member', 'Green Man Pageant director', 'Rotary Gardens organiser', 'Local pantomime director', 'Community bond builder']
  },
  {
    id: 'albert-linacre',
    name: 'Albert Linacre',
    title: 'Key Pilton Figure',
    image: getAssetPath('/images/memorials/albert-linacre.jpg'),
    years: '1930-2015',
    shortDescription: 'Catering management expert who moved to Pilton in 1977. Made distinctive Festival costumes with his sewing ladies, helping create the magical spectacle we know today.',
    fullStory: 'Born in Birmingham in 1930, Albert had a successful career in catering management around London before moving to North Devon in 1977 with his wife Maggie. They bought a shop and house in Pilton Street, running a wholefood shop and coffee bar while Albert taught catering at North Devon College. In 1982 the first Pilton Festival took place and Albert, closely involved in its organisation, started making costumes. When the first Green Man Day was held in 1995, Albert, with the help of his sewing ladies, made the distinctive costumes which characterise the event to this day. His strength, enthusiasm and skill inspired others and certainly helped Pilton\'s community activities to prosper. Without Albert the Festival would not be the wonderful magical spectacle it is today.',
    keyContributions: ['Festival costume creator', 'Community activity leader', 'Catering instructor', 'Shop owner', 'Magical spectacle builder']
  },
  {
    id: 'laurie-wedge',
    name: 'Laurie Wedge',
    title: 'The Tall Green Man',
    image: getAssetPath('/images/memorials/laurie-wedge.jpg'),
    years: '1953-2016',
    shortDescription: 'The Green Man on stilts who graced Pilton Festival for 15 years. Ten-feet tall in spectacular plant costume, sprinkling rose petals and offering green blessings to thousands.',
    fullStory: 'Laurie was the Green Man on stilts who graced Pilton Festival for 15 years. Many thousands of people saw and enjoyed his deep commitment to the Festival. No-one could miss his giraffe-like walk through the crowd, ten-feet tall dressed in a spectacular plant and flower costume, sprinkling everyone he could with rose petals and offering them a green blessing. He really loved what he did on the day - it was about fertility and abundance. Laurie came from London where he learned stiltwalking and other circus skills. He was a very authentic choice for the Green Man, as he loved nature, gardening and growing things. His garden was absolutely bursting with plants, everything from a huge wild cherry tree to small bonsai trees in pots.',
    keyContributions: ['Stilt-walking Green Man', 'Rose petal blesser', 'Nature lover', 'Circus performer', 'Garden enthusiast']
  },
  {
    id: 'dave-butt',
    name: 'Dave Butt',
    title: 'Gifted Community Leader',
    image: getAssetPath('/images/memorials/dave-butt.jpg'),
    years: 'Died 2016',
    shortDescription: 'Assistant Headteacher at Braunton Academy, Town and District Councillor, and leading player in Pilton community. Huge supporter of rugby and various charities.',
    fullStory: 'Dave was Assistant Headteacher at Braunton Academy until 2010, a Barnstaple Town and then North Devon District Councillor and Honorary Alderman, and a leading player in the Pilton community. He contributed enormously to the world of rugby, was Chairman of Devon RFU, and was closely involved in the 2015 World Cup. He was a huge supporter of the Barnstaple-based charity Amigos Worldwide, and worked as a volunteer for Children\'s Hospice South West. Although he had stepped down from formal public duty in recent years, Dave was still very much involved in North Devon Theatres and Museum. His ability to bring people together and get things to happen resulted in the growing involvement of the next generation willing to help the community come together.',
    keyContributions: ['Braunton Academy teacher', 'Town Councillor', 'Rugby Chairman', 'Charity supporter', 'Community bridge-builder']
  }
]