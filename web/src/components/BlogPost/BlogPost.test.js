import { render, screen, waitFor } from '@redwoodjs/testing'

import BlogPost from './BlogPost'
import { standard } from 'src/components/CommentsCell/CommentsCell.mock'


describe('BlogPost', () => {
  it('renders a blog post', () => {
    const post = {
      id: 1,
      title: 'First post',
      body: `Neutra tacos hot chicken prism raw denim, put a bird on it enamel pin post-ironic vape cred DIY. Street art next level umami squid. Hammock hexagon glossier 8-bit banjo. Neutra la croix mixtape echo park four loko semiotics kitsch forage chambray. Semiotics salvia selfies jianbing hella shaman. Letterpress helvetica vaporware cronut, shaman butcher YOLO poke fixie hoodie gentrify woke heirloom.`,
      createdAt: new Date().toISOString(),
    }
    render(<BlogPost post={post} />)

    expect(screen.getByText(post.title)).toBeInTheDocument()
    expect(screen.getByText(post.body)).toBeInTheDocument()
  })


  it('renders a summary of a blog post', () => {
    const post = {
      id: 1,
      title: 'First post',
      body: `Neutra tacos hot chicken prism raw denim, put a bird on it enamel pin post-ironic vape cred DIY. Street art next level umami squid. Hammock hexagon glossier 8-bit banjo. Neutra la croix mixtape echo park four loko semiotics kitsch forage chambray. Semiotics salvia selfies jianbing hella shaman. Letterpress helvetica vaporware cronut, shaman butcher YOLO poke fixie hoodie gentrify woke heirloom.`,
      createdAt: new Date().toISOString(),
    }
    render(<BlogPost post={post} summary={true}/>)

    expect(screen.getByText(post.title)).toBeInTheDocument()

    expect(screen.getByText(post.title)).toBeInTheDocument()
    expect(
      screen.getByText(
        'Neutra tacos hot chicken prism raw denim, put a bird on it enamel pin post-ironic vape cred DIY. Str...'
      )
    ).toBeInTheDocument()
  })

  // it('check summery to be false initially', () => {
  //   const post = {
  //     id: 1,
  //     title: 'First post',
  //     body: `Neutra tacos hot chicken prism raw denim, put a bird on it enamel pin post-ironic vape cred DIY. Street art next level umami squid. Hammock hexagon glossier 8-bit banjo. Neutra la croix mixtape echo park four loko semiotics kitsch forage chambray. Semiotics salvia selfies jianbing hella shaman. Letterpress helvetica vaporware cronut, shaman butcher YOLO poke fixie hoodie gentrify woke heirloom.`,
  //     createdAt: new Date().toISOString(),
  //   }
  //   render(<BlogPost post={post} />)

  //   // expect(screen.toNotHaveAttribute("summary"))
  // })
})
