# Preflight thoughts 🚀

> Fun Fact 💡
> I am afraid of flying.

## Okay dude, what else scares you?

Starting a small project like this, I can't help but seeing some areas of risk:

[OctoKit](https://github.com/octokit) seems like a pretty solid SDK, and GitHub
is notoriously good at writing public interfaces... but I'm still very risk averse
when it comes to picking out a new library.

Adoption seems reasonable, and there are no GitHub issues that strike me
as particularly blocking. Rate limiting won't affect a project at this scale, and
either way it looks like you can throttle to prevent abuse from within the library.

## So what about the general design?

Since we'll be graphing our data, a good addition will be some data on our
`x` and `y` axes to display what it is we're actually looking at (commits by week).

The legend (or something resembling one) will exist in the sidebar, and each repository
item displayed could easily be made to link out to the repository it represents.

I think the core loop should revolve around the URL structure of the site. We'll
need to store the source of truth somewhere, and by keeping everything in the URL
in some consistent way we can allow for easy sharing of state between any clients.

"But Dyl -" you may ask, "how will you keep the color data consistent for each
repository?". Good question, me. Smart, forward thinking. I like you.

The answer is, anything can be a hash function if you're brave enough! By hashing
the name/owner pair of the repository into a hexadecimal value, we'll have a consistent
color palette for any given list of repositories.

"Follow up: won't you be worried about hash collisions? Those are also scary!".

No, I don't think I'm too worried about hash collisions here (though I would like
to acknowledge that this is a legitimate concern).
