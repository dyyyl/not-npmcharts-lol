# Postflight thoughts ✈️

> Fun Fact 💪🏽
> I fear nothing

## So how did it go?

Pretty well! Love some things, didn't love some other things... absolutely lost
it for a minute in between the two, but I feel like I really found myself in the end there.

### The Good 👍🏽

As far as an API for grabing data by some arbitrary shape (ranging from the shapeless blob
of a REST call to the fine-tuned instrument of a GraphQL query), OctoKit did a really good
job at providing a high level interface for handling data.

The core loop I had wondered about actually worked really well on the first try, and powering
it with the toy hashing function I made was delightful to watch grow up to do its job.

Choosing [Nivo](https://nivo.rocks/) as a graphing library was clutch here - incredibly,
(though inconsistently) documented features, and all the patterns word very well.

Was worried `nivo` would be a little too ✨ magical✨, but honestly this is a shinging
beacon of light for really solid datavis offerings in the OSS sector.

### The Bad 👎🏽

Oh my gosh, the type system for OctoKit resposes is just a mess. I swear if I have some
downtime in the next couple weeks, I want to spend some quality time to work through
the decision-making history on how this type system came to be. If this is the kind
of FOSS goodwill I can find the bandwidth for, I would want to contribute toward OctoKit
types being anything but the worst possible thing 😅

## So, how _DID_ it go?

Other than that, there was a lot of context switching due to the unfortunate circumstance
in which I found myself during most of the development. In general I try to avoid context switching:

![Words to live by](https://c.tenor.com/-2NCZgA886oAAAAC/never-half-ass-two-things-whole-ass-one-thing-do-it-all.gifgif)

I made a pretty thorough effort to document as I went, which really helped me keeping
this all together as my attention was shifted from work -> projects -> hospitals -> work.

Overwhelmingly most of the work done was either spent writing code or documenting it;
the UI came first and it came quite easily. Project architecture is standard as heck,
so that wasn't very time consuming at all. Debugging? There could and maybe should have
been more time for this one.

For what it's worth, there are no interesting bugs in the app currently known -- given
more time, next steps will be to add some test boundaries outside of static/unit tests.

> Stretch goal 📝
> Integration tests (especially integration level tests on the [component layer](https://docs.cypress.io/guides/component-testing/introduction))

My only other regret would be around optimistic loading patterns - some flash grey skeletons
would look really nice I think ☠️

## Fine, what's next then?

My core takeaway here is that OctoKit is a solid SDK for interfacing with any GitHub
data you might need access to. Their type system is pretty bad, but that's something
that can either be fixed on their end or by putting more elbow grease into our internal
type system. I think if I were to do a redux of this process, I'd not choose to do
this as an SPA but would probably lean even further into core web technologies (I really,
REALLY like web APIs). Probablty I'd meet in the middle and go with [remix.run](https://remix.run/) or [NextJS](https://nextjs.org/).

The biggest thing about solo projects like these is that they can just be lonesome as hell. I truly
believe the best development cannot happen in isolation, and I think on my next project I'll aim
to pair/ensemble most or all of it, because I think the overall quality of the software and the experience
would be much higher on both counts.
