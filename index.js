const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

// Sample blog posts data
const posts = [
  {
    id: 1,
    title: "The Art of Doing Less",
    excerpt: "Minimalism isn't about having nothing. It's about making room for what matters most in your life and work.",
    content: `Minimalism isn't about having nothing. It's about making room for what matters most in your life and work.

We live in a world that celebrates busyness. More tasks, more notifications, more commitments. But what if the secret to a fulfilling life is doing fewer things — and doing them exceptionally well?

The Japanese concept of "ma" refers to the meaningful pause between notes in music. Without silence, there is no melody. Without space, there is no clarity. The same applies to how we structure our days.

Start small. Remove one thing from your to-do list today that doesn't truly need to be there. Notice how it feels. That feeling of relief? That's your mind thanking you for the space.

True productivity isn't measured in hours worked, but in the quality of what you create and the presence you bring to each moment.`,
    date: "May 1, 2026",
    author: "Vipin Yadav",
    readTime: "3 min read",
    tag: "Lifestyle"
  },
  {
    id: 2,
    title: "Building Things That Last",
    excerpt: "Good software, like good architecture, isn't built in a day. It's crafted with intention, patience, and a deep respect for the people who will use it.",
    content: `Good software, like good architecture, isn't built in a day. It's crafted with intention, patience, and a deep respect for the people who will use it.

When we rush to ship features, we accumulate what engineers call "technical debt" — shortcuts that feel convenient today but become painful tomorrow. The same is true in life. The relationships we invest in slowly, the skills we build deliberately, the habits we form consistently — these are the things that stand the test of time.

There's a cathedral in Barcelona that has been under construction since 1882. Antoni Gaudí knew he would never see it completed. Yet he designed every stone with the same care as if he would. That's the mindset of someone building for permanence.

Ask yourself: am I building something that will still matter in five years? Ten? If not, perhaps it's worth slowing down to reconsider what you're actually creating.`,
    date: "April 24, 2026",
    author: "Vipin Yadav",
    readTime: "4 min read",
    tag: "Technology"
  },
  {
    id: 3,
    title: "On Learning Something New Every Day",
    excerpt: "Curiosity is a muscle. The more you use it, the stronger it gets. And the world rewards those who never stop asking questions.",
    content: `Curiosity is a muscle. The more you use it, the stronger it gets. And the world rewards those who never stop asking questions.

There's a concept in martial arts called "shoshin" — beginner's mind. It means approaching every situation as if for the first time, without assumptions or preconceptions. Masters don't lose this quality. In fact, it's often what makes them masters.

Learning doesn't require a classroom or a course. It happens when you read something that challenges your worldview. When you talk to someone whose life looks nothing like yours. When you try to build something you've never built before and fail spectacularly.

Failure, by the way, is the most efficient learning algorithm known to mankind. Embrace it.

Commit to learning one small thing every day. Not to become an expert. But to stay curious. To stay alive to the world's endless complexity and beauty.`,
    date: "April 17, 2026",
    author: "Vipin Yadav",
    readTime: "3 min read",
    tag: "Growth"
  },
  {
    id: 4,
    title: "Why Consistency Beats Motivation",
    excerpt: "Motivation is a wave — it rises and falls. Consistency is the tide — slow, steady, and unstoppable over time.",
    content: `Motivation is a wave — it rises and falls. Consistency is the tide — slow, steady, and unstoppable over time.

We've been sold a myth that success comes from bursts of inspiration. From waiting until you feel ready. From finding your passion and then everything clicks into place. But talk to anyone who has actually built something meaningful and they'll tell you a different story.

They show up when they don't feel like it. They write the terrible first draft. They practice the scale they've practiced a thousand times. They make the call even when they're nervous.

James Clear writes about the idea of systems over goals. Goals are the destination. Systems are the vehicle. And a reliable vehicle — one you can count on every single day — will get you further than the fastest car you only drive when the mood strikes.

Start with five minutes a day. Just five. The habit of showing up is more valuable than any single session.`,
    date: "April 10, 2026",
    author: "Vipin Yadav",
    readTime: "4 min read",
    tag: "Productivity"
  }
]

// Home page
app.get('/', (req, res) => {
  res.render('home', { posts })
})

// Single post page
app.get('/post/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id))
  if (!post) return res.status(404).render('404')
  const related = posts.filter(p => p.id !== post.id).slice(0, 2)
  res.render('post', { post, related })
})

// About page
app.get('/about', (req, res) => {
  res.render('about')
})

// 404
app.use((req, res) => {
  res.status(404).render('404')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Blog running at http://localhost:${PORT}`)
})
