Adventure.destroy_all
Shelter.destroy_all

Shelter.create(sequence: 1, lat: 45.8815981, long: -68.995052, name: "The Birches")
Shelter.create(sequence: 2, lat: 45.3979119, long: -69.4594822, name: "Wilson Valley Lean-to")
Shelter.create(sequence: 3, lat: 44.9957089, long: -70.3412371, name: "Spaulding Mountain Lean-to")
Shelter.create(sequence: 4, lat: 44.3288655, long: -71.1500395, name: "IMP Campsite")
Shelter.create(sequence: 5, lat: 43.8739725, long: -72.0290049, name: "Hexacuba")
Shelter.create(sequence: 6, lat: 43.5235048, long: -72.9126323, name: "Clarendon")
Shelter.create(sequence: 7, lat: 42.6368722, long: -73.1673664, name: "Bascom Lounge")
Shelter.create(sequence: 8, lat: 37.4221543, long: -80.608555, name: "Pine Swamp Brook Lean-to")
Shelter.create(sequence: 9, lat: 41.2683493, long: -74.2678444, name: "Wildcat")
Shelter.create(sequence: 10, lat: 40.9367036, long: -75.1864659, name: "Kirkridge")
Shelter.create(sequence: 11, lat: 39.9319782, long: -77.486416, name: "Quarry Gap")
Shelter.create(sequence: 12, lat: 38.9306324, long: -78.0327781, name: "Manassas Gap")
Shelter.create(sequence: 13, lat: 38.0855703, long: -78.7865632, name: "Calf Mountain")
Shelter.create(sequence: 14, lat: 37.6130592, long: -79.3918448, name: "Johns Hollow")
Shelter.create(sequence: 15, lat: 37.3908569, long: -80.0292814, name: "Campbell")
Shelter.create(sequence: 16, lat: 37.0577631, long: -81.3993256, name: "Chestnut Knob")
Shelter.create(sequence: 17, lat: 36.6832923, long: -81.5110583, name: "Old Orchard")
Shelter.create(sequence: 18, lat: 36.1721768, long: -82.0111785, name: "Apple House")
Shelter.create(sequence: 19, lat: 36.0565607, long: -82.6572202, name: "Jerry Cabin")
Shelter.create(sequence: 20, lat: 35.6297885, long: -83.3862811, name: "Icewater Spring")
Shelter.create(sequence: 21, lat: 35.0915531, long: -83.5229901, name: "Rock Gap Shelter")
Shelter.create(sequence: 22, lat: 34.6292728, long: -84.192975, name: "Springer Mountain")
#:sequence, null: false
#:lat, null: false
#:long, null: false
#:name, null: false

#question, answerYes, answerNo, consequenceYes, consequenceNo
Adventure.create(question: "Your money is running low, but a Dairy Queen is ahead in town! How about some cheeseburgers?", answerYes: "All the happy families fill you with ennui; your cheeseburger tastes like loneliness.", answerNo: "You find some wild strawberries and a butterfly lands on your hand", consequenceYes: -20, consequenceNo: 5)
Adventure.create(question: "Your pal offers you some water… take it?", answerYes: "What? Untreated from a stream? You've caught dysentary", answerNo: "Your friend gets sick from their own water and you help her to the next shelter", consequenceYes: -30, consequenceNo: -5)
Adventure.create(question: "A river with no bridge up ahead, what adventure! Forge ahead here, or try and find a better spot to cross?", answerYes: "Oh wow, it didn't look that deep before, oh well… here we… oops… HALP!", answerNo: "You spot some sandbars upriver and get some sweet pics on the other side", consequenceYes: -25, consequenceNo: 20)
Adventure.create(question: "You are tired. in town, A postal clerk directes you to the Hapiday Motor Inn, Do you stay at this establishment?", answerYes: "Woo! Hot Water!", answerNo: "Wake up with slugs on your face", consequenceYes: 10, consequenceNo: -10)
#Adventure.create(question: "", answerYes: "", answerNo: "", consequenceYes: , consequenceNo: )
#Adventure.create(question: "", answerYes: "", answerNo: "", consequenceYes: , consequenceNo: )
#Adventure.create(question: "", answerYes: "", answerNo: "", consequenceYes: , consequenceNo: )


